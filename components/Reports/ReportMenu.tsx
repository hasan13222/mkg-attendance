
import { COLORS, FONTS } from "@/constants/theme";
import Fontawesome6Icon from "@expo/vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { router } from "expo-router";
import { reportMenuData } from './../../constants/reportMenus';
import { useDispatch, useSelector } from "react-redux";
import { setAccByDateModalVisible, setAccByMonthVisible, setAttendanceModalVisible, setDueModalVisible, setFeesModalVisible } from "@/redux/reducer/reportSlice";
import { RootState } from "@/redux/reducer";

const ReportMenu = () => {
  const { colors } = useTheme();
//   const [feesModalVisible, setFeesModalVisible] = useState(false);
//   const homeworkSubmenu = useRef();
const { feesModalVisible } = useSelector(
    (state: RootState) => state.reportSlice
  );
  const dispatch = useDispatch();

  const handleMenuRoute = (item) => {
    // if (item.title.toLowerCase() === "homework") {
    //   homeworkSubmenu.current.open();
    //   console.log(item.title.toLowerCase())
    //   return;
    // }

    if (item.title.toLowerCase() === "fees report") {
        dispatch(setFeesModalVisible())
    }
    if (item.title.toLowerCase() === "attendance report") {
        dispatch(setAttendanceModalVisible())
    }
    if (item.title.toLowerCase() === "due report") {
        dispatch(setDueModalVisible())
    }
    if (item.title.toLowerCase() === "date wise income-expense") {
        dispatch(setAccByDateModalVisible())
    }
    if (item.title.toLowerCase() === "yearly income-expense") {
        dispatch(setAccByMonthVisible())
    }
    // router.navigate(item.path);
  };
  return (
    <>
      <View style={{ marginTop: 10, marginBottom: 80 }}>
        {/* <Text style={{ fontSize: 18, color: colors.text, marginBottom: 10 }}>
          Main Menu
        </Text> */}
        {/* Menu */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {reportMenuData.map((item) => (
            <>
              {/* {item.title.toLowerCase() === "homework" && (
                <RBSheet
                  ref={homeworkSubmenu}
                  closeOnDragDown={true}
                  openDuration={200}
                  height={150}
                  customStyles={RBSheetStyles}
                >
                  <CommSubMenu items={item.submenu} />
                </RBSheet>
              )} */}
              
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
                  <Fontawesome6Icon
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

export default ReportMenu;
