import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomNavigation from "@/components/CustomNavigation";
import Home from ".";
import Search from "./Search";
import ReportSearch from "./ReportSearch";
import Profile from "./Profile";

const TabLayout = () => {
  const colors = useTheme();

  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.colors.card }}>
      <Tab.Navigator
        tabBar={(props) => <CustomNavigation {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="index"
      >
        <Tab.Screen options={{ title: "Home" }} name="index" component={Home} />
        <Tab.Screen
          options={{ title: "Search" }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{ title: "Reports" }}
          name="ReportSearch"
          component={ReportSearch}
        />
        <Tab.Screen
          options={{ title: "Profile" }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabLayout;
