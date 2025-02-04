import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, ICONS, SIZES } from "../constants/theme";
import DropShadow from "react-native-drop-shadow";

const Header = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <View
        style={[
          props.transparent && {
            position: "absolute",
            zIndex: 1,
          },
          {
            backgroundColor: "#ff1874",
            borderRadius: 20,
          },
        ]}
      >
        <View
          style={[
            {
              paddingHorizontal: 15,
              paddingTop: props.paddingTop,
              paddingBottom: props.paddingBottom,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: colors.border,
            },
            props.transparent && {
              borderBottomWidth: 0,
            },
            props.bgWhite && {
              backgroundColor: "#ff1874",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              borderBottomWidth: 0,
              zIndex: 1,
            },
          ]}
        >
          {props.sideMenu && (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                height: 48,
                width: 48,
                marginRight: 5,
                marginLeft: -8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FeatherIcon
                style={{ bottom: 2 }}
                color={colors.text}
                size={20}
                name="menu"
              />
            </TouchableOpacity>
          )}
          {props.leftIcon === "close" && (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the previous screen"
              onPress={() => navigation.goBack()}
              style={{
                height: 45,
                width: 45,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                marginRight: 10,
              }}
            >
              <SvgXml
                height={30}
                width={30}
                stroke={"white"}
                xml={ICONS.close}
              />
            </TouchableOpacity>
          )}
          {props.leftIcon === "back" && (
            <TouchableOpacity
              onPress={() => {
                props.backNavigate
                  ? navigation.navigate(props.backNavigate)
                  : navigation.goBack();
              }}
              style={{
                height: 45,
                width: 45,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                marginRight: 10,
              }}
            >
              <MaterialIcons
                name="arrow-back"
                color={props.bgImage ? COLORS.white : COLORS.white}
                size={22}
              />
            </TouchableOpacity>
          )}

          <Text
            style={[
              FONTS.h4,
              { color: COLORS.white, flex: 1 },
              props.bgImage && { color: COLORS.white },
              props.titleCenter && { textAlign: "center", marginRight: 55 },
            ]}
          >
            {props.title}
          </Text>
          {props.rightIcon2 === "pages" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("pages")}
              style={{
                height: 45,
                width: 45,
                marginRight: 10,
                backgroundColor: props.bgImage
                  ? "rgba(255,255,255,.15)"
                  : COLORS.primayLight,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
              }}
            >
              <FeatherIcon name="file" color={COLORS.primary} size={22} />
            </TouchableOpacity>
          )}

          {props.rightIcon === "next" && (
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                backgroundColor: COLORS.primayLight,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
              }}
            >
              <SvgXml stroke={COLORS.primary} xml={ICONS.arrowRight} />
            </TouchableOpacity>
          )}
          {props.messageIcon === true && (
            <TouchableOpacity>
              <FeatherIcon color={"white"} name="message-square" size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;
