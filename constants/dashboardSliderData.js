import { IMAGES } from "./theme";

export const dashboardSliderData = [
    {
        id : "1",
        title : "Attendance",
        iconName: "calendar-check-o",
        path : "/Students"
    },
    {
        id : "2",
        title : "Reports",
        iconName: "file-text-o",
        path: "/Reports"
    },
    {
        id : "3",
        title : "Fees",
        iconName: "money",
        path : "/Fees"
    },
    {
        id : "4",
        title : "Marks",
        iconName: "file-powerpoint-o",
        path : "/Marks"
    },
    {
        id : "5",
        title : "Homework",
        iconName: "file-text-o",
        submenu: [
            {
                subtitle: "Six",
                title: "Bangla",
                path: '/HomeWork'
            },
            {
                subtitle: "Six",
                title: "English",
                path: '/HomeWork'
            }
        ]
    },
    {
        id : "6",
        title : "SMS",
        iconName: "envelope-o",
        submenu: [
            {
                subtitle: "Six",
                title: "General SMS",
                path: '/GeneralSMS'
            },
            {
                subtitle: "Six",
                title: "Notification SMS",
                path: '/NotificationSMS'
            },
            {
                subtitle: "Six",
                title: "SMS Template",
                path: '/SMSTemplate'
            }
        ]
    },
    {
        id : "7",
        title : "Leave Application",
        iconName: "file-powerpoint-o",
        path: "/Leave"
    },
    {
        id : "8",
        title : "Change Password",
        iconName: "file-powerpoint-o",
        path: "/ChangePassword"
    },
]