'use client';

const CheckBoxs: React.FC = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-center text-pink-600">都道府県</p>
      </div>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-10 gap-2 text-xl text-pink-500">
        {[
          { id: 'tokyo', name: '東京ダミー' },
          { id: 'osaka', name: '大阪ダミー' },
          { id: 'kyoto', name: '京都ダミー' },
          { id: 'aichi', name: '愛知ダミー' },
        ].map((prefecture) => (
          <label
            key={prefecture.id}
            htmlFor={`pref-${prefecture.id}`}
            className="flex items-center cursor-pointer select-none"
          >
            <input
              type="checkbox"
              id={`pref-${prefecture.id}`}
              name={prefecture.name}
              value={prefecture.id}
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
              {prefecture.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxs;
