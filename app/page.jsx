import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}
