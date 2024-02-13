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
        title: "Request",
        url: "/u-dashboard/post",
        icon: <BsFillPostcardHeartFill size={25} />,
      },
      {
        title: "Events",
        url: "/u-dashboard/event",
        icon: <MdEvent size={25} />,
      },
    ],
  },
  {
    title: "Resource",
    list: [
      {
        title: "Market",
        url: "/u-dashboard/jobs",
        icon: <MdOutlineAddHomeWork size={25} />,
      },
      {
        title: "Forem Store",
        url: "/u-dashboard/store",
        icon: <FaStore size={25} />,
      },
      {
        title: "Teams",
        url: "/u-dashboard/teams",
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
