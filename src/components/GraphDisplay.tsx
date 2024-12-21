'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const GraphDisplay: React.FC = () => {
  const data = [
    { year: 1980, Tokyo: 1000000, Osaka: 800000 },
    { year: 1990, Tokyo: 1200000, Osaka: 900000 },
    { year: 2000, Tokyo: 1400000, Osaka: 1000000 },
    { year: 2010, Tokyo: 1600000, Osaka: 1100000 },
    { year: 2020, Tokyo: 1800000, Osaka: 1200000 },
  ];

  const colorMap: Record<string, string> = {
    Tokyo: '#FF0000',
    Osaka: '#0000FF',
  };

  return (
    <div>
      <h2>人口推移グラフ</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          {Object.keys(colorMap).map((key) => (
            <Line key={key} dataKey={key} stroke={colorMap[key]} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphDisplay;
