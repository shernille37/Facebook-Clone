import {
  BookmarkIcon,
  ClockIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex-[0.22] px-6 py-3">
      <SidebarRow Icon={UserCircleIcon} title={"Shernille Licud"} />
      <SidebarRow Icon={UserGroupIcon} title={"Friends"} />
      <SidebarRow Icon={ClockIcon} title={"Memories"} />
      <SidebarRow Icon={BookmarkIcon} title={"Saved"} />
      <SidebarRow Icon={VideoCameraIcon} title={"Video"} />
      <SidebarRow Icon={ShoppingCartIcon} title={"Marketplace"} />
    </div>
  );
};

export default Sidebar;
