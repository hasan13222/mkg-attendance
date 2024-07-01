import { GlobalStyleSheet } from "@/constants/StyleSheet";
import { COLORS, SIZES } from "@/constants/theme";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { useTheme } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
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
import { postApi } from "./../redux/reducer/test";

const GeneralSMS = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [template, setTemplate] = useState("");
  const [smsBody, setSmsBody] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { colors } = useTheme();

  const handleValueChange = (value: string) => {
    setCategory(value);
    if (value) {
      setShowCategories(true);
    }
  };

  const handleTemplateValueChange = (value: string) => {
    setTemplate(value);
    if (value) {
      setSmsBody("International Labour Day");
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
          title={"General SMS"}
          bgWhite
          leftIcon={"back"}
        />

        <View
          style={{
            backgroundColor: colors.card,
            padding: 5,
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 12,
              marginTop: 5,
              color: colors.text,
            }}
          >
            Send General SMS
          </Text>
          <View
            style={{
              gap: 10,
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
              backgroundColor: "white",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.text,
                  paddingBottom: 5,
                  marginTop: -5,
                }}
              >
                Select Wise
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
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={handleValueChange}
                  items={[
                    { label: "Parents", value: "1" },
                    { label: "Students", value: "2" },
                  ]}
                />
              </View>
            </View>

            {showCategories && (
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.text,
                    paddingVertical: 5,
                  }}
                >
                  Select Class
                </Text>
                <View
                  style={{
                    borderColor: "#a2a1a6",
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                >
                  <SectionedMultiSelect
                    selectText="Select Class"
                    searchPlaceholderText="Search Class"
                    modalAnimationType="slide"
                    colors={{ primary: "#424140" }}
                    items={items}
                    uniqueKey="id"
                    styles={{
                      selectToggle: { padding: 10, paddingLeft: 12 },
                      selectToggleText: { fontSize: 14 },
                    }}
                    IconRenderer={Icon}
                    onSelectedItemsChange={setSelectedItems}
                    selectedItems={selectedItems}
                  />
                </View>
              </View>
            )}

            <View>
              <Text
                style={{ fontSize: 15, color: colors.text, paddingVertical: 5 }}
              >
                Select Template
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
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={handleTemplateValueChange}
                  items={[
                    { label: "May Day", value: "1" },
                    { label: "Victory Day", value: "2" },
                  ]}
                />
              </View>
            </View>

            <View>
              <Text
                style={{ fontSize: 15, color: colors.text, paddingVertical: 5 }}
              >
                SMS Body
              </Text>
              <TextInput
                style={[
                  styles.inputStyle2,
                  { borderColor: "#a2a1a6", color: "#424140" },
                ]}
                multiline={true}
                numberOfLines={4}
                value={smsBody}
                placeholder="Write SMS Body Text Here..."
                placeholderTextColor={"#424140"}
              />
            </View>

            <CustomButton
              onPress={() => setModalVisible(!modalVisible)}
              title={"Send SMS"}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    ...FONTS.font,
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  inputStyle2: {
    ...FONTS.font,
    textAlignVertical: "top",
    paddingTop: 8,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 7,
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

export default GeneralSMS;
