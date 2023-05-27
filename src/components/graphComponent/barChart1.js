import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Meta",
    FI: 83,
    CI: 98,
  },
  {
    name: "BioLink",
    FI: 68,

    CI: 98,
  },
  {
    name: "Aura",
    FI: 55,

    CI: 97,
  },
  {
    name: "Trademonk",
    FI: 52,

    CI: 96,
  },
  {
    name: "DV360",
    FI: 51,

    CI: 95,
  },
];

const yAxisFormatter = (value) => `${value}%`;
const tooltipFormatter = (value) => `${value}%`;

export default function Barchart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis tickFormatter={yAxisFormatter} />
          <Tooltip formatter={tooltipFormatter} />

          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="CI" fill="#00FF00">
            <LabelList
              position="top"
              offset={4}
              style={{ fill: "black" }}
              formatter={(value) => `${value}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
