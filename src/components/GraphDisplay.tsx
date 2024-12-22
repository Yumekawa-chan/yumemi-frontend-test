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

interface GraphDisplayProps {
  data: { year: number; [key: string]: number }[];
  colorMap: Record<string, string>;
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({ data, colorMap }) => {
  const keys =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'year') : [];

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
          {keys.map((key) => (
            <Line
              key={key}
              dataKey={key}
              stroke={colorMap[key] || '#CCCCCC'}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphDisplay;
