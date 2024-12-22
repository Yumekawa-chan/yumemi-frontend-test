import ResetButton from '@/components/items/ResetButton';
import PopulationFilter from '@/components/items/PopulationFilter';

interface ItemSectionProps {
  setSelectedPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
}

const ItemSection: React.FC<ItemSectionProps> = ({
  setSelectedPrefectures,
}) => {
  return (
    <div className="flex gap-4">
      <ResetButton setSelectedPrefectures={setSelectedPrefectures} />
      <PopulationFilter />
    </div>
  );
};

export default ItemSection;
