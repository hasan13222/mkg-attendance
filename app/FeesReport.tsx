import Header from "@/components/Header";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { feeReportData } from './../constants/feeReportData';
import FeeReportCard from "@/components/Reports/FeeReportCard";
import { useLocalSearchParams } from "expo-router";

const FeesReport = () => {
  const { colors } = useTheme();
  const { date, date2 } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 30
      }}
    >
      <Header
        paddingTop={0}
        paddingBottom={5}
        title={"Fees Reports"}
        bgWhite
        leftIcon={"back"}
      />
      <ScrollView>
      <View style={{ justifyContent: "space-between", flexDirection: 'row', marginTop: 10 , alignItems: 'center',paddingLeft: 15}}>
          

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
                flex: 1,
                color: colors.text,
                paddingLeft: 15,
                fontWeight: "condensedBold",
              }}
            >
              Date
            </Text>
            <Text
              style={{
                ...ReportStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
                paddingLeft: 15,
              }}
            >
              Fees Count
            </Text>
            <Text
              style={{
                ...ReportStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
                textAlign: "right",
                paddingRight: 15,
              }}
            >
              Amount
            </Text>
            
          </View>
          {feeReportData.map((data, index) => {
            return <FeeReportCard data={data} index={index} />;
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

export default FeesReport;
