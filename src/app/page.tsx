'use client';
import CheckBoxs from '@/components/CheckBoxs';
import GraphDisplay from '@/components/GraphDisplay';
import ItemSection from '@/components/ItemSection';
import ErrorMessage from '@/components/items/ErrorMessage';
import LoadingSpinner from '@/components/items/LoadingSpinner';
import { usePrefectures } from '@/hooks/usePrefectures';
import { useState } from 'react';

const Page: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);
  const { loading: prefecturesLoading, error: prefectureError } =
    usePrefectures();
  const loading = prefecturesLoading;
  const error = prefectureError;
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      <CheckBoxs
        selectedPrefectures={selectedPrefectures}
        setSelectedPrefectures={setSelectedPrefectures}
      />
      <ItemSection setSelectedPrefectures={setSelectedPrefectures} />
      <GraphDisplay />
    </div>
  );
};

export default Page;
