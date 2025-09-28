import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { TopProductData } from 'shared/types';
interface TopProductsChartProps {
  data: TopProductData[];
}
export function TopProductsChart({ data }: TopProductsChartProps) {
  const sortedData = [...data].sort((a, b) => a.sales - b.sales);
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={sortedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" horizontal={false} />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            type="category"
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            width={120}
            tick={{ textAnchor: 'end' }}
            tickFormatter={(value) => {
              const limit = 15;
              if (value.length > limit) {
                return `${value.substring(0, limit)}...`;
              }
              return value;
            }}
          />
          <Tooltip
            cursor={{ fill: 'hsl(var(--accent))' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))',
            }}
            formatter={(value: number) => [`${value} units sold`]}
          />
          <Bar dataKey="sales" fill="hsl(var(--brand))" radius={[0, 4, 4, 0]}>
            <LabelList dataKey="sales" position="right" fill="hsl(var(--muted-foreground))" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}