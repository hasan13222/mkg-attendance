import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { FONTS } from "@/constants/theme";
import { images } from "@/assets";

const StudentCard = ({ item }) => {
  const { colors } = useTheme();
  return (
    <>
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginRight: 16,
          backgroundColor: colors.card,
          padding: 15,
          maxWidth: 120,
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            borderRadius: 5,
            marginBottom: 7,
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              objectFit: "cover",
              borderRadius: 100,
            }}
            source={item?.image}
          />
        </View>
        <Text
          numberOfLines={2}
          style={{
            ...FONTS.font,
            fontSize: 15,
            textAlign: "center",
            color: colors.text,
          }}
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default StudentCard;
