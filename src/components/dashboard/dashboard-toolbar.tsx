import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const DashboardToolBar = () => {
  return (
    <div className="flex items-center ">
      <Button isIconOnly variant="light">
        <Icon icon={"mdi-light:pencil"} />
      </Button>
      <Button isIconOnly variant="light">
        <Icon icon={"ph:dots-three"} />
      </Button>
      <Button isIconOnly variant="light">
        <Icon icon={"solar:arrow-right-outline"} />
      </Button>
    </div>
  );
};

export default DashboardToolBar;
