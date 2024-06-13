import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabLayout from "@/app/(tabs)/_layout";
import DrawerMenu from "@/components/DrawerMenu";
import { SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const DrawerNavigation = (props) => {
    
    const {colors} = useTheme();
  return (
    <SafeAreaView
    style={{
        flex:1,
        backgroundColor:colors.card,
    }}
    >
      <Drawer.Navigator
        drawerContent={() => <DrawerMenu drawerProps={props}/>}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="FooterLayout" component={TabLayout} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigation;
