'use client';
import CheckBoxs from '@/components/CheckBoxs';
import GraphDisplay from '@/components/GraphDisplay';
import ItemSection from '@/components/ItemSection';
import LoadingSpinner from '@/components/items/LoadingSpinner';
import { usePrefectures } from '@/hooks/usePrefectures';
import { useState } from 'react';

const Page: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);
  const { loading: prefecturesLoading } = usePrefectures();
  const loading = prefecturesLoading;
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      <CheckBoxs
        selectedPrefectures={selectedPrefectures}
        setSelectedPrefectures={setSelectedPrefectures}
      />
      <ItemSection />
      <GraphDisplay />
    </div>
  );
};

export default Page;
