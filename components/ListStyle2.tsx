import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FONTS } from "../constants/theme";

const ListStyle2 = (props) => {
  const { colors } = useTheme();

  return (
    <>
      <TouchableOpacity
      onPress={() => props.onPress && props.onPress()}
        style={{
          ...styles.listStyle,
          borderColor: colors.border,
          borderTopWidth: props.borderTop ? Number(props.borderTop) : 1,
        }}
      >
        <Text
          style={{
            ...FONTS.font,
            ...FONTS.fontPoppins,
            color: colors.text,
            flex: 1,
          }}
        >
          {props.title}
        </Text>
        {props.arrowDown && (
          <FontAwesome name={"angle-down"} color={colors.text} size={18} />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ListStyle2;
