import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const CustomButton = (props) => {
  return (
      <TouchableOpacity
        disabled={props.disabled}
        activeOpacity={0.75}
        style={[
          { ...styles.button, 
            borderRadius: props.radius ? props.radius : SIZES.radius },
          props.btnSm && { height: 40 },
          props.color && { backgroundColor: props.color },
          props.btnLight && {
            backgroundColor: "#E6E6E6",
            elevation: 0,
            shadowOpacity: 0,
          },
          props.disabled && {
            backgroundColor: "#C9C9C9",
            elevation: 0,
            shadowOpacity: 0,
          },
        ]}
        onPress={() => (props.onPress ? props.onPress() : "")}
      >
        <Text
          style={[
            { ...FONTS.fontLg, color: COLORS.white },
            props.btnLight && { color: "#646464" },
          ]}
        >
          {props.title}
        </Text>
      </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#AF1254",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
});

export default CustomButton;
