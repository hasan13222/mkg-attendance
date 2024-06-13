import React from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES } from "@/constants/theme";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcon from "react-native-vector-icons/Feather";

const CardStyle4 = ({ title, image, price, size, rate, navigate }) => {
  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <>
      <View
        style={[
          {
            flexDirection: "row",
            backgroundColor: colors.card,
            borderRadius: 18,
            width: 280,
          },
          Platform.OS === "android" && {
            marginRight: 12,
          },
        ]}
      >
        <View
          style={{ width: "48%", paddingHorizontal: 15, paddingVertical: 10 }}
        >
          <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              height: 100,
            }}
            source={image}
          />
        </View>
        <View style={{ paddingRight: 15, paddingVertical: 15 }}>
          <TouchableOpacity
            onPress={() => navigate && navigation.navigate(navigate)}
          >
            <Text style={{ ...FONTS.h6, color: colors.title, marginBottom: 3 }}>
              {title}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.primayLight2,
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 8,
                marginRight: 15,
              }}
            >
              <Text
                style={{
                  ...FONTS.fontSm,
                  ...FONTS.fontBold,
                  color: COLORS.primary2,
                }}
              >
                {size}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  resizeMode: "contain",
                  marginRight: 5,
                }}
                source={IMAGES.star}
              />
              <Text
                style={{
                  ...FONTS.fontSm,
                  ...FONTS.fontBold,
                  color: colors.title,
                }}
              >
                {rate}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ ...FONTS.fontSm, color: colors.title, marginRight: 3 }}
              >
                $
              </Text>
              <Text
                style={{ ...FONTS.h6, color: colors.title, lineHeight: 22 }}
              >
                {price}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate && navigation.navigate("ShoppingCart")}
            >
              <Text>dkfjdkf</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardStyle4;
