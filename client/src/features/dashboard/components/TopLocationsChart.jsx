import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import ChartCard from "./ChartCard";
import ChartTooltip from "../../../components/charts/ChartTooltip";

const TopLocationsChart = ({ data = [] }) => {
  return (
    <ChartCard title="Top Locations">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="location"
            angle={-20}
            textAnchor="end"
            interval={0}
          />

          <YAxis />

          <Tooltip
    content={<ChartTooltip/>}
/>

          <Bar dataKey="count" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default TopLocationsChart;