import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
} from "recharts";
import { Cell } from "recharts";
import { PIE_COLORS } from "../../../utils/chartColors";
import ChartCard from "./ChartCard";
import ChartTooltip from "../../../components/charts/ChartTooltip";

const EmploymentTypeChart = ({ data = [] }) => {
  return (
    <ChartCard title="Employment Types">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
    data={data}
    dataKey="count"
    nameKey="employmentType"
    outerRadius={100}
    label
>
    {
        data.map((entry,index)=>(
            <Cell
                key={index}
                fill={PIE_COLORS[index % PIE_COLORS.length]}
            />
        ))
    }
</Pie>

          <Tooltip
    content={<ChartTooltip/>}
/>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default EmploymentTypeChart;