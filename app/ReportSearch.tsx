import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { COLORS, FONTS } from "@/constants/theme";
import CustomButton from "@/components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import Header from "@/components/Header";

const ReportSearch = (props) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [classVal, setClassVal] = useState("");
  const [subjectVal, setSubjectVal] = useState("");

  // const dispatch = useDispatch();
  // const {date, date2, classVal, subjectVal, open, open2 } = useSelector((state: RootState) => state.reportSearch)

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
    <Header
          paddingTop={5}
          paddingBottom={5}
          title={"Search Attendance Report"}
          bgWhite
          leftIcon={"back"}
        />
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 15
        }}
      >
        
        {/* title */}
        {/* <Text
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
        </Text> */}

        {/* main form */}
        <View style={{ gap: 15, backgroundColor: 'white', borderRadius: 10, padding: 15, paddingTop: 0, shadowColor: "rgba(0,0,0,0.5)", shadowOffset: 5, elevation: 7, shadowOpacity: 3, shadowRadius: 5 }}>
          {/* date range */}
          <View>
            <Text style={{ fontSize: 18, paddingVertical: 10 }}>
              Select Date Range
            </Text>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View>
                <Text>Start Date</Text>
                <CustomButton
                  radius={5}
                  title={date.toDateString()}
                  color={COLORS.darkBg}
                  onPress={() => setOpen(true)}
                />
                {open && (
                  <DateTimePicker
                    testID="dateTimePicker3"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    onChange={handleDatePick}
                  />
                )}
              </View>
              <View>
                <Text>End Date</Text>
                <CustomButton
                  radius={5}
                  title={date2.toDateString()}
                  color={COLORS.darkBg}
                  onPress={() => setOpen2(true)}
                />
                {open2 && (
                  <DateTimePicker
                    testID="dateTimePicker4"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    onChange={handleDatePick2}
                  />
                )}
              </View>
            </View>
          </View>
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
              {/* <Picker
                selectedValue={classVal}
                onValueChange={(itemValue, itemIndex) =>
                  setClassVal(itemValue)
                }
              >
                <Picker.Item label="Call One" value="java" />
                <Picker.Item label="Class Two" value="js" />
              </Picker> */}
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

export default ReportSearch;
