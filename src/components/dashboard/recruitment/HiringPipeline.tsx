import { Card, CardBody, CardHeader } from "@nextui-org/react";
import DashboardToolBar from "../dashboard-toolbar";
import { JOB, jobs } from "@/data/data";

const HiringTableHeader = () => (
  <thead className="text-xs">
    <tr>
      <th className="px-4 py-2 text-left">Design Jobs</th>
      <th className="px-4 py-2 text-center">Applying Period</th>
      <th className="px-4 py-2 text-center">Screening</th>
      <th className="px-4 py-2 text-center">Background Check</th>
      <th className="px-4 py-2 text-center">Interviews</th>
      <th className="px-4 py-2 text-center">Technical Test</th>
      <th className="px-4 py-2 text-center">Onboarding</th>
    </tr>
  </thead>
);

const HiringTableBody = ({ jobs }: { jobs: JOB[] }) => (
  <tbody>
    {jobs.map((job, index) => (
      <tr key={index} className="border-t">
        <td className="px-4 py-2">
          <p className="font-semibold text-sm">{job.title}</p>
          <p className="text-xs text-gray-500">{job.location}</p>
        </td>
        {job.stages.map((stage, idx) => (
          <td key={idx} className="py-2">
            <div className="relative h-8">
              <div
                className={`absolute w-full h-8 rounded-lg ${stage.color}`}
              ></div>
            </div>
            {stage.value !== null && (
              <p className="text-center text-sm mt-1">{stage.value}</p>
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

const HiringPipeLine = () => {
  return (
    <Card className="col-span-6 row-span-5 max-h-[500px]">
      <CardHeader className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Hiring Pipeline</h2>
        <DashboardToolBar />
      </CardHeader>
      <CardBody>
        <table className="min-w-full table-auto">
          <HiringTableHeader />
          <HiringTableBody jobs={jobs} />
        </table>
      </CardBody>
    </Card>
  );
};

export default HiringPipeLine;
