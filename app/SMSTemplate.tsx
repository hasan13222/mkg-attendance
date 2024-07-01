import { GlobalStyleSheet } from "@/constants/StyleSheet";
import { COLORS, SIZES } from "@/constants/theme";
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
import { studentsReports } from "@/constants/studentReports";
import Report from "@/components/report";
import { ReportStyles } from "./Reports";

const SMSTemplate = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  const TableData = [
    {
      name: "May Day",
      email: "International Labour Day",
      age: 20,
    },
    {
      name: "May Day",
      email: "International Labour Day",
      age: 20,
    },
    {
      name: "May Day",
      email: "International Labour Day",
      age: 20,
    },
    {
      name: "May Day",
      email: "International Labour Day",
      age: 20,
    },
  ];
  return (
    <>
    <SafeAreaView style={{paddingTop: 30, backgroundColor: 'white', height: "100%"}}>
    <Header
          paddingTop={0}
          paddingBottom={8}
        title={"SMS Template"}
        bgWhite
        leftIcon={"back"}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
            onPress={() => setModalVisible(false)}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />

          {/* sms template component */}

          <View
            style={{
              backgroundColor: colors.card,
              maxWidth: 330,
              width: "100%",
              borderRadius: SIZES.radius,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                paddingHorizontal: 15,
                borderBottomWidth: 1,
                borderColor: colors.border,
                paddingVertical: 6,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ ...FONTS.h5, color: colors.text }}>
                Add SMS Template
              </Text>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => setModalVisible(false)}
              >
                <FeatherIcon name={"x"} size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 10 }}>
              <TextInput
                style={[
                  styles.inputStyle,
                  { borderColor: colors.border, color: "#61605d" },
                ]}
                placeholder="SMS Title"
                placeholderTextColor={"#61605d"}
              />
              <TextInput
                style={[
                  styles.inputStyle2,
                  { borderColor: colors.border, color: "#61605d" },
                ]}
                multiline={true}
                numberOfLines={4}
                placeholder="SMS Body"
                placeholderTextColor={"#61605d"}
              />
              <CustomButton
                onPress={() => setModalVisible(!modalVisible)}
                title={"Add Template"}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* add template */}
      <View style={{ alignItems: "right", padding: 10 }}>
        <CustomButton
          onPress={() => setModalVisible(!modalVisible)}
          title={"Add Template"}
        />
      </View>

      {/* show added template */}
      <View style={{ padding: 10 }}>
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.radius,
            marginBottom: 15,
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
              alignSelf: "stretch",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                ...styles.theadItem,
                flex: 0.4,
                color: colors.text,
                paddingLeft: 15,
              }}
            >
              Title
            </Text>
            <Text style={{ ...styles.theadItem, color: colors.text }}>
              Template
            </Text>
            <Text
              style={{
                ...styles.theadItem,
                flex: 0.35,
                color: colors.text,
                textAlign: "right",
                paddingRight: 15,
              }}
            >
              Action
            </Text>
          </View>
          {TableData.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  alignSelf: "stretch",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    ...styles.tbodyItem,
                    flex: 0.4,
                    paddingLeft: 15,
                    color: colors.text,
                  }}
                >
                  {data.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ ...styles.tbodyItem, color: colors.text }}
                >
                  {data.email}
                </Text>
                <Text
                  style={{
                    ...styles.tbodyItem,
                    flex: 0.3,
                    textAlign: "right",
                    paddingRight: 15,
                    color: colors.text,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      {
                        backgroundColor: "#AF1254",
                        marginTop: 5,
                        paddingHorizontal: 3,
                        paddingVertical: 3,
                        borderRadius: 2,
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text style={[{ color: COLORS.white }]}>Delete</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
      {/* modal */}
      
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

export default SMSTemplate;
