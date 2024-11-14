import { Card, CardBody, CardHeader } from "@nextui-org/react";
import DashboardToolBar from "../dashboard-toolbar";
import CandidateSourceChart from "@/components/charts/candidate-sources-chart";
import { cn } from "@/lib/utils";

const CandidateScore = () => {
  return (
    <Card className="col-span-4 row-span-4">
      <CardHeader className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Candidate Scores</h2>
        <DashboardToolBar />
      </CardHeader>
      <CardBody className="flex flex-col justify-between">
        <CandidateSourceChart />
        <div className="flex items-center justify-center flex-wrap gap-2">
          {[
            {
              id: 0,
              name: "100 Job Boards",
              background: "bg-red-500",
            },
            {
              id: 1,
              name: "40 Social",
              background: "bg-blue-500",
            },
            {
              id: 2,
              name: "50 Referals",
              background: "bg-green-500",
            },
            {
              id: 3,
              name: "10 others",
              background: "bg-yellow-500",
            },
          ].map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <div className={cn(`h-4 w-4 rounded-md  `, item.background)} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CandidateScore;
