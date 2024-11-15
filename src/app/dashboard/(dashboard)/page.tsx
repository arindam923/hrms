import TabView from "@/components/dashboard/TabView";
import { getLoggedInUser } from "@/utils/appwrite/getLoggedInUser";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="p-6">
      <div className="flex w-full flex-col">
        <TabView />
      </div>
    </div>
  );
};

export default Dashboard;
