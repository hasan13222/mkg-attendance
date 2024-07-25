import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import FeatherIcon from "react-native-vector-icons/Feather";
import FontawesomeIcon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import {
  setShowSearchBox,
  setPartialPay,
  setFullPay,
  setCollect,
} from "@/redux/reducer/feeSearch";
import Header from "@/components/Header";
import { Checkbox } from "react-native-paper";
import FeeDetails from "@/components/Fees/FeeDetails";
import StudentDetails from "@/components/Fees/StudentDetails";

const Fees = (props) => {
  type TFee = {
    id: string;
    title: string;
    amount: number;
  };

  interface TCheckFee extends TFee {
    partialBox?: boolean;
    partialAmount?: number;
  }
  const [checkedItems, setCheckedItems] = useState<TCheckFee[]>([]);

  // const dispatch = useDispatch();

  // const { showSearchBox, fullPay, partialPay } = useSelector(
  //   (state: RootState) => state.feeSearch
  // );

  const { colors } = useTheme();
  const fees = [
    {
      id: "fee1",
      title: "May Fee, 2024",
      amount: 100,
    },
    {
      id: "fee2",
      title: "June Fee, 2024",
      amount: 100,
    },
    {
      id: "fee3",
      title: "July Fee, 2024",
      amount: 100,
    },
  ];

  const isAlreadyChecked = (payload: TFee) => {
    const isAlreadyChecked = checkedItems.find(
      (item) => item.id === payload.id
    );
    return isAlreadyChecked;
  };
  const handleCheck = (item: TFee) => {
    if (isAlreadyChecked(item)) {
      const newItems = checkedItems.filter(
        (checkedItem) => checkedItem.id !== item.id
      );
      setCheckedItems(newItems);
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const updateCheckedItems = (
    index: number,
    value: string | number = 0,
    full: boolean = false
  ) => {
    if (full) {
      const newCheckedItems = [...checkedItems];
      delete newCheckedItems[index].partialAmount;
      setCheckedItems(newCheckedItems);

      checkedItems[index].partialBox = false;
      setCheckedItems(newCheckedItems);
      return;
      return;
    }
    if (!value) {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index].partialAmount = 0;
      setCheckedItems(newCheckedItems);
      return;
    } else {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index].partialAmount = Number(value);
      setCheckedItems(newCheckedItems);
      return;
    }
  };
  const updatePartialBox = (index: number) => {
    if (checkedItems[index].partialBox) {
      const newCheckedItems = [...checkedItems];
      checkedItems[index].partialBox = !checkedItems[index].partialBox;
      setCheckedItems(newCheckedItems);
      return;
    } else {
      const newCheckedItems = [...checkedItems];
      checkedItems[index].partialBox = true;
      setCheckedItems(newCheckedItems);
      return;
    }
  };
  const isAmountFull = (id: string) => {
    const checkedFeeItem = checkedItems.find((f) => f.id === id);
    if (checkedFeeItem?.partialAmount) {
      return false;
    }
    return true;
  };

  return (
    <>
      {/* <KeyboardAvoidingView> */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
          paddingBottom: 70,
        }}
      >
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Fees"}
          bgWhite
          leftIcon={"back"}
        />

        <ScrollView>
          <View
            style={{
              paddingHorizontal: 15,
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
              Student Fees
            </Text> */}

            {/* Search */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                gap: 10,
                marginBottom: 15,
              }}
            >
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
                // onPress={() => dispatch(setShowSearchBox(!showSearchBox))}
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
              <StudentDetails />

              {/* fee details */}
              <FeeDetails />
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
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h6,
                    color: colors.text,
                    padding: 10,
                    paddingLeft: 15,
                    paddingBottom: 2,
                    marginBottom: 2,
                  }}
                >
                  Collect Fees
                </Text>
              </View>

              {/* checkbox wrapper*/}
              <View
                style={{
                  height: 80,
                  marginTop: 15,
                  margin: 15,
                  marginBottom: 0,
                  padding: 5,
                  paddingBottom: 8,
                  borderColor: "rgba(0,0,0,.1)",
                  borderWidth: 1,
                  position: "relative",
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    top: -11,
                    left: 13,
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                >
                  Select Fees
                </Text>
                <ScrollView>
                  {fees.map((item, index) => (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: -10,
                      }}
                    >
                      <Checkbox
                        status={
                          isAlreadyChecked(item) ? "checked" : "unchecked"
                        }
                        onPress={() => handleCheck(item)}
                      />
                      <Text style={{ marginTop: -2, marginLeft: -2 }}>
                        {item.title}
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              </View>

              {/* fee row */}
              {checkedItems.map((item, index) => (
                <View
                  style={{
                    padding: 15,
                    paddingBottom: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      borderBottomColor: colors.border,
                      borderBottomWidth: 1,
                      marginBottom: 5,
                      paddingBottom: 5,
                    }}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      paddingTop: 0,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: COLORS.text }}>
                      Fee: {item.amount}
                    </Text>
                    <Text style={{ color: COLORS.text }}>
                      Disc: {item.amount * 0.2}
                    </Text>
                    <Text style={{ color: COLORS.text }}>
                      Net: {item.amount - item.amount * 0.2}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => updateCheckedItems(index, item.amount, true)}
                      style={[
                        {
                          backgroundColor: isAmountFull(item.id)
                            ? "#a2af12"
                            : "transparent",
                          borderColor: "#a2af12",
                          borderWidth: 1,
                          paddingHorizontal: 4,
                          paddingVertical: 2,
                          borderRadius: 2,
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          {
                            color: isAmountFull(item.id)
                              ? COLORS.white
                              : COLORS.textLight,
                          },
                        ]}
                      >
                        Full
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => updatePartialBox(index)}
                      style={[
                        {
                          backgroundColor: !isAmountFull(item.id)
                            ? "#a2af12"
                            : "transparent",
                          borderColor: "#a2af12",
                          borderWidth: 1,
                          paddingHorizontal: 4,
                          paddingVertical: 2,
                          borderRadius: 2,
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          {
                            color: !isAmountFull(item.id)
                              ? COLORS.white
                              : COLORS.textLight,
                          },
                        ]}
                      >
                        Partial
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {checkedItems[index].partialBox && (
                    <TextInput
                      onChangeText={(value) => updateCheckedItems(index, value)}
                      defaultValue={checkedItems[index]?.partialAmount?.toString()}
                      style={{
                        ...styles.discountInputStyle,
                        color: colors.text,
                        marginTop: 5,
                        marginLeft: "auto",
                        paddingLeft: 5,
                        width: 50,
                      }}
                    />
                  )}
                </View>
              ))}

              {/* total collect */}
              <View
                style={{
                  padding: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Total: 350</Text>
                <TouchableOpacity
                  // onPress={() => dispatch(setCollect(true))}
                  activeOpacity={0.8}
                  style={[
                    {
                      backgroundColor: "#AF1254",
                      paddingHorizontal: 13,
                      paddingVertical: 8,
                      borderRadius: 2,
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text style={[{ color: COLORS.white }]}>Collect Fees</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </>
  );
};

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 12,
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
    paddingVertical: 3,
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
