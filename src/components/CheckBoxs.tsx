'use client';

const CheckBoxs: React.FC = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-center">都道府県</p>
      </div>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-10 gap-2">
        {[
          { id: 'tokyo', name: '東京ダミー' },
          { id: 'osaka', name: '大阪ダミー' },
          { id: 'kyoto', name: '京都ダミー' },
          { id: 'aichi', name: '愛知ダミー' },
        ].map((prefecture) => (
          <label key={prefecture.id} htmlFor={`pref-${prefecture.id}`}>
            <input
              type="checkbox"
              id={`pref-${prefecture.id}`}
              name={prefecture.name}
              value={prefecture.id}
            />
            {prefecture.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxs;
