import { useNavigation, useTheme } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FONTS, SIZES } from "@/constants/theme";
import { studentsData } from "@/constants/studentsData";
import Header from "@/components/Header";
import Student from "@/components/student";
import { useEffect, useState } from "react";
// import BreadCrumb from "@/components/BreadCrumb";
import { useLocalSearchParams } from "expo-router";

export type THistory = {
  route: string;
  routeName: string;
}

const Students = () => {
  const { colors } = useTheme();
  const {classVal} = useLocalSearchParams();
  
  const [history, setHistory] = useState<THistory[]>([]);

  useEffect(() => {
    const routeHistory = [
      {
        route: "(tabs)",
        routeName: "Home",
      },
      {
        route: "Classes",
        routeName: "Classes",
      },
      {
        route: "Students",
        routeName: "Students",
      }
    ]
    setHistory(routeHistory);
  }, []);
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
        title={`Class ${classVal} Attendance`}
        bgWhite
        leftIcon={"back"}
      />
      <ScrollView>
        {/* <View style={{ paddingLeft: 15 }}>
          <BreadCrumb items={history} />
        </View> */}

        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.radius,
            margin: 15,
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
                ...StudentStyles.theadItem,
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
                ...StudentStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
              }}
            >
              Name
            </Text>
            <Text
              style={{
                ...StudentStyles.theadItem,
                color: colors.text,
                fontWeight: "condensedBold",
              }}
            >
              Actions
            </Text>
            <Text
              style={{
                ...StudentStyles.theadItem,
                flex: 0.6,
                color: colors.text,
                textAlign: "right",
                paddingRight: 15,
                fontWeight: "condensedBold",
              }}
            >
              Last 3d
            </Text>
          </View>
          {studentsData.map((data, index) => {
            return <Student data={data} index={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export const StudentStyles = StyleSheet.create({
  theadItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 5,
    paddingVertical: 12,
    ...FONTS.font,
  },
  tbodyItem: {
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 0,
    paddingVertical: 5,
    ...FONTS.font,
  },
});

export default Students;
