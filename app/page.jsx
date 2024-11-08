import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { getCurrentUser } from "@/utils/getCurrentUser";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <div className="flex h-screen">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
