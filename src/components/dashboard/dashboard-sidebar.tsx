import {
  Avatar,
  Button,
  ScrollShadow,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Sidebar from "@/components/common/Sidebar";
import { sectionItems } from "@/components/dashboard/sidebar-items";
const DashboardSidebar = () => {
  return (
    <div className="fixed left-0 z-50  flex h-full w-16 flex-col items-center border-r-small border-divider px-2 py-8">
      <ScrollShadow className="-mr-2 h-full max-h-full py-6 pr-2">
        <div className="flex flex-col items-center gap-4">
          <Avatar
            isBordered
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </div>
        <Spacer y={2} />
        <Sidebar isCompact defaultSelectedKey="home" items={sectionItems} />
        <Spacer y={8} />
        <div className="mt-auto flex flex-col items-center">
          <Tooltip content="Help & Feedback" placement="right">
            <Button
              isIconOnly
              className="data-[hover=true]:text-foreground"
              variant="light"
            >
              <Icon
                className="text-default-500 "
                icon="solar:info-circle-line-duotone"
                width={24}
              />
            </Button>
          </Tooltip>
          <Tooltip content="Log Out" placement="right">
            <Button
              isIconOnly
              className="data-[hover=true]:text-foreground"
              variant="light"
            >
              <Icon
                className="rotate-180 text-default-500"
                icon="ic:baseline-logout"
                width={24}
              />
            </Button>
          </Tooltip>
        </div>
      </ScrollShadow>
    </div>
  );
};

export default DashboardSidebar;
