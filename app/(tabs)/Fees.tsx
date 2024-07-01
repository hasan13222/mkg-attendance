import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, ICONS, SIZES } from "@/constants/theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontawesomeIcon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import { setShowSearchBox, setPartialPay, setFullPay, setCollect } from "@/redux/reducer/feeSearch";

const Fees = (props) => {
  // const [showSearchBox, setShowSearchBox] = useState(false);
  const dispatch = useDispatch();

  const { showSearchBox, fullPay, partialPay } = useSelector(
    (state: RootState) => state.feeSearch
  );

  const { colors } = useTheme();

  return (
    <>
      <ScrollView>
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
            Student Fees
          </Text>

          {/* Search */}
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 15 }}>
            <TextInput
              style={{
                height: 42,
                flexGrow: 1,
                backgroundColor: colors.card,
                paddingHorizontal: 15,
                borderRadius: 10,
                color: colors.text,
              }}
              placeholder="Search Here"
              placeholderTextColor={colors.text}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => dispatch(setShowSearchBox(!showSearchBox))}
              style={[
                {
                  backgroundColor: "#AF1254",
                  paddingHorizontal: 13,
                  paddingVertical: 10,
                  borderRadius: 5,
                  alignItems: "center",
                },
              ]}
            >
              <FeatherIcon name="search" size={22} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                {
                  backgroundColor: "#AF1254",
                  paddingHorizontal: 13,
                  paddingVertical: 10,
                  borderRadius: 5,
                  alignItems: "center",
                },
              ]}
            >
              <FontawesomeIcon name="qrcode" size={22} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* student details */}
          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
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
              <Text style={{ ...FONTS.h5, color: colors.text }}>
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
                      backgroundColor: "#AF1254",
                      paddingHorizontal: 3,
                      paddingVertical: 3,
                      borderRadius: 2,
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text style={[{ color: COLORS.white }]}>Collect</Text>
                </TouchableOpacity>
                {(fullPay === "pending" || fullPay === "active") && (
                  <TouchableOpacity
                  onPress={() => dispatch(setFullPay("active"))}
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
                    <Text style={[{ color: COLORS.white }]}>Full</Text>
                  </TouchableOpacity>
                )}

                {(partialPay === "pending" || partialPay  === "active") && (
                  <TouchableOpacity
                  onPress={() => dispatch(setPartialPay("active"))}
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
                    dispatch(setCollect(true))
                    alert("Your payment completed successfully")}}
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
                    <Text style={[{ color: COLORS.white }]}>Pay</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          {/* student fee details */}
          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
                marginBottom: 90,
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
              <Text style={{ ...FONTS.h5, color: colors.text }}>
                Student Fee Details
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
        </View>
      </ScrollView>
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

export default Fees;
