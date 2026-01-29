// sidebarData.js
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCog,
  FaList,
  FaPlus,
} from "react-icons/fa";

export const sidebarData = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: FaHome, // ✅ component reference
  },
  {
    key: "users",
    label: "Users",
    icon: FaUser,
    children: [
      {
        key: "user-list",
        label: "User List",
        icon: FaList,
      },
      {
        key: "add-user",
        label: "Add User",
        icon: FaPlus,
      },
    ],
  },
  {
    key: "analytics",
    label: "Analytics",
    icon: FaChartBar,
  },
  {
    key: "settings",
    label: "Settings",
    icon: FaCog,
  },
];
