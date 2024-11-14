"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "january", job_boards: 100, refferals: 50, social: 40, other: 30 },
];
const CandidateSourceChart = () => {
  const totalVisitors =
    chartData[0].job_boards +
    chartData[0].refferals +
    chartData[0].social +
    chartData[0].other;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[220px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Total Candidates
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="job_boards"
          stackId="a"
          cornerRadius={10}
          fill="#4F46E5"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="refferals"
          fill="#DC2626"
          stackId="a"
          cornerRadius={10}
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="social"
          fill="#16A34A"
          stackId="a"
          cornerRadius={10}
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="other"
          fill="#7E22CE"
          stackId="a"
          cornerRadius={10}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
};

export default CandidateSourceChart;
