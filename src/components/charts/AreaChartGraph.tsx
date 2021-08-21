import dayjs from "dayjs";
import * as React from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IAreaChart } from "../../types/types.charts";
import CustomToolTip from "./CustomToolTip";

const AreaChartGraph = ({
  chartData,
  width,
  height,
  xDataKey,
  yDataKey,
  colors,
  id,
  margin,
  tipText
}: IAreaChart) => {
  return (
    <ResponsiveContainer height={height}>
      <AreaChart
        width={width}
        height={height}
        data={chartData}
        margin={{...margin}}
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
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
          tickFormatter={(epochTime: number) =>
            dayjs(epochTime).format("MMM/DD")
          }
        />
        <YAxis dataKey={yDataKey} />
        <Tooltip content={<CustomToolTip toolTipText={tipText} />} />
        <Legend />
        <Area
          type="linear"
          fillOpacity={1}
          dataKey={yDataKey}
          stroke={colors.stroke}
          fill={`url(#${id})`}
          // fill={colors.fill}
          // fill={`linear-gradient(${colors.fill} 100%, ${colors.fill} 20%)`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartGraph;
