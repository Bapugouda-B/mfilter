import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'DF', value: 8457 },
  { name: 'DeviceF', value: 8636 },
  { name: 'ClickF', value: 56415 },
];

const COLORS = ['#FF0000', '#000080', '#0000FF'];

const Piechart = () => {
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    const label = `${(percent*100).toFixed(1)}%`;

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {label}
      </text>
    );
  };

  return (
    <div style={{ width:"100%", height:"100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PieChart width={340} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piechart;
