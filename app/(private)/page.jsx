import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";

const Home = async () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
};

export default Home;
