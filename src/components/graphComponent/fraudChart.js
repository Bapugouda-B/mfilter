import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "FB",
    date: "2023-05-12",
    DF: 1350,
  },
  {
    name: "BioLink",
    date: "2023-05-12",
    DF: 800,
  },
  {
    name: "Aura",
    date: "2023-05-12",
    DF: 350,
  },
  {
    name: "Trademonk",
    date: "2023-05-12",
    DF: 1350,
  },
  {
    name: "DV360",
    date: "2023-05-12",
    DF: 1500,
  },
];

export default function Fraudchart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20 }} barSize={60}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="DF" fill="#45b6fe">
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
