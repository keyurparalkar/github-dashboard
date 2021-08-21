import { TooltipProps } from "recharts";

export interface IAreaChart {
    chartData: any[] | undefined;
    width: number | undefined;
    height: number | undefined;
    xDataKey: string;
    yDataKey: string;
    colors: {
        stroke: string;
        fill: string;
    },
    id: string;
    margin?: {
        top?:number | 20;
        bottom?:number | 0;
        left?:number | 0;
        right?:number | 40;
    },
    tipText: string
}


export type TCustomToolTip = TooltipProps<(string|number)[], number> & {toolTipText: string};