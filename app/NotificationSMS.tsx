import { GlobalStyleSheet } from "@/constants/StyleSheet";
import { COLORS, SIZES } from "@/constants/theme";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { useTheme } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FONTS } from "./../constants/theme";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { studentsReports } from "@/constants/studentReports";
import Report from "@/components/report";
import { ReportStyles } from "./Reports";
import RNPickerSelect from "react-native-picker-select";
import { SafeAreaView } from "react-native";

const NotificationSMS = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [template, setTemplate] = useState("");
  const [showClass, setShowClass] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [level, setLevel] = useState("");
  const [section, setSection] = useState("");
  const [status, setStatus] = useState("");
  const [exam, setExam] = useState("");
  const [showExam, setShowExam] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { colors } = useTheme();

  const handleValueChange = (value: string) => {
    setCategory(value);
    if (value) {
      setShowExam(true);
      setShowStatus(true);
    }
  };

  const handleTemplateValueChange = (value: string) => {
    setTemplate(value);
    if (value === "1") {
      setShowClass(true);
      setShowSections(false);
    }
    if (value === "2") {
      setShowSections(true);
      setShowClass(false);
    }
  };

  const items = [
    { name: "Class 1", id: 1 },
    { name: "Class 2", id: 2 },
  ];

  return (
    <>
      <SafeAreaView style={{paddingTop: 30, backgroundColor: 'white'}}>
      <Header
          paddingTop={0}
          paddingBottom={8}
        title={"Notification SMS"}
        bgWhite
        leftIcon={"back"}
      />

      <View
        style={{
          backgroundColor: colors.card,
          padding: 10,
          marginTop: 1,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 10,
          }}
        >
          Send Notification SMS
        </Text>
        <View style={{ gap: 15,
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
              paddingTop: 10,
              borderRadius: 10,
              backgroundColor: "white", }}>
          <View>
            <Text style={{ fontSize: 15, paddingBottom: 7 }}>
              Select Notification
            </Text>
            <View
              style={{
                borderColor: "#a2a1a6",
                borderWidth: 1,
                borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
              }}
            >
              <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                onValueChange={handleValueChange}
                items={[
                  { label: "Exam Result", value: "1" },
                  { label: "Pay Slip", value: "2" },
                ]}
              />
            </View>
          </View>

          {showExam && (
            <View>
              <Text style={{ fontSize: 15, paddingBottom: 7 }}>
                Select Exam
              </Text>
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                }}
              >
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                  onValueChange={(value) => setExam(value)}
                  items={[
                    { label: "First Term", value: "1" },
                    { label: "Last Term", value: "2" },
                  ]}
                />
              </View>
            </View>
          )}

          <View>
            <Text style={{ fontSize: 15, paddingBottom: 7 }}>
              Select Class/Section
            </Text>
            <View
              style={{
                borderColor: "#a2a1a6",
                borderWidth: 1,
                borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
              }}
            >
              <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                onValueChange={handleTemplateValueChange}
                items={[
                  { label: "Class", value: "1" },
                  { label: "Section", value: "2" },
                ]}
              />
            </View>
          </View>

          {showClass && (
            <View>
              <Text style={{ fontSize: 15, paddingBottom: 7 }}>
                Select Class
              </Text>
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                }}
              >
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                  onValueChange={(value) => setLevel(value)}
                  items={[
                    { label: "Class 1", value: "1" },
                    { label: "Class 2", value: "2" },
                  ]}
                />
              </View>
            </View>
          )}

          {showSections && (
            <View>
              <Text style={{ fontSize: 15, paddingBottom: 7 }}>
                Select Section
              </Text>
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                }}
              >
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                  onValueChange={(value) => setSection(value)}
                  items={[
                    { label: "Section 1", value: "1" },
                    { label: "Section 2", value: "2" },
                  ]}
                />
              </View>
            </View>
          )}

          {showStatus && (
            <View>
              <Text style={{ fontSize: 15, paddingBottom: 7 }}>
                Select Status
              </Text>
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                }}
              >
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  
                  style={{ placeholder: { color: "#424140", } }}
                  onValueChange={(value) => setStatus(value)}
                  items={[
                    { label: "Fail", value: "1" },
                    { label: "Pass", value: "2" },
                  ]}
                />
              </View>
            </View>
          )}
          <CustomButton
            onPress={() => setModalVisible(!modalVisible)}
            title={"Send Notification"}
          />
        </View>
      </View>
      </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  inputStyle2: {
    ...FONTS.fontLg,
    textAlignVertical: "top",
    paddingTop: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  theadItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...FONTS.font,
  },
  tbodyItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...FONTS.font,
    ...FONTS.fontBold,
  },
});

export default NotificationSMS;
