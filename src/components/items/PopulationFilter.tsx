const PopulationFilter: React.FC = () => {
  const patterns = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

  return (
    <select className="p-2 bg-pink-100 border border-pink-500 rounded-lg text-pink-600 shadow focus:outline-none focus:ring-2 focus:ring-pink-500">
      {patterns.map((item) => (
        <option key={item} value={item} className="text-pink-700">
          {item}
        </option>
      ))}
    </select>
  );
};

export default PopulationFilter;
