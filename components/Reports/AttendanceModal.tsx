import { RootState } from "@/redux/reducer";
import { setAttendanceModalVisible } from "@/redux/reducer/reportSlice";

import FeatherIcon from "react-native-vector-icons/Feather";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import moment from "moment";
import { useState } from "react";
import { COLORS } from "@/constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import RNPickerSelect from "react-native-picker-select";

const AttendanceModal = () => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [classVal, setClassVal] = useState("");
  const [sectionVal, setSectionVal] = useState("");

  const { attendanceModalVisible } = useSelector(
    (state: RootState) => state.reportSlice
  );
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!classVal) {
      alert("Please select a class");
      return;
    }
    if (!sectionVal) {
      alert("Please select a subject");
      return;
    }
    if (date.getDate() === date2.getDate()) {
      alert("Please select a date range. your start and end date is same");
      return;
    }
    router.navigate("/AttendanceReport");
    router.setParams({classVal, sectionVal, date: moment(date).format('DD-MM-YY'), date2: moment(date2).format('DD-MM-YY')});
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={attendanceModalVisible}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "relative",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => dispatch(setAttendanceModalVisible())}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
        </View>
        {/* fees search form */}
        <View
          style={{
            gap: 15,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            paddingTop: 0,
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: 5,
            elevation: 7,
            shadowOpacity: 3,
            shadowRadius: 5,
          }}
        >
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
                  title={moment(date).format("DD MMM YYYY")}
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
                  title={moment(date2).format("DD MMM YYYY")}
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
              Select Section
            </Text>

            <View
              style={{
                borderColor: COLORS.darkBg,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setSectionVal(value)}
                items={[
                  { label: "section One", value: "one" },
                  { label: "section Two", value: "two" },
                ]}
              />
            </View>
          </View>

          <View style={{ marginTop: 5 }}>
            <CustomButton onPress={handleSearch} title={"Search"} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AttendanceModal;
