import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { COLORS, FONTS } from "@/constants/theme";
import FontawesomeIcon from "@expo/vector-icons/FontAwesome";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";

const CommSubMenu = ({ items }) => {
  const { colors } = useTheme();

  const handleClick = (path) => {
    router.navigate(path);
  };
  return (
    <>
      {/* bottom sheets */}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          padding: 10,
        }}
      >
        <ScrollView horizontal contentContainerStyle={{justifyContent: 'center', flexDirection: 'row', flexGrow: 1}}>
            {items?.map((item) => (
              <TouchableOpacity
                onPress={() => handleClick(item.path)}
                style={{
                  alignItems: "center",
                  marginRight: 16,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.danger,
                    paddingHorizontal: 18,
                    paddingVertical: 15,
                    borderRadius: 2,
                    marginBottom: 7,
                  }}
                >
                  <AntDesignIcon
                    size={32}
                    color={COLORS.white}
                    name="rightcircle"
                  />
                </View>
                <Text
                  style={{
                    ...FONTS.font,
                    fontSize: 15,
                    color: colors.text,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CommSubMenu;
