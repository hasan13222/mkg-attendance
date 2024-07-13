import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { RootState } from "@/redux/reducer";
import {
  setCollect,
  setFullPay,
  setPartialPay,
} from "@/redux/reducer/feeSearch";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/Header";

const Payment = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const { showSearchBox, fullPay, partialPay } = useSelector(
    (state: RootState) => state.feeSearch
  );
  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingTop: 30
      }}>
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Payment"}
          bgWhite
          leftIcon={"back"}
        />
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            

            {/* student details */}
            <View
              style={[
                styles.card,
                {
                  backgroundColor: colors.card,
                  marginTop: 15
                },
              ]}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                  paddingBottom: 8,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 17, color: colors.text }}>
                  Student Details
                </Text>
              </View>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "60%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: colors.text,
                  }}
                >
                  Name: Md. Sabir Ali
                </Text>

                <Text
                  style={{
                    ...styles.listStyle,
                    width: "40%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: colors.text,
                  }}
                >
                  Roll: 12
                </Text>

                <Text
                  style={{
                    ...styles.listStyle,
                    width: "60%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: colors.text,
                  }}
                >
                  Gurdian: Eakub Ali
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "40%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: colors.text,
                  }}
                >
                  Class: Six
                </Text>
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                  paddingBottom: 8,
                  marginBottom: 10,marginTop: 15
                }}
              >
                <Text style={{ fontSize: 17, color: colors.text }}>
                  Student Fee Details
                </Text>
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap",  }}>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Total: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Discount: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Due: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Net Total: 345
                </Text>
              </View>
            </View>

            {/* search result */}
            <View
              style={{
                backgroundColor: colors.card,
                borderRadius: SIZES.radius,
                marginTop: 0,
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
                    color: colors.text,
                    paddingLeft: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  Fee Type
                </Text>
                <Text
                  style={{
                    ...styles.theadItem,
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Discount
                </Text>
                <Text
                  style={{
                    ...styles.theadItem,
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  Amount
                </Text>
                <Text
                  style={{
                    ...styles.theadItem,
                    color: colors.text,
                    paddingRight: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  Action
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "stretch",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    ...styles.tbodyItem,
                    paddingVertical: 10,
                    color: colors.text,
                    paddingLeft: 15,
                    fontWeight: "condensedBold",
                  }}
                >
                  May Fee
                </Text>

                <View
                  style={{
                    ...styles.tbodyItem,
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.discountInputStyle,
                      color: colors.text,
                    }}
                  />
                </View>

                <Text
                  style={{
                    ...styles.tbodyItem,
                    paddingVertical: 10,
                    color: colors.text,
                    fontWeight: "condensedBold",
                  }}
                >
                  300
                </Text>
                <View
                  style={{
                    ...styles.tbodyItem,
                    paddingRight: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => dispatch(setCollect(true))}
                    activeOpacity={0.8}
                    style={[
                      {
                        backgroundColor: "#a2af12",
                        paddingHorizontal: 3,
                        paddingVertical: 3,
                        borderRadius: 2,
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text style={[{ color: COLORS.white }]}>Pay</Text>
                  </TouchableOpacity>
                  {(fullPay === "pending" || fullPay === "active") && (
                    <TouchableOpacity
                      onPress={() => dispatch(setFullPay("active"))}
                      activeOpacity={0.8}
                      style={[
                        {
                          backgroundColor: "#12af2c",
                          marginTop: 5,
                          paddingHorizontal: 3,
                          paddingVertical: 3,
                          borderRadius: 2,
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={[{ color: COLORS.white }]}>Full</Text>
                    </TouchableOpacity>
                  )}

                  {(partialPay === "pending" || partialPay === "active") && (
                    <TouchableOpacity
                      onPress={() => dispatch(setPartialPay("active"))}
                      activeOpacity={0.8}
                      style={[
                        {
                          backgroundColor: "#12af2c",
                          marginTop: 5,
                          paddingHorizontal: 3,
                          paddingVertical: 3,
                          borderRadius: 2,
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={[{ color: COLORS.white }]}>Partial</Text>
                    </TouchableOpacity>
                  )}

                  {fullPay === "active" && (
                    <TextInput
                      style={{
                        ...styles.discountInputStyle,
                        color: colors.text,
                        marginTop: 5,
                        width: "100%",
                        paddingLeft: 5,
                      }}
                      readOnly
                      value="300"
                    />
                  )}

                  {partialPay === "active" && (
                    <TextInput
                      style={{
                        ...styles.discountInputStyle,
                        color: colors.text,
                        marginTop: 5,
                        paddingLeft: 5,
                        width: "100%",
                      }}
                    />
                  )}

                  {(fullPay === "active" || partialPay === "active") && (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(setCollect(true));
                        alert("Your payment completed successfully");
                      }}
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
                      <Text style={[{ color: COLORS.white }]}>Confirm</Text>
                    </TouchableOpacity>
                  )}
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
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  theadItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: 12,
    ...FONTS.font,
  },
  tbodyItem: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: 8,
    ...FONTS.font,
  },
  inputIcon: {
    backgroundColor: "transparent",
    color: COLORS.danger,
    height: 40,
    width: 40,
    borderRadius: 10,
    position: "absolute",
    left: 5,
    top: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  discountInputStyle: {
    ...FONTS.fontLg,
    height: 25,
    width: 60,
    marginLeft: 0,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: "rgb(216, 216, 216)",
    borderRadius: 5,
  },
});

export default Payment;
