import React from "react";
import ReactECharts from "echarts-for-react";

export const Radar = () => {
  const data = [
    { name: "Sales", max: 600, value: 200 },
    { name: "Administration", max: 600, value: 400 },
    { name: "Information Technology", max: 600, value: 100 },
    { name: "Customer Support", max: 600, value: 500 },
    { name: "Development", max: 600, value: 200 },
    { name: "Marketing", max: 600, value: 200 },
  ];
  const radarParameters = {
    radar: {
      splitNumber: 4,
      indicator: [
        {
          name: data[0].name,
          max: data[0].max,
          color: "black",
          axisLabel: {
            show: true,
          },
        },
        ...data.slice(1).map((elem) => ({
          name: elem.name,
          max: elem.max,
          color: "black",
        })),
      ],
    },
    series: [
      {
        name: "Administration",
        type: "radar",
        areaStyle: {
          opacity: 0.5,
        },
        data: [
          {
            value: data.map(({ value }) => value),
            name: "Result",
          },
        ],
      },
    ],
  };
  return <ReactECharts option={radarParameters} lazyUpdate={true} />;
};
