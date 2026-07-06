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

const ExperienceLevelChart = ({ data = [] }) => {
  return (
    <ChartCard title="Experience Levels">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="experienceLevel"
            angle={-20}
            textAnchor="end"
            interval={0}
          />

          <YAxis />

          <Tooltip />

          <Bar dataKey="count" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default ExperienceLevelChart;