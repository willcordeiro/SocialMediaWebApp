import { MdHome } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdFormatPaint } from "react-icons/md";
import { MdSettings } from "react-icons/md";
export const SidebarItems = [
  {
    icon: <MdHome />,
    text: "Home",
    activeItem: "active",
    notificationsCount: "",
  },
  {
    icon: <MdTravelExplore />,
    text: "Explore",
    activeItem: "",
    notificationsCount: "",
  },
  {
    icon: <MdOutlineCircleNotifications />,
    text: "Notifications",
    NavigationID: "notifications",
    activeItem: "",
    notificationBar: true,
    notificationsCount: "9+",
  },
  {
    icon: <MdOutlineMessage />,
    text: "Messages",
    NavigationID: "messages-notifications",
    activeItem: "",
    notificationsCount: "9+",
  },
  {
    icon: <MdBookmarks />,
    text: "Bookmarks",
    activeItem: "",
    notificationsCount: "",
  },
  {
    icon: <MdOutlineAnalytics />,
    text: "Analytics",
    activeItem: "",
    notificationsCount: "",
  },
  {
    icon: <MdFormatPaint />,
    text: "Theme",
    activeItem: "",
    notificationsCount: "",
  },
  {
    icon: <MdSettings />,
    text: "Settings",
    activeItem: "",
    notificationsCount: "",
  },
];

export const Notification = [
  {
    userProfilePic:
      "https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300",
    userNotificationName: "keke bejamin",
    notificationTime: "5 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300",
    userNotificationName: "keke bejamin",
    notificationTime: "5 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300",
    userNotificationName: "keke bejamin",
    notificationTime: "5 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300",
    userNotificationName: "keke bejamin",
    notificationTime: "5 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://cdn.dribbble.com/users/454765/screenshots/5825882/penguin_32x32px_400x300_new_still.gif?compress=1&resize=400x300",
    userNotificationName: "keke bejamin",
    notificationTime: "5 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
];
