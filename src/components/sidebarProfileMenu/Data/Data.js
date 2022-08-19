import { MdHome } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdFormatPaint } from "react-icons/md";
import { MdSettings } from "react-icons/md";

export const UserInfo = [
  {
    CurrentUserName: "User",
    UserEmail: "User@gmail.com",
    UserProfilePhoto:
      "https://i.pinimg.com/originals/cd/5e/e3/cd5ee3e0bddaba65e73afd77bbcfbb6c.png",
  },
];

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
    notificationBar: true,
    notificationsCount: "4+",
  },
  {
    icon: <MdOutlineMessage />,
    text: "Messages",
    NavigationID: "messages-notifications",

    notificationsCount: "2+",
  },
  {
    icon: <MdBookmarks />,
    text: "Bookmarks",

    notificationsCount: "",
  },
  {
    icon: <MdOutlineAnalytics />,
    text: "Analytics",

    notificationsCount: "",
  },
  {
    icon: <MdFormatPaint />,
    text: "Theme",
    notificationsTheme: true,
    notificationsCount: "",
  },
  {
    icon: <MdSettings />,
    text: "Settings",

    notificationsCount: "",
  },
];

export const Notification = [
  {
    userProfilePic:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/i623dgg2e6a59seloh5raudvkm._SX450_.jpg",
    userNotificationName: "jessica",
    notificationTime: "2 Days Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://i.pinimg.com/originals/a2/5a/89/a25a89c12e0fd087eae85fb348ca553c.jpg",
    userNotificationName: "Maria Clark",
    notificationTime: "1 Days Ago",
    notificationInfo: "Liked your photo",
  },
  {
    userProfilePic:
      "https://media.istockphoto.com/photos/studio-portrait-of-attractive-19-year-old-woman-with-brown-hair-picture-id1344327532?b=1&k=20&m=1344327532&s=170667a&w=0&h=aqh_117UeU73q6fdesYZlI1X6p1dULM33gKo3RBP-xs=",
    userNotificationName: "Edem Quist",
    notificationTime: "5 Hours Ago",
    notificationInfo: "accepted yout frind request",
  },
  {
    userProfilePic:
      "https://i.pinimg.com/736x/4b/42/98/4b42981079f53d4490d4e85e81427f79.jpg",
    userNotificationName: "Michael fernandes",
    notificationTime: "5 Days Ago",
    notificationInfo: "Share a video with you",
  },
];
