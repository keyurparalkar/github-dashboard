import dayjs from "dayjs";
import * as React from "react";
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { IAreaChart } from "../../types/types.charts";
import CustomToolTip from "./CustomToolTip";

const AreaChartGraph = ({
  chartData,
  width,
  height,
  xDataKey,
  yDataKey,
  colors,
}: IAreaChart) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={chartData}
      margin={{ top: 20, right: 0, left: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={colors.fill} stopOpacity={1} />
          <stop offset="20%" stopColor={colors.fill} stopOpacity={0.9} />
          <stop offset="50%" stopColor={colors.fill} stopOpacity={0.8} />
          <stop offset="70%" stopColor={colors.fill} stopOpacity={0.7} />
          <stop offset="95%" stopColor={colors.fill} stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey={xDataKey}
        domain={["auto", "auto"]}
        name="Time"
        scale="time"
        tickFormatter={(epochTime: number) => dayjs(epochTime).format("MMM/DD")}
      />
      <YAxis dataKey={yDataKey} />
      <Tooltip content={<CustomToolTip />} />
      <Legend />
      <Area
        type="linear"
        fillOpacity={1}
        dataKey={yDataKey}
        stroke={colors.stroke}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default AreaChartGraph;
