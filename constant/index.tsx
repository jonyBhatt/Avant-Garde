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
import {
  Baby,
  BarChart2,
  BookOpen,
  Cog,
  CupSoda,
  HelpCircle,
  LayoutDashboard,
  MessageSquareDashed,
  Store,
  User,
  Users,
} from "lucide-react";
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

export const mentorSideBar = [
  {
    title: "Featured",
    list: [
      {
        title: "Dashboard",
        url: "/mentor-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Event",
        url: "/mentor-dashboard/event",
        icon: <CupSoda />,
      },
      {
        title: "Post",
        url: "/mentor-dashboard/post",
        icon: <MdOutlinePostAdd size={25} />,
      },
    ],
  },
  {
    title: "Resource",
    list: [
      {
        title: "Jobs",
        url: "/mentor-dashboard/jobs",
        icon: <MdOutlineAddHomeWork size={25} />,
      },
      {
        title: "Forem Store",
        url: "/mentor-dashboard/forem-store",
        icon: <Store />,
      },
      {
        title: "Teams",
        url: "/mentor-dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        icon: <Cog />,
        subitem: [
          {
            title: "Profile",
            url: "/mentor-dashboard/profile",
            icon: <Baby />,
          },
        ],
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];

export const adminSideBar = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        url: "/admin-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        url: "/admin-dashboard/users",
        icon: <User />,
      },
      {
        title: "Post",
        url: "/admin-dashboard/posts",
        icon: <MessageSquareDashed />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        url: "/dashboard/revenue",
        icon: <BarChart2 />,
      },
      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: <BookOpen />,
      },
      {
        title: "Teams",
        url: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Cog />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];
