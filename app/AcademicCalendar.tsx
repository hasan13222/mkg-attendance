import Header from "@/components/Header";
import ListStyle3 from "@/components/ListStyle3";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const AcademicCalendar = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const { colors } = useTheme();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = new Date().getFullYear();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
        }}
      >
        <View style={{ marginTop: 30 }}>
          <Header
            paddingTop={0}
            paddingBottom={5}
            title={"Academic Calendar"}
            bgWhite
            leftIcon={"back"}
          />
          <ScrollView style={{ padding: 15 }}>
            <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
              {months.map((month, i) => (
                <TouchableOpacity
                  onPress={() => setActiveMonth(i)}
                  style={{
                    backgroundColor: `${
                      activeMonth !== i ? "#af12a2" : "#ff1874"
                    }`,
                    padding: 15,
                    borderRadius: 8,
                  }}
                  key={i}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {month}
                  </Text>
                  <Text style={{ color: "white", fontSize: 16 }}>{year}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            
          </ScrollView>
          <View style={{ marginTop: 20 }}>
              {/* event list title */}
              <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                <MaterialIcon
                  name="event-note"
                  size={18}
                  style={{ opacity: 0.5 }}
                />
                <Text style={{ fontSize: 17, color: colors.text }}>
                  Date-Wise Event List of {months[activeMonth]}, {year}
                </Text>
              </View>

              {/* event list */}
              <View
                style={{
                  gap: 12,
                  shadowColor: "rgba(0,0,0,0.6)",
                  shadowOpacity: 0.8,
                  shadowOffset: {
                    width: 4,
                    height: 4,
                  },
                  shadowRadius: 4.65,
                  elevation: 8,
                  margin: 15,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "white",
                }}
              >
                <ListStyle3 date={14} text="International Mother Day" type="Holiday"/>
                <ListStyle3 date={18} text="School Annual Sports Day. All stdents enjoy this day." type="Sports Day"/>
                <ListStyle3 date={22} text="International Mother Day" type="Holiday"/>
              </View>
            </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AcademicCalendar;
