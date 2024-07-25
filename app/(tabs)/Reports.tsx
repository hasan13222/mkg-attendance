import Header from "@/components/Header";
import AccByDateModal from "@/components/Reports/AccByDateModal";
import AccByMonthModal from "@/components/Reports/AccByMonthModal";
import AttendanceModal from "@/components/Reports/AttendanceModal";
import DueModal from "@/components/Reports/DueModal";
import FeesModal from "@/components/Reports/FeesModal";
import ReportCards from "@/components/Reports/ReportCards";
import ReportMenu from "@/components/Reports/ReportMenu";
import { FONTS, SIZES } from "@/constants/theme";
import { RootState } from "@/redux/reducer";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const Reports = () => {
  const { colors } = useTheme();
  const { feesModalVisible } = useSelector(
    (state: RootState) => state.reportSlice
  );

  return (
    <GestureHandlerRootView>
    <SafeAreaView
      
    >
      <Header
        paddingTop={0}
        paddingBottom={5}
        title={"Reports"}
        bgWhite
        leftIcon={"back"}
      />
      {/* <Header title="School" messageIcon={true}/> */}

      <ScrollView style={{ paddingHorizontal: 10 }}>
        {/* student, attendance cards  */}
        <ReportCards />

        {/* modal */}
        <FeesModal/>
        <AttendanceModal/>
        <DueModal/>
        <AccByDateModal/>
        <AccByMonthModal/>
        

        {/* main menu */}
        <ReportMenu />
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export const ReportStyles = StyleSheet.create({
  theadItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: 12,
    ...FONTS.font,
  },
  tbodyItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: 12,
    ...FONTS.font,
  },
});

export default Reports;
