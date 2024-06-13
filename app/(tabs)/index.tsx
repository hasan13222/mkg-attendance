import React, { useRef } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { dashboardSliderData } from "./../../constants/dashboardSliderData";
import CardStyle4 from "@/components/CardStyle4";
import {
  DrawerLayout,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import DrawerMenu from "@/components/DrawerMenu";
import { useTheme } from "@react-navigation/native";
import HeaderMenu from "@/components/HeaderMenu";
import { TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "@/constants/theme";
import FontawesomeIcon from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import SignIn from "@/components/login";

const Home = (drawerProps) => {
  const drawerRef = useRef();
  const { colors } = useTheme();

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={{
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <View
            style={{
              backgroundColor: colors.card,
              paddingHorizontal: 18,
              paddingVertical: 15,
              borderRadius: 35,
              marginBottom: 7,
            }}
          >
            <FontawesomeIcon
              size={40}
              color={COLORS.danger}
              name={item.iconName}
            />
          </View>
          <Text style={{ ...FONTS.font, fontSize: 15, color: colors.text }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </>
    );
  };


    return (
      <>
        {/* <StatusBar
        backgroundColor={colors.card}
        barStyle={"dark-content"}
      /> */}
        <GestureHandlerRootView>
          <DrawerLayout
            ref={drawerRef}
            drawerWidth={280}
            drawerPosition={DrawerLayout.positions.Left}
            drawerType="front"
            drawerBackgroundColor="#ddd"
            renderNavigationView={() => <DrawerMenu drawerProps={drawerProps} drawer={drawerRef} />}
          >
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: "rgba(248,92,111,.05)",
              }}
            >
              <HeaderMenu drawerProps={drawerProps} title="Home" />
              <ScrollView>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingLeft: 15,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }}
                  data={dashboardSliderData}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItem}
                />
              </ScrollView>
            </SafeAreaView>
          </DrawerLayout>
        </GestureHandlerRootView>
      </>
    );
  
};

export default Home;
