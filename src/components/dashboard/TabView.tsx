"use client";

import { Tab, Tabs } from "@nextui-org/react";
import RecruitmentTab from "./RecruitmentTab";

const TabView = () => {
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b",
        cursor: "w-full bg-[#0f0f0f]",
        tab: "max-w-fit px-0 h-8",
        tabContent: "group-data-[selected=true]:text-[#0f0f0f]",
      }}
    >
      <Tab key="recruitment" title={<h2>Recrutiment Dashboard</h2>}>
        <RecruitmentTab />
      </Tab>
      <Tab key="HRMS" title={<h2>HR Manager Dashborad</h2>} />
    </Tabs>
  );
};

export default TabView;
