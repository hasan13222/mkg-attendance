import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS } from "./../constants/theme";
import { useState } from "react";
import { StudentStyles } from "../app/Students";

const Student = ({ data, index }) => {
  const [present, setPresent] = useState(false);
  return (
    <>
      <View
        key={index}
        style={{
          flex: 1,
          alignSelf: "stretch",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            ...StudentStyles.tbodyItem,
            flex: 0.6,
            paddingLeft: 15,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.roll}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...StudentStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.name}
        </Text>
        <View
          numberOfLines={1}
          style={{
            ...StudentStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => setPresent(true)}
            style={[
              {
                backgroundColor: present
                  ? COLORS.success
                  : COLORS.placeholderColor,
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: "center",
                borderRadius: 5,
              },
            ]}
          >
            <Text
              style={{
                ...FONTS.fontSm,
                ...FONTS.fontPoppins,
                color: COLORS.white,
              }}
            >
              P
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPresent(false)}
            style={[
              {
                backgroundColor: present
                  ? COLORS.placeholderColor
                  : COLORS.danger,
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: "center",
                borderRadius: 5,
              },
            ]}
          >
            <Text
              style={{
                ...FONTS.fontSm,
                ...FONTS.fontPoppins,
                color: COLORS.white,
              }}
            >
              A
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginRight: 17,
          }}
        >
          <FontAwesome name={"check-circle-o"} size={15} color={"#5dff05"} />
          <FontAwesome name={"check-circle-o"} size={15} color={"#5dff05"} />
          <Ionicons name={"close-circle-outline"} size={15} color={"#fc0b03"} />
        </View>
      </View>
    </>
  );
};

export default Student;
