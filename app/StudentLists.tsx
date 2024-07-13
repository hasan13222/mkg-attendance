import Header from "@/components/Header";
import { useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { SIZES } from "@/constants/theme";
import { ReportStyles } from "./Reports";
import { studentsData } from "@/constants/studentsData";
import Student from "@/components/student";
import { studentListsData } from "./../constants/studentListData";
import StudentListCard from "@/components/StudentListCard";

const StudentLists = () => {
  const { colors } = useTheme();
  const [classVal, setClassVal] = useState("");

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: 30,
        }}
      >
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Student List"}
          bgWhite
          leftIcon={"back"}
        />
        <ScrollView>
          <View style={{ padding: 15 }}>
            <View
              style={{
                shadowColor: "rgba(0,0,0,0.6)",
                shadowOpacity: 0.8,
                shadowOffset: {
                  width: 4,
                  height: 4,
                },
                shadowRadius: 4.65,
                elevation: 8,
                padding: 15,
                paddingTop: 10,
                gap: 10,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            >
              <View>
                <Text style={{ fontSize: 15, paddingBottom: 5 }}>
                  Select Class
                </Text>
                <View
                  style={{
                    borderColor: "#a2a1a6",
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 8,
                    paddingLeft: 12,
                    position: "relative",
                  }}
                >
                  <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={{ placeholder: { color: "#424140" } }}
                    onValueChange={(value) => setClassVal(value)}
                    items={[
                      { label: "Class One", value: "1" },
                      { label: "Class Two", value: "2" },
                    ]}
                  />
                  <AntDesign
                    style={{ position: "absolute", right: 15, top: 12 }}
                    name="caretdown"
                    size={13}
                    color={"#424140"}
                  />
                </View>
              </View>
            </View>

            {/* student list title */}
            <Text
              style={{
                fontSize: 20,
                color: colors.text,
                marginTop: 15,
                paddingLeft: 3,
              }}
            >
              Class Six
            </Text>
            {/* student list */}
            <View
              style={{
                backgroundColor: colors.card,
                borderRadius: SIZES.radius,
                marginTop: 4,
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
                  Section
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
                  Image
                </Text>
              </View>
              {studentListsData.map((data, index) => {
                return <StudentListCard data={data} index={index} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default StudentLists;
