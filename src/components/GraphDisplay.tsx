'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <div className="bg-pink-100 border-pink-500 border rounded-lg shadow-lg pt-2 w-full">
      <p className="text-xl font-bold text-center mb-2 text-pink-600">
        人口推移グラフ
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 75, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            type="number"
            domain={[1980, 2020]}
            ticks={[1980, 1990, 2000, 2010, 2020]}
            label={{
              value: '年度',
              offset: 0,
              style: { fontSize: 12, fill: '#e85298', fontWeight: 'bold' },
              position: 'bottom',
            }}
          />
          <YAxis
            tickFormatter={(value) =>
              Math.floor(value / 10000).toLocaleString()
            }
            width={30}
            domain={[0, 'dataMax']}
            label={{
              value: '人口数(万人)',
              position: 'left',
              offset: 0,
              style: { fontSize: 12, fill: '#e85298', fontWeight: 'bold' },
            }}
          />
          <Tooltip
            formatter={(value: number) =>
              Math.floor(value / 10000).toLocaleString() + '万人'
            }
          />
          <Legend />
          {Object.keys(colorMap).map((key) => (
            <Line
              key={key}
              dataKey={key}
              stroke={colorMap[key]}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphDisplay;
