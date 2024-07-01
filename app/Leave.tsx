import Header from "@/components/Header";
import { COLORS } from "@/constants/theme";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import  AntDesign  from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "@/components/CustomButton";
import LeaveCard from "@/components/LeaveCard";
import moment from "moment";

const Leave = () => {
  const [childVal, setChildVal] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateSet, setStartDateSet] = useState(false);
  const [endDateSet, setEndDateSet] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [reason, setReason] = useState("");
  type TApplication = {
    childVal: string;
    reason: string;
    startDate: string;
    endDate: string;
  };
  const [applications, setApplications] = useState<TApplication[]>([]);

  const handleDatePick = (e, date) => {
    setStartDate(date);
    setStartDateSet(true);
    setOpen(false);
  };

  const handleDatePick2 = (e, date) => {
    setEndDate(date);
    setEndDateSet(true);
    setOpen2(false);
  };

  const handleSubmit = () => {
    if (!childVal) {
      alert("Please select a child");
      return;
    }
    if (!reason) {
      alert("Please give a reason");
      return;
    }
    if (!startDateSet) {
      alert("Please select a start date");
      return;
    }
    if (!endDateSet) {
      alert("Please select a end date");
      return;
    }
    setApplications([
      ...applications,
      {
        childVal,
        reason,
        startDate: moment(startDate).format("DD-MM-YYYY"),
        endDate: moment(endDate).format("DD-MM-YYYY"),
      },
    ]);
    alert("Your Leave application submitted successfully");
    return;
  };
  return (
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
          title={"Leave Application"}
          bgWhite
          leftIcon={"back"}
        />

        <ScrollView style={{ padding: 10 }}>
        <Text
            style={{
              fontSize: 20,
              color: COLORS.text,
              paddingLeft: 12,
            }}
          >
            Submit Leave Application
          </Text>
          {/* leave application form */}
          <View
            style={{
              gap: 15,
              shadowColor: "rgba(0,0,0,0.6)",
              shadowOpacity: 0.8,
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowRadius: 4.65,
              elevation: 8,
              margin: 10,
              padding: 15,
              borderRadius: 10,
              backgroundColor: 'white',
            }}
          >
            {/* select child */}
            <View>
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                  position: 'relative',
                }}
              >
                <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                  style={{ placeholder: { color: "#424140", } }}
                  placeholder={{ label: "Select Child" }}
                  onValueChange={(value) => setChildVal(value)}
                  items={[
                    { label: "Child One", value: "one" },
                    { label: "Child Two", value: "two" },
                  ]}
                />
                <AntDesign style={{position: 'absolute', right: 15, top: 12}} name="caretdown" size={15} color={"#424140"} />
              </View>
            </View>

            {/* reason */}
            <TextInput
              style={{
                borderColor: "#a2a1a6",
                paddingLeft: 12,
                borderWidth: 1,
                borderRadius: 3,
                padding: 8
              }}
              placeholderTextColor={"#424140"}
              onChangeText={(value) => setReason(value)}
              placeholder="Write a reason of your leave here"
            />

            {/* start date of your leave */}
            <View style={{position: 'relative'}}>
              <TouchableOpacity
                style={{
                  borderColor: "#a2a1a6",
                  paddingLeft: 12,
                  padding: 12,
                  borderWidth: 1,
                  borderRadius: 3,
                }}
                onPress={() => setOpen(true)}
              >
                <Text  style={{color: '#424140'}}>
                  {!startDateSet ? "Start Date" : startDate.toDateString()}
                </Text>
              </TouchableOpacity>
              <AntDesign style={{position: 'absolute', right: 15, top: 14}} name="calendar" size={15} color={"#424140"} />

              {open && (
                <DateTimePicker
                  testID="dateTimePicker110"
                  value={startDate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={handleDatePick}
                />
              )}
            </View>

            {/* end date of your leave */}
            <View style={{position: 'relative'}}>
              <TouchableOpacity
                style={{
                  borderColor: "#a2a1a6",
                  paddingLeft: 12,
                  padding: 12,
                  borderWidth: 1,
                  borderRadius: 3,
                }}
                onPress={() => setOpen2(true)}
              >
                <Text style={{color: '#424140'}}>{!endDateSet ? "End Date" : endDate.toDateString()}</Text>
              </TouchableOpacity>

              <AntDesign style={{position: 'absolute', right: 15, top: 14}} name="calendar" size={15} color={"#424140"} />
              {open2 && (
                <DateTimePicker
                  testID="dateTimePicker111"
                  value={endDate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={handleDatePick2}
                />
              )}
            </View>

            <CustomButton title="Submit" onPress={handleSubmit} />
          </View>

          {/* leave card */}

          <View style={{ gap: 10, marginTop: 25 }}>
            {applications.length > 0 &&
              applications?.map((item, i) => (
                <>
                  <LeaveCard item={item} />
                </>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Leave;
