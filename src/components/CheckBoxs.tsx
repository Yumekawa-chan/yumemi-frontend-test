'use client';

import { usePrefectures } from '@/hooks/usePrefectures';

interface CheckBoxsProps {
  selectedPrefectures: string[];
  setSelectedPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBoxs: React.FC<CheckBoxsProps> = ({
  selectedPrefectures = [],
  setSelectedPrefectures,
}) => {
  const { prefectures } = usePrefectures();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedPrefectures((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-center text-pink-600">都道府県</p>
      </div>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-10 gap-2 text-xl text-pink-500">
        {prefectures.map(
          (prefecture: { prefCode: number; prefName: string }) => (
            <label
              key={prefecture.prefCode}
              htmlFor={`pref-${prefecture.prefCode}`}
              className="flex items-center cursor-pointer select-none"
            >
              <input
                type="checkbox"
                id={`pref-${prefecture.prefCode}`}
                name={prefecture.prefName}
                value={prefecture.prefName}
                checked={selectedPrefectures.includes(prefecture.prefName)}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span
                className="
    inline-block h-5 w-5 rounded-md border border-pink-300 bg-pink-100
    relative transition-colors duration-200 ease-in-out
    peer-hover:bg-pink-200 peer-hover:border-pink-400
    peer-checked:bg-pink-200 peer-checked:border-pink-400
    peer-checked:before:content-['✔'] peer-checked:before:text-blue-400
    peer-checked:before:absolute peer-checked:before:left-[0.20rem]
    peer-checked:before:top-[-0.05rem] peer-checked:before:text-sm
  "
              ></span>

              <span className="ml-2 text-pink-600 hover:text-blue-400">
                {prefecture.prefName}
              </span>
            </label>
          )
        )}
      </div>
    </div>
  );
};
export default CheckBoxs;
