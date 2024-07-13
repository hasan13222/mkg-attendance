import { IMAGES } from "./theme";

export const dashboardSliderData = [
  {
    id: "1",
    title: "Attendance",
    iconName: "calendar-check-o",
    path: "/Students",
  },
  {
    id: "2",
    title: "Reports",
    iconName: "file-text-o",
    path: "/Reports",
  },
  {
    id: "3",
    title: "Fees",
    iconName: "money",
    path: "/Fees",
  },
  {
    id: "4",
    title: "Marks",
    iconName: "folder-open-o",
    path: "/Marks",
  },
  {
    id: "5",
    title: "Homework",
    iconName: "list-alt",
    submenu: [
      {
        subtitle: "Six",
        title: "Bangla",
        path: "/HomeWork",
      },
      {
        subtitle: "Six",
        title: "English",
        path: "/HomeWork",
      },
    ],
  },
  {
    id: "6",
    title: "SMS",
    iconName: "envelope-o",
    submenu: [
      {
        subtitle: "Six",
        title: "General SMS",
        path: "/GeneralSMS",
      },
      {
        subtitle: "Six",
        title: "Notification SMS",
        path: "/NotificationSMS",
      },
      {
        subtitle: "Six",
        title: "SMS Template",
        path: "/SMSTemplate",
      },
    ],
  },
  {
    id: "7",
    title: "Leave Application",
    iconName: "calendar-minus-o",
    path: "/Leave",
  },
  {
    id: "8",
    title: "Change Password",
    iconName: "key",
    path: "/ChangePassword",
  },
  {
    id: "9",
    title: "Academic Calendar",
    iconName: "calendar",
    path: "/AcademicCalendar",
  },
  {
    id: "10",
    title: "Notice",
    iconName: "bullhorn",
    path: "/Notice",
  },
  {
    id: "11",
    title: "Add Student",
    iconName: "plus-square",
    path: "/AddStudent",
  },
  {
    id: "12",
    title: "Payment",
    iconName: "credit-card",
    path: "/Payment",
  },
  {
    id: "12",
    title: "Result",
    iconName: "graduation-cap",
    path: "/Result",
  },
  {
    id: "13",
    title: "Class Routine",
    iconName: "newspaper-o",
    path: "/Routine",
  },
  {
    id: "13",
    title: "Payment Status",
    iconName: "ticket",
    path: "/PaymentStatus",
  },
  {
    id: "14",
    title: "Student Lists",
    iconName: "list-alt",
    path: "/StudentLists",
  },
];
