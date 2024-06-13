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
import Reports from "./Reports";
import Students from "./Students";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Classes from "./Classes";
import { RootState } from "@/redux/reducer";
import Marks from "./Marks";
import GeneralSMS from "./GeneralSMS";

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
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Students"
          component={Students}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Classes"
          component={Classes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Marks"
          component={Marks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralSMS"
          component={GeneralSMS}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootLayout;
