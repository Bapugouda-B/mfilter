import React from "react";
import {
  Bar,
 ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "FB",
    date: "16-05-2023",
    line: 13800,
    FI: 12900,
    Ins: 2000,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 10000,
    FI: 13900,
    Ins: 2000,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 12000,
    FI: 13000,
    Ins: 2800,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 9000,
    FI: 12400,
    Ins: 1900,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 14000,
    FI: 13500,
    Ins: 2200,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 14800,
    FI: 13800,
    Ins: 1700,
  },
  {
    name: "FB",
    date: "16-05-2023",
    line: 12000,
    FI: 14000,
    Ins: 1700,
  },
];

export default function Mixedchart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} barSize={45}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="FI" stackId="a" fill="#45b6fe" />
          <Bar dataKey="Ins" stackId="a" fill="#FF0000" />
          <Line type="monotone" dataKey="line" stroke="#8B0000" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}