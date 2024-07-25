import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "./CustomButton";
import { GlobalStyleSheet } from "../constants/StyleSheet";
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from "../constants/theme";
import { SvgXml } from "react-native-svg";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/reducer/userLogin";

const SignIn = () => {
  const { colors } = useTheme();
  const [passwordShow, setPasswordShow] = useState(true);
  const dispatch = useDispatch();

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  useFonts({
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
  });

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <LinearGradient style={{ flex: 1 }} colors={["#fff", "#AF1254"]}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                minHeight: 200,
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 100,
                  marginBottom: 40,
                  resizeMode: "contain",
                }}
                source={IMAGES.appLogo}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  resizeMode: "stretch",
                  height: 80,
                  tintColor: COLORS.white,
                }}
                source={IMAGES.bgShape}
              />
            </View>

            <View style={{ backgroundColor: "#ffffff" }}>
              <View style={[GlobalStyleSheet.container, { paddingTop: 5 }]}>
                <View style={{ marginBottom: 30 }}>
                  <Text
                    style={[
                      FONTS.h2,
                      { textAlign: "center", color: colors.text },
                    ]}
                  >
                    Sign in
                  </Text>
                  <Text
                    style={[
                      FONTS.font,
                      {
                        textAlign: "center",
                        color: colors.text,
                        opacity: 0.7,
                      },
                    ]}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </Text>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml xml={ICONS.user} />
                  </View>

                  <TextInput
                    style={[
                      styles.inputStyle,
                      { borderColor: colors.border, color: "#61605d" },
                    ]}
                    defaultValue="jackmadani"
                    placeholder="Email"
                    placeholderTextColor={"rgba(255,255,255,.4)"}
                  />
                </View>

                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml xml={ICONS.lock} />
                  </View>
                  <TextInput
                    secureTextEntry={passwordShow}
                    style={[
                      styles.inputStyle,
                      { borderColor: colors.border, color: "#61605d" },
                    ]}
                    placeholder="Password"
                    placeholderTextColor={"rgba(255,255,255,.6)"}
                  />
                  <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Password"
                    accessibilityHint="Password show and hidden"
                    onPress={() => handndleShowPassword()}
                    style={styles.eyeIcon}
                  >
                    {passwordShow ? (
                      <SvgXml xml={ICONS.eyeClose} />
                    ) : (
                      <SvgXml xml={ICONS.eyeOpen} />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: "flex-end", marginBottom: 15 }}>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Text
                      style={[
                        FONTS.fontLg,
                        {
                          color: "#AF1254",
                          textDecorationLine: "underline",
                        },
                      ]}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 5 }}>
                  <CustomButton onPress={() => dispatch(setUser(true))} title="SIGN IN" />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                    marginBottom: 0,
                  }}
                >
                  <View
                    style={{
                      height: 1,
                      flex: 1,
                      backgroundColor: "rgba(255,255,255,.15)",
                    }}
                  />
                  <Text
                    style={[
                      FONTS.font,
                      {
                        textAlign: "center",
                        color: colors.text,
                        opacity: 0.7,
                        paddingHorizontal: 15,
                      },
                    ]}
                  >
                    Or sign in with
                  </Text>
                  <View
                    style={{
                      height: 1,
                      flex: 1,
                      backgroundColor: "rgba(255,255,255,.15)",
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 15,
                  }}
                >
                  <TouchableOpacity style={{ marginHorizontal: 10 }}>
                    <Image
                      style={{ height: 36, width: 36, resizeMode: "contain" }}
                      source={IMAGES.google}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginHorizontal: 10 }}>
                    <Image
                      style={{ height: 36, width: 36, resizeMode: "contain" }}
                      source={IMAGES.facebook}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <Text style={[FONTS.font, { color: colors.text }]}>
                    Don’t have an account?
                  </Text>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Text
                      style={[
                        FONTS.fontLg,
                        {
                          color: "#AF1254",
                          textDecorationLine: "underline",
                        },
                      ]}
                    >
                      Signup Here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  inputIcon: {
    backgroundColor: "#AF1254",
    height: 40,
    width: 40,
    borderRadius: 10,
    position: "absolute",
    left: 5,
    top: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    zIndex: 1,
    top: 0,
  },
});

export default SignIn;
