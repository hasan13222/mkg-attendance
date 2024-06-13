import DrawerNavigation from "@/app/DrawerNavigation";
import Reports from "@/app/Reports";
import Students from "@/app/Students";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"FooterLayout"}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
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
    </Stack.Navigator>
  );
};

export default Routes;
