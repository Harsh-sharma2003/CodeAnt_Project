import { ReactElement, useContext } from "react";
import "../index.css";
import { menuContext } from "./menu";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";

const menuItems = [
  {
    icon: <AiOutlineHome />,
    label: "Repositories",
    path: "/app/repositories",
  },
  {
    icon: <FaCode />,
    label: "AI Code Review",
    path: "/app/code-review",
  },
  {
    icon: <CiCloudOn />,
    label: "Cloud Security",
    path: "/app/cloud-security",
  },
  {
    icon: <LuBookText />,
    label: "How to use",
    path: "/app/how-to-use",
  },
  {
    icon: <BsGear />,
    label: "Settings",
    path: "/app/settings",
  },
];

function Sidebar() {
  const { state, set } = useContext(menuContext);

  return (
    <div
      className={`pl-2 pt-5 z-[999] bg-white flex flex-col border-b-[1px] fixed md:relative
       border-gray-500 md:justify-between md:items-start overflow-hidden transition-all ease-linear duration-200 ${
        state ? "h-[32rem]" : "h-[5rem]"
      } md:h-[100vh] w-full md:w-[18%]`}
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center mr-2 w-full md:hidden">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/Group 37110.png" alt="" />
            <p>CodeAnt AI</p>
          </div>
          <button onClick={() => set(!state)} className="w-10 h-10">
            <img src={!state ? "/bars.png" : "/close.png"} alt="" />
          </button>
        </div>
        <select className="w-[90%] mt-2 md:w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="Harsh">Harsh</option>
          <option value="Hariom">Hariom</option>
          <option value="Khushboo">Khushboo</option>
        </select>
        <div className="flex flex-col md:w-max w-full gap-2 mt-8">
          {menuItems.map((item, index) => (
            <SidebarItem icon={item.icon} label={item.label} path={item.path} key={index} />
          ))}
        </div>
      </div>
      <div className="md:flex flex-col gap-8 justify-start mr-2 hidden">
        <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
          <img src="/Group 37110.png" alt="" />
          <p>CodeAnt AI</p>
        </div>
        <select className="w-[12rem] text-xl border-[1px] border-gray-300 rounded-lg p-2">
          <option value="Harsh">Harsh</option>
          <option value="Hariom">Hariom</option>
          <option value="Khushboo">Khushboo</option>
        </select>
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <SidebarItem icon={item.icon} label={item.label} path={item.path} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-8">
        <SidebarItem icon={<LuPhone />} label="Support" path="/app/report" />
        <SidebarItem icon={<MdOutlineLogout />} label="Logout" path="/auth/saas" />
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  path,
}: {
  icon: ReactElement;
  label: string;
  path: string;
}) {
  const { state, set } = useContext(menuContext);
  return (
    <NavLink
      onClick={() => set(!state)}
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        isActive
          ? `border-0 flex flex-row items-center justify-start pl-5 pr-8
        bg-[#1470ef] text-white
       gap-4 p-2 rounded-lg cursor-pointer`
          : `border-0 flex flex-row items-center justify-start pl-5 pr-8
        bg-white text-black
       gap-4 p-2 rounded-lg cursor-pointer`
      }
    >
      <div className="text-xl">{icon}</div>
      <p>{label}</p>
    </NavLink>
  );
}

export default Sidebar;