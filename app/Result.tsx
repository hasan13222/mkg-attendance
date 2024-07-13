import Header from "@/components/Header";
import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { FONTS, SIZES } from "@/constants/theme";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const Result = () => {
  const { colors } = useTheme();
  const [classVal, setClassVal] = useState("");
  const [examVal, setExamVal] = useState("");
  const [subjectVal, setSubjectVal] = useState("");

  const handleSearch = () => {};
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
          title={"Result"}
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
                  Select Exam
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
                    onValueChange={(value) => setExamVal(value)}
                    items={[
                      { label: "First Term Exam", value: "1" },
                      { label: "Final Exam", value: "2" },
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
                      { label: "First Term Exam", value: "1" },
                      { label: "Final Exam", value: "2" },
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
              <View>
                <Text style={{ fontSize: 15, paddingBottom: 5 }}>
                  Select Subject
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
                    onValueChange={(value) => setSubjectVal(value)}
                    items={[
                      { label: "First Term Exam", value: "1" },
                      { label: "Final Exam", value: "2" },
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

              <View>
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
                    color: "#36012f",
                    paddingLeft: 15,
                    paddingVertical: 15,
                    fontSize: 16,
                    fontWeight: "condensedBold",
                  }}
                >
                  Students Results
                </Text>
              </View>

              {/* View Marks */}
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.border,
                  paddingVertical: 10,
                  gap: 5,
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
                      color: "#030303",
                      paddingLeft: 15,
                      fontWeight: "condensedBold",
                    }}
                  >
                    Md. Sabbir Rahman
                  </Text>
                  <Text
                    style={{
                      color: "#030303",
                      fontWeight: "condensedBold",
                    }}
                  >
                    Roll No: 10
                  </Text>
                  <Text
                    style={{
                      color: "#77810a",
                      fontWeight: "bold",
                    }}
                  >
                    Total: 390
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 5,
                    marginHorizontal: 15,
                    marginTop: 8,
                    padding: 10,
                    paddingTop:8,
                    borderRadius: 2,
                    alignItems: "center",
                    borderColor: "gainsboro",
                    borderWidth: 1,
                    position: "relative"
                  }}
                >
                    <Text style={{position: 'absolute',color: "#40393b", paddingHorizontal:3, top: -12,left: 12, backgroundColor: 'white', zIndex: 1}}>Marks</Text>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Bangla: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Mathmatics: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      English: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Social Science: 80
                    </Text>
                  </View>
                </View>
                
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.border,
                  paddingVertical: 10,
                  gap: 5,
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
                      color: "#030303",
                      paddingLeft: 15,
                      fontWeight: "condensedBold",
                    }}
                  >
                    Md. Sabbir Rahman
                  </Text>
                  <Text
                    style={{
                      color: "#030303",
                      fontWeight: "condensedBold",
                    }}
                  >
                    Roll No: 10
                  </Text>
                  <Text
                    style={{
                      color: "#77810a",
                      fontWeight: "bold",
                    }}
                  >
                    Total: 390
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 5,
                    marginHorizontal: 15,
                    marginTop: 8,
                    padding: 10,
                    paddingTop:8,
                    borderRadius: 2,
                    alignItems: "center",
                    borderColor: "gainsboro",
                    borderWidth: 1,
                    position: "relative"
                  }}
                >
                    <Text style={{position: 'absolute',color: "#40393b", paddingHorizontal:3, top: -12,left: 12, backgroundColor: 'white', zIndex: 1}}>Marks</Text>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Bangla: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Mathmatics: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      English: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Social Science: 80
                    </Text>
                  </View>
                </View>
                
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.border,
                  paddingVertical: 10,
                  gap: 5,
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
                      color: "#030303",
                      paddingLeft: 15,
                      fontWeight: "condensedBold",
                    }}
                  >
                    Md. Sabbir Rahman
                  </Text>
                  <Text
                    style={{
                      color: "#030303",
                      fontWeight: "condensedBold",
                    }}
                  >
                    Roll No: 10
                  </Text>
                  <Text
                    style={{
                      color: "#77810a",
                      fontWeight: "bold",
                    }}
                  >
                    Total: 390
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 5,
                    marginHorizontal: 15,
                    marginTop: 8,
                    padding: 10,
                    paddingTop:8,
                    borderRadius: 2,
                    alignItems: "center",
                    borderColor: "gainsboro",
                    borderWidth: 1,
                    position: "relative"
                  }}
                >
                    <Text style={{position: 'absolute',color: "#40393b", paddingHorizontal:3, top: -12,left: 12, backgroundColor: 'white', zIndex: 1}}>Marks</Text>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Bangla: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Mathmatics: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      English: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Social Science: 80
                    </Text>
                  </View>
                </View>
                
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: colors.border,
                  paddingVertical: 10,
                  gap: 5,
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
                      color: "#030303",
                      paddingLeft: 15,
                      fontWeight: "condensedBold",
                    }}
                  >
                    Md. Sabbir Rahman
                  </Text>
                  <Text
                    style={{
                      color: "#030303",
                      fontWeight: "condensedBold",
                    }}
                  >
                    Roll No: 10
                  </Text>
                  <Text
                    style={{
                      color: "#77810a",
                      fontWeight: "bold",
                    }}
                  >
                    Total: 390
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 5,
                    marginHorizontal: 15,
                    marginTop: 8,
                    padding: 10,
                    paddingTop:8,
                    borderRadius: 2,
                    alignItems: "center",
                    borderColor: "gainsboro",
                    borderWidth: 1,
                    position: "relative"
                  }}
                >
                    <Text style={{position: 'absolute',color: "#40393b", paddingHorizontal:3, top: -12,left: 12, backgroundColor: 'white', zIndex: 1}}>Marks</Text>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Bangla: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Mathmatics: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      English: 80
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "#61585b", marginRight: 12 }}>
                      Social Science: 80
                    </Text>
                  </View>
                </View>
                
              </View>
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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

export default Result;
