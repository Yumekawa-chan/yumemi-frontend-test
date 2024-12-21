import CheckBoxs from '@/components/CheckBoxs';
import GraphDisplay from '@/components/GraphDisplay';

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      <CheckBoxs />
      <GraphDisplay />
    </div>
  );
};

export default Page;
