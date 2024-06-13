import React, { useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Collapsible from "react-native-collapsible";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GlobalStyleSheet } from "@/constants/StyleSheet";
import { COLORS, SIZES } from "@/constants/theme";
import ListStyle1 from "@/components/ListStyle1";

import FeatherIcon from "react-native-vector-icons/Feather";
import Header from "@/components/Header";
import {
  DrawerLayout,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Link } from "expo-router";
import HeaderMenu from "@/components/HeaderMenu";
import DrawerMenu from "@/components/DrawerMenu";

const Classes = () => {
  const { colors } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.card,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
          }}
        >
          <Header paddingTop={30} paddingBottom={5} title={"Classes"} bgWhite leftIcon={"back"}/>
          

          {/* <TouchableOpacity
                onPress={() => drawerProps.navigation.openDrawer()}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FeatherIcon color={colors.text} name="menu" size={18} />
              </TouchableOpacity> */}

          <ScrollView>
            <View style={GlobalStyleSheet.container}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    paddingVertical: 0,
                  },
                ]}
              >
                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed(!isCollapsed)}
                    icon={
                      <FontAwesome
                        name={"building"}
                        size={15}
                        color={COLORS.red}
                      />
                    }
                    title={"Class Two"}
                  />
                  <Collapsible collapsed={isCollapsed}>
                    <View style={{ paddingLeft: 20 }}>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>

                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                    </View>
                  </Collapsible>
                </View>

                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed2(!isCollapsed2)}
                    icon={
                      <FontAwesome
                        name={"building"}
                        size={15}
                        color={COLORS.red}
                      />
                    }
                    title={"Class One"}
                  />
                  <Collapsible collapsed={isCollapsed2}>
                    <View style={{ paddingLeft: 20 }}>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                    </View>
                  </Collapsible>
                </View>

                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed3(!isCollapsed3)}
                    icon={
                      <FontAwesome
                        name={"building"}
                        size={15}
                        color={COLORS.red}
                      />
                    }
                    title={"Class Three"}
                  />
                  <Collapsible collapsed={isCollapsed3}>
                    <View style={{ paddingLeft: 20 }}>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                    </View>
                  </Collapsible>
                </View>

                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed4(!isCollapsed4)}
                    icon={
                      <FontAwesome
                        name={"building"}
                        size={15}
                        color={COLORS.red}
                      />
                    }
                    title={"Class Four"}
                  />
                  <Collapsible collapsed={isCollapsed4}>
                    <View style={{ paddingLeft: 20 }}>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                    </View>
                  </Collapsible>
                </View>

                <View>
                  <ListStyle1
                    arrowDown
                    onPress={() => setIsCollapsed5(!isCollapsed5)}
                    icon={
                      <FontAwesome
                        name={"building"}
                        size={15}
                        color={COLORS.red}
                      />
                    }
                    title={"Class Five 12"}
                  />
                  <Collapsible collapsed={isCollapsed5}>
                    <View style={{ paddingLeft: 20 }}>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                      <Link href={"/Students"} asChild>
                        <ListStyle1
                          arrowRight
                          icon={
                            <FontAwesome
                              name={"book"}
                              size={15}
                              color={"#3b5998"}
                            />
                          }
                          title={"Physics"}
                        />
                      </Link>
                    </View>
                  </Collapsible>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    shadowColor: "rgba(0,0,0,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  listStyle: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Classes;
