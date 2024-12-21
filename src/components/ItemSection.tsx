import ResetButton from '@/components/items/ResetButton';
import PopulationFilter from '@/components/items/PopulationFilter';

const ItemSection: React.FC = () => {
  return (
    <div className="flex gap-4">
      <ResetButton />
      <PopulationFilter />
    </div>
  );
};

export default ItemSection;
