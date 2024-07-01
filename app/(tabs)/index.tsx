import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import HeaderMenu from "@/components/HeaderMenu";
import { COLORS, FONTS } from "@/constants/theme";
import ProfileDetails from "@/components/Home/ProfileDetails";
import DashboardCards from "@/components/Home/DashboardCards";
import LatestStudents from "@/components/Home/LatestStudents";
import MainMenu from "@/components/Home/MainMenu";
import Header from "@/components/Header";

const Home = (drawerProps) => {
  const drawerRef = useRef();

  return (
    <>
      <GestureHandlerRootView>
        <SafeAreaView
          style={{
            backgroundColor: "rgba(248,92,111,.05)",
          }}
        >
          <HeaderMenu title="School" />
          {/* <Header title="School" messageIcon={true}/> */}
        </SafeAreaView>

        <ScrollView style={{ paddingHorizontal: 10 }}>
          {/* profile details */}
          <ProfileDetails />

          {/* student, attendance cards  */}
          <DashboardCards />

          {/* latest admitted students */}
          <LatestStudents />

          {/* main menu */}
          <MainMenu />
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

export const HomeStyles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#af12a2",
    borderRadius: 11,
    color: COLORS.white,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 4,
      paddingHorizontal: 5,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 5,
      paddingVertical: 4,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default Home;
