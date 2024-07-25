import Header from "@/components/Header";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { studentsReports } from "@/constants/studentReports";
import Report from "@/components/report";
import { useLocalSearchParams } from "expo-router";

const AttendanceReport = () => {
  const { colors } = useTheme();

  const { classVal, sectionVal, date, date2 } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 30,
      }}
    >
      <Header
        paddingTop={0}
        paddingBottom={5}
        title={"Attendance Reports"}
        bgWhite
        leftIcon={"back"}
      />
      <ScrollView>
        <View style={{ justifyContent: "space-between", flexDirection: 'row', marginTop: 10 , alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              color: colors.text,
              marginTop: 0,
              paddingLeft: 15,
              textTransform: 'capitalize'
            }}
          >
            Class {classVal}, Section {sectionVal}
          </Text>

          <Text style={{fontSize: 12, borderColor: COLORS.borderColor, padding: 3, borderRadius: 5, borderWidth: 1}}>
            {date} - {date2}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.radius,
            margin: 15,
            marginTop: 5,
            shadowColor: "rgba(0,0,0,.6)",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                ...ReportStyles.theadItem,
                flex: 0.6,
                color: colors.text,
                paddingLeft: 15,
                fontWeight: "condensedBold",
              }}
            >
              Roll
            </Text>
            <Text
              style={{
                ...ReportStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
                paddingLeft: 15,
              }}
            >
              Name
            </Text>
            <Text
              style={{
                ...ReportStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
              }}
            >
              Present
            </Text>
            <Text
              style={{
                ...ReportStyles.theadItem,
                flex: 0.5,
                color: colors.text,
                paddingRight: 15,
                fontWeight: "condensedBold",
              }}
            >
              Absent
            </Text>
          </View>
          {studentsReports.map((data, index) => {
            return <Report data={data} index={index} />;
          })}
        </View>
      </ScrollView>
    </View>
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

export default AttendanceReport;
