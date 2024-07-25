import { useState } from "react";
import Login from "../components/login";
import Routes from "@/Navigations/Routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./../redux/store/index";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import Reports from "./(tabs)/Reports";
import Students from "./Students";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Classes from "./(tabs)/Classes";
import { RootState } from "@/redux/reducer";
import Marks from "./Marks";
import GeneralSMS from "./GeneralSMS";
import NotificationSMS from "./NotificationSMS";
import SMSTemplate from "./SMSTemplate";
import HomeWork from "./HomeWork";
import Leave from "./Leave";
import ChangePassword from "./ChangePassword";
import TabLayout from "./(tabs)/_layout";
import AcademicCalendar from "./AcademicCalendar";
import Notice from "./Notice";
import AddStudent from "./AddStudent";
import Payment from "./Payment";
import Result from "./Result";
import ClassRoutine from "./Routine";
import PaymentStatus from "./PaymentStatus";
import StudentLists from "./StudentLists";
import AttendanceReport from "./AttendanceReport";
import FeesReport from "./FeesReport";
import DueReport from "./DueReport";
import AccReportByMonth from "./AccReportByMonth";
import AccReportByDate from "./AccReportByDate";

const RootLayout = () => {
  // const [user, setUser] = useState(true);
  // const dispatch = useDispatch();
  // const { user } = useSelector((state: RootState) => state.userLogin);

  const Stack = createStackNavigator();

  const theme = useTheme();
  return (
    <Provider store={store}>
      <Stack.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          component={TabLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Students"
          component={Students}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Marks"
          component={Marks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SMSTemplate"
          component={SMSTemplate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralSMS"
          component={GeneralSMS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationSMS"
          component={NotificationSMS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeWork"
          component={HomeWork}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Leave"
          component={Leave}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AcademicCalendar"
          component={AcademicCalendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Routine"
          component={ClassRoutine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentStatus"
          component={PaymentStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentLists"
          component={StudentLists}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AttendanceReport"
          component={AttendanceReport}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FeesReport"
          component={FeesReport}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DueReport"
          component={DueReport}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccReportByMonth"
          component={AccReportByMonth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccReportByDate"
          component={AccReportByDate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
