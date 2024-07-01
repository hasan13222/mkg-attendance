import Header from "@/components/Header";
import HomeWorkCard from "@/components/HomeWorkCard";
import { COLORS } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import moment from "moment";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeWork = () => {
  const { colors } = useTheme();
  const [activeWeekDay, setActiveWeekDay] = useState("Today");
  const [activeDate, setActiveDate] = useState(moment().format("DD MMM YYYY"));
  const homeWorkDays = [...Array.from(Array(32).keys())];
  const today = new Date();

  const handleActiveDate = (date, weekday) => {
    setActiveDate(date);
    setActiveWeekDay(weekday);
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#faf0f0",
        }}
      >
        <View style={{marginTop: 30}}>
          <Header
            paddingTop={0}
            paddingBottom={5}
            title={"Home Work"}
            bgWhite
            leftIcon={"back"}
          />
          <ScrollView stickyHeaderIndices={[0]} style={{ padding: 15 }}>
            <View style={{ backgroundColor: "#faf0f0" }}>
              <Text style={{ fontSize: 18 }}>{activeDate}</Text>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                {activeWeekDay}
              </Text>

              <ScrollView horizontal>
                <View style={{ flexDirection: "row", gap: 1, marginTop: 15 }}>
                  {homeWorkDays?.map((day) => {
                    const fulldate = new Date().setDate(
                      today.getDate() + day - 2
                    );
                    const formattedDate =
                      moment(fulldate).format("DD MMM YYYY");
                    const weekday = moment(fulldate).format("ddd");
                    const weekDayinFullForm = moment(fulldate).calendar(null, {
                      sameDay: "[Today]",
                      nextDay: "[Tomorrow]",
                      nextWeek: "dddd",
                      lastDay: "[Yesterday]",
                      lastWeek: "[Last] dddd",
                      sameElse: `dddd[,] Do MMMM`,
                    });
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          handleActiveDate(formattedDate, weekDayinFullForm)
                        }
                      >
                        <View
                          style={{
                            gap: 7,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 5,
                            alignItems: "center",
                            backgroundColor: `${
                              activeDate == formattedDate
                                ? "#AF1254"
                                : "transparent"
                            }`,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: "600",
                              color: `${
                                activeDate == formattedDate
                                  ? "white"
                                  : COLORS.darkBg
                              }`,
                            }}
                          >
                            {formattedDate.substring(3, 6)}
                          </Text>
                          <Text
                            style={{
                              fontSize: 22,
                              fontWeight: "700",
                              color: `${
                                activeDate == formattedDate
                                  ? "white"
                                  : COLORS.darkBg
                              }`,
                            }}
                          >
                            {formattedDate.substring(0, 2)}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: "600",
                              color: `${
                                activeDate == formattedDate
                                  ? "white"
                                  : COLORS.darkBg
                              }`,
                            }}
                          >
                            {weekday}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            <View style={{ gap: 15, marginTop: 25 }}>
              <HomeWorkCard />
              <HomeWorkCard />
              <HomeWorkCard />
              <HomeWorkCard />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeWork;
