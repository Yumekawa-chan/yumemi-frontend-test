'use client';
import CheckBoxs from '@/components/CheckBoxs';
import GraphDisplay from '@/components/GraphDisplay';
import ItemSection from '@/components/ItemSection';
import ErrorMessage from '@/components/items/ErrorMessage';
import LoadingSpinner from '@/components/items/LoadingSpinner';
import { usePopulations } from '@/hooks/usePopulations';
import { usePrefectures } from '@/hooks/usePrefectures';
import { useState } from 'react';

const Page: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);
  const [selectedPattern, setSelectedPattern] = useState('総人口');
  const {
    prefectures,
    error: prefectureError,
    loading: prefecturesLoading,
  } = usePrefectures();

  const {
    data,
    colorMap,
    error: populationError,
  } = usePopulations(selectedPrefectures, prefectures, selectedPattern);

  const loading = prefecturesLoading;
  const error = prefectureError || populationError;

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
      <ItemSection
        setSelectedPrefectures={setSelectedPrefectures}
        selectedPattern={selectedPattern}
        setSelectedPattern={setSelectedPattern}
      />
      <GraphDisplay data={data} colorMap={colorMap} />
    </div>
  );
};

export default Page;
