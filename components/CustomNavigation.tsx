import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES } from "../constants/theme";

const CustomNavigation = ({ state, navigation, descriptors }) => {
  const { colors } = useTheme();

  return (
    <>
      <View
        style={{
          height: 65,
          flexDirection: "row",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 0,
          backgroundColor: colors.card,
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
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <View style={styles.tabItem} key={index}>
              <TouchableOpacity style={styles.tabLink} onPress={onPress}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: "contain",
                    marginBottom: 4,
                    opacity: isFocused ? 1 : 0.6,
                    tintColor: isFocused ? COLORS.primary4 : COLORS.title,
                  }}
                  source={
                    label === "Home"
                      ? IMAGES.homeLn
                      : label === "Fees"
                      ? IMAGES.money
                      : label === "Reports"
                      ? IMAGES.report
                      : label === "Students"
                      ? IMAGES.user
                      : label === "Attendance" && IMAGES.calendar
                  }
                />
                <Text
                  style={{
                    ...FONTS.fontSm,
                    ...FONTS.fontBold,
                    color: isFocused ? colors.title : colors.textLight,
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabLink: {
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    ...FONTS.fontSm,
  },
});

export default CustomNavigation;
