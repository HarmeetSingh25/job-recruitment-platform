import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import ChartCard from "./ChartCard";
import { BAR_COLOR } from "../../../utils/chartColors";
import ChartTooltip from "../../../components/charts/ChartTooltip";

const TopCompaniesChart = ({ data }) => {

    return (
        <ChartCard title="Top Companies">

            <ResponsiveContainer width="100%" height={320}>

                <BarChart
                    data={data}
                    margin={{
                        top:20,
                        right:20,
                        left:0,
                        bottom:50
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="company"
                        angle={-25}
                        textAnchor="end"
                        tick={{fontSize:12}}
                        interval={0}
                    />

                    <YAxis />

                    <Tooltip
    content={<ChartTooltip/>}
/>

                    <Bar
                        dataKey="count"
                        fill={BAR_COLOR}
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </ChartCard>
    )
}

export default TopCompaniesChart;