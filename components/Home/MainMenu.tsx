import { dashboardSliderData } from "@/constants/dashboardSliderData";
import { COLORS, FONTS } from "@/constants/theme";
import FontawesomeIcon from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import CommSubMenu from "./CommSubMenu";
import { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { router } from "expo-router";

const MainMenu = () => {
  const { colors } = useTheme();
  const homeworkSubmenu = useRef();
  const SmsSubMenuRef = useRef();

  const handleMenuRoute = (item) => {
    if (item.title.toLowerCase() === "homework") {
      homeworkSubmenu.current.open();
      console.log(item.title.toLowerCase());
      return;
    }
    if (item.title.toLowerCase() === "sms") {
      SmsSubMenuRef.current.open();
      return;
    }
    router.navigate(item.path);
  };
  return (
    <>
      <ScrollView style={{height: 300}}>
        <View style={{ marginTop: 10, marginBottom: 80 }}>
          <Text style={{ fontSize: 18, color: colors.text, marginBottom: 10 }}>
            Main Menu
          </Text>
          {/* Menu */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {dashboardSliderData.map((item) => (
              <>
                {item.title.toLowerCase() === "homework" && (
                  <RBSheet
                    ref={homeworkSubmenu}
                    closeOnDragDown={true}
                    openDuration={200}
                    height={150}
                    customStyles={RBSheetStyles}
                  >
                    <CommSubMenu items={item.submenu} />
                  </RBSheet>
                )}
                {item.title.toLowerCase() === "sms" && (
                  <RBSheet
                    ref={SmsSubMenuRef}
                    closeOnDragDown={true}
                    openDuration={200}
                    height={150}
                    customStyles={RBSheetStyles}
                  >
                    <CommSubMenu items={item.submenu} />
                  </RBSheet>
                )}
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleMenuRoute(item)}
                  style={{
                    alignItems: "center",
                    marginBottom: 15,
                    width: "25%",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.card,
                      paddingHorizontal: 18,
                      paddingVertical: 15,
                      borderRadius: 2,
                      marginBottom: 7,
                    }}
                  >
                    <FontawesomeIcon
                      size={32}
                      color={COLORS.danger}
                      name={item?.iconName}
                    />
                  </View>
                  <Text
                    numberOfLines={2}
                    style={{
                      ...FONTS.font,
                      fontSize: 15,
                      color: colors.text,
                      textAlign: "center",
                    }}
                  >
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const RBSheetStyles = {
  wrapper: {
    backgroundColor: "rgba(0,0,0,.3)",
  },
  container: {
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default MainMenu;
