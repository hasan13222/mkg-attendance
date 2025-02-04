import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import {  FONTS, SIZES } from "@/constants/theme";
import  AntDesign  from "@expo/vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native";

import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CustomButton from "@/components/CustomButton";
import { TextInput } from "react-native";

const Marks = () => {
  const { colors } = useTheme();

  const [subjectVal, setSubjectVal] = useState("");

  const handleSearch = () => {};
  return (
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
        title={"Marks"}
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
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                Select Exam
              </Text>
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
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={(value) => setSubjectVal(value)}
                  items={[
                    { label: "First Term Exam", value: "1" },
                    { label: "Final Exam", value: "2" },
                  ]}
                /><AntDesign style={{position: 'absolute', right: 15, top: 12}} name="caretdown" size={13} color={"#424140"} />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                Select Subject
              </Text>
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
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={(value) => setSubjectVal(value)}
                  items={[
                    { label: "First Term Exam", value: "1" },
                    { label: "Final Exam", value: "2" },
                  ]}
                /><AntDesign style={{position: 'absolute', right: 15, top: 12}} name="caretdown" size={13} color={"#424140"} />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                Select Class
              </Text>
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
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={(value) => setSubjectVal(value)}
                  items={[
                    { label: "First Term Exam", value: "1" },
                    { label: "Final Exam", value: "2" },
                  ]}
                /><AntDesign style={{position: 'absolute', right: 15, top: 12}} name="caretdown" size={13} color={"#424140"} />
              </View>
            </View>

            <View style={{ marginTop: 15 }}>
              <CustomButton onPress={handleSearch} title={"Search"} />
            </View>
          </View>

          {/* search result */}
          <View
            style={{
              backgroundColor: colors.card,
              borderRadius: SIZES.radius,
              marginTop: 15,
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
                borderBottomWidth: 0,
                borderColor: colors.border,
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  paddingLeft: 15,
                  paddingVertical: 15,
                  fontSize: 16,
                  fontWeight: "condensedBold",
                }}
              >
                Input Students Marks Here
              </Text>
            </View>

            {/* View Marks */}

            <View
              style={{
                borderTopWidth: 1,
                borderColor: colors.border,
                paddingVertical: 10,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.tbodyItem,
                    color: colors.text,
                    paddingLeft: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  Md. Sabbir Rahman
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Roll No: 10
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Total: 100
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 13,
                  paddingHorizontal: 15,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>Wr.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>MCQ.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: colors.border,
                paddingVertical: 10,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.tbodyItem,
                    color: colors.text,
                    paddingLeft: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  Md. Sabbir Rahman
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Roll No: 10
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Total: 100
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 13,
                  paddingHorizontal: 15,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>Wr.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>MCQ.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: colors.border,
                paddingVertical: 10,
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.tbodyItem,
                    color: colors.text,
                    paddingLeft: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  Md. Sabbir Rahman
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Roll No: 10
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Total: 100
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 13,
                  paddingHorizontal: 15,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>Wr.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  <Text>MCQ.</Text>
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>
              </View>
            </View>

            {/* confirm mark input */}
            <View style={{ marginTop: 0, padding: 15 }}>
              <CustomButton
                onPress={handleSearch}
                title={"Confirm Mark Input"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
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
  },
  listStyle: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  tbodyItem: {
    ...FONTS.font,
  },
  discountInputStyle: {
    ...FONTS.fontLg,
    height: 30,
    width: 60,
    paddingHorizontal: 0,
    paddingLeft: 5,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: "rgb(216, 216, 216)",
    borderRadius: 5,

  },
});

export default Marks;
