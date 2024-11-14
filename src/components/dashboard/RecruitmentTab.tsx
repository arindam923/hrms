import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import ApplicantChart from "@/components/charts/applicants-chart";
import HiringPipeLine from "./recruitment/HiringPipeline";
import UpcomingInterviews from "./recruitment/UpcomingInterviews";
import CandidateScore from "./recruitment/CandidateScore";

const RecruitmentTab = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Recruitment Dashboard</h2>
          <p className="text-sm text-gray-500">
            Good morning, here&apos;s whats going on today
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500">Last edited , 20 Nov,2024</p>
          <Button
            startContent={<Icon icon="material-symbols-light:dashboard" />}
            className="bg-white text-black px-5"
            radius="sm"
            variant="bordered"
          >
            Edit Widget
          </Button>
        </div>
      </div>

      <div className="mt-5 grid gap-5  grid-cols-10 grid-rows-8">
        <HiringPipeLine />
        <UpcomingInterviews />
        <CandidateScore />
        <Card className="row-span-3 col-span-2">
          <CardHeader>
            <Icon icon="icon-park-solid:people" />
            <h2 className="text-medium font-semibold ml-2">
              Total Application
            </h2>
          </CardHeader>
          <CardBody>
            <div className="flex pb-8">
              <h3 className="text-2xl font-bold">551</h3>
              <div className="ml-4">
                <div className="flex items-center text-sm space-x-2">
                  <Icon
                    className="text-green-500"
                    icon="fa6-solid:arrow-trend-up"
                  />
                  <p className="text-green-500">+76 </p>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">
                  vs last week
                </p>
              </div>
            </div>
            <ApplicantChart />
          </CardBody>
        </Card>
        <Card className="row-span-3 col-span-2 ">
          <CardHeader>
            <Icon icon="icon-park-solid:people" />
            <h2 className="text-medium font-semibold ml-2">Interviewed</h2>
          </CardHeader>
          <CardBody>
            <div className="flex pb-8">
              <h3 className="text-2xl font-bold">54</h3>
              <div className="ml-4">
                <div className="flex items-center text-sm space-x-2">
                  <Icon
                    className="text-red-500"
                    icon="fa6-solid:arrow-trend-down"
                  />
                  <p className="text-red-500">-5 </p>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">
                  vs last week
                </p>
              </div>
            </div>
            <ApplicantChart />
          </CardBody>
        </Card>
        <Card className="row-span-3 col-span-2 ">
          <CardHeader>
            <Icon icon="icon-park-solid:people" />
            <h2 className="text-medium font-semibold ml-2">Job Opening</h2>
          </CardHeader>
          <CardBody>
            <div className="flex pb-8">
              <h3 className="text-2xl font-bold">8</h3>
              <div className="ml-4">
                <div className="flex items-center text-sm space-x-2">
                  <Icon
                    className="text-green-500"
                    icon="fa6-solid:arrow-trend-up"
                  />
                  <p className="text-green-500">+2 </p>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">
                  vs last week
                </p>
              </div>
            </div>
            <ApplicantChart />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RecruitmentTab;
