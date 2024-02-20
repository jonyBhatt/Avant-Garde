import {
  MdOutlineAddHomeWork,
  MdOutlinePostAdd,
  MdSpaceDashboard,
  MdEvent,
} from "react-icons/md";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdPostAdd } from "react-icons/md";
export const userSideBar = [
  {
    title: "Featured",
    list: [
      {
        title: "Dashboard",
        url: "/user-dashboard",
        icon: <MdSpaceDashboard size={25} />,
      },
      {
        title: "My Posts",
        url: "/user-dashboard/post",
        icon: <BsFillPostcardHeartFill size={25} />,
      },
      {
        title: "Request Help",
        url: "/user-dashboard/request",
        icon: <MdPostAdd size={25} />,
      },
      {
        title: "Events",
        url: "/user-dashboard/event",
        icon: <MdEvent size={25} />,
      },
    ],
  },
  {
    title: "Resource",
    list: [
      {
        title: "Market",
        url: "/user-dashboard/jobs",
        icon: <MdOutlineAddHomeWork size={25} />,
      },
      {
        title: "Forem Store",
        url: "/user-dashboard/store",
        icon: <FaStore size={25} />,
      },
      {
        title: "Teams",
        url: "/user-dashboard/teams",
        icon: <RiTeamFill size={25} />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <LuSettings2 size={25} />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <IoMdHelpCircleOutline size={25} />,
      },
    ],
  },
];
