import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { COLORS, FONTS } from "@/constants/theme";
import CustomButton from "@/components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";


const GeneralSMS = (props) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [classVal, setClassVal] = useState("");
  const [subjectVal, setSubjectVal] = useState("");

  const { colors } = useTheme();

  const handleSearch = () => {
    if (!classVal) {
      alert("Please select a class");
      return;
    }
    if (!subjectVal) {
      alert("Please select a subject");
      return;
    }
    if (date.getDate() === date2.getDate()) {
      alert("Please select a date range. your start and end date is same");
      return;
    }
    router.navigate("/Reports");
  };
  const handleDatePick = (e, date) => {
    setDate(date);
    setOpen(false);
  };
  const handleDatePick2 = (e, date) => {
    setDate2(date);
    setOpen2(false);
  };

  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {/* title */}
        <Text
          style={{
            ...FONTS.h4,
            color: colors.text,
            borderBottomWidth: 1,
            paddingTop: 15,
            paddingBottom: 8,
            marginBottom: 10,
            borderColor: colors.border,
          }}
        >
          Search Attendance Report
        </Text>

        {/* main form */}
        <View style={{ gap: 15 }}>
          
          {/* select class */}
          <View>
            <Text style={{ fontSize: 18, paddingVertical: 10 }}>
              Select Class
            </Text>
            <View
              style={{
                borderColor: COLORS.darkBg,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setClassVal(value)}
                items={[
                  { label: "Class One", value: "one" },
                  { label: "Class Two", value: "two" },
                ]}
              />
            </View>
          </View>

          {/* select subject */}
          <View>
            <Text style={{ fontSize: 18, paddingVertical: 10 }}>
              Select Subject
            </Text>

            <View
              style={{
                borderColor: COLORS.darkBg,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setSubjectVal(value)}
                items={[
                  { label: "Class One", value: "one" },
                  { label: "Class Two", value: "two" },
                ]}
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <CustomButton onPress={handleSearch} title={"Search"} />
          </View>
        </View>
      </View>
    </>
  );
};

export default GeneralSMS;
