import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { upComingInterViews } from "@/data/data";
import DashboardToolBar from "../dashboard-toolbar";

const UpcomingInterviews = () => {
  return (
    <Card className="col-span-4 row-span-4">
      <CardHeader className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Upcoming Interviews</h2>
        <DashboardToolBar />
      </CardHeader>
      <CardBody>
        {upComingInterViews.map((i) => (
          <div className="flex items-start space-x-4" key={i.id}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                <Icon icon="mdi:calendar" className="text-gray-500 text-xl" />
                <span className="text-xs font-semibold">{i.date}</span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-medium font-semibold">{i.name}</h3>
              <p className="text-sm text-gray-600">
                {i.time_slot} • with{" "}
                <span className="font-medium">{i.candidate}</span>
              </p>
              <p className="font-semibold text-sm text-blue-600">
                {i.time_left}
              </p>
              <Divider className="my-2" />
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default UpcomingInterviews;
