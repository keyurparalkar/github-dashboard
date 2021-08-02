export interface IAreaChart {
    chartData: any[] | undefined;
    width: number | undefined;
    height: number | undefined;
    xDataKey: string;
    yDataKey: string;
    colors: {
        stroke: string;
        fill: string;
    }
}