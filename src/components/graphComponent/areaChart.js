import React from "react";
import "./chart.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    OI: 160000,
    NOI: 7900,
    amt: 2400,
  },
  {
    name: "Feb",
    OI: 145890,
    NOI: 11070,
    amt: 2210,
  },
  {
    name: "Mar",
    OI: 167700,
    NOI: 12390,
    amt: 2290,
  },
  {
    name: "Aprl",
    OI: 154650,
    NOI: 8609,
    amt: 2000,
  },
  {
    name: "May",
    OI: 166500,
    NOI: 11600,
    amt: 2181,
  },
  {
    name: "June",
    OI: 146500,
    NOI: 7000,
    amt: 2181,
  },
  {
    name: "July",
    OI: 168500,
    NOI: 10000,
    amt: 2181,
  },
  {
    name: "Aug",
    OI: 149800,
    NOI: 12000,
    amt: 2181,
  },
];

export default function Areachart() {
  const totalInstalls = data.reduce((acc, cur) => acc + cur.OI , 0);
  const organicInstalls = data.reduce((acc, cur) => acc + cur.OI, 0);
  const nonOrganicInstalls = data.reduce((acc, cur) => acc + cur.NOI, 0);
  const fraudulentInstalls = data.reduce((acc, cur) => acc + cur.NOI, 0);
  const fraudulentPercentage = (
    (fraudulentInstalls / totalInstalls) *
    100
  ).toFixed(2);
  return (
    <>

      <div style={{ width: "100%", height: 300 }}>
        
        <ResponsiveContainer>
          <AreaChart
            data={data}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="OI"
              stroke="#8884d8"
              strokeWidth="2"
              fill="#6593F5"
            />
            <Area
              type="monotone"
              dataKey="NOI"
              stroke="#D10000"
              strokeWidth="2"
              fill="#FA8072"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="installs">
        <div className="installs-type">
          <div>
            <p>Total Installs: {totalInstalls}</p>
            <p>Organic Installs: {organicInstalls}</p>
            <p>Non-Organic Installs: {nonOrganicInstalls}</p>
          </div>
        </div>

        <div className="fraudulent-installs">
          <p>Fraudulent Installs:</p>
          <small>
            {fraudulentInstalls} ({fraudulentPercentage}%)
          </small>
        </div>
      </div>
   
    </>
  );
}
