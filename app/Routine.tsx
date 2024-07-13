import Header from "@/components/Header";
import { COLORS } from "@/constants/theme";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const ClassRoutine = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
      }}
    >
      <View style={{ marginTop: 30 }}>
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Class Routine"}
          bgWhite
          leftIcon={"back"}
        />

        <ScrollView style={{ padding: 5 }}>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 12,
            }}
          >
            Class Six
          </Text>
          {/* leave application form */}
          <View
            style={{
              gap: 15,
              shadowColor: "rgba(0,0,0,0.6)",
              shadowOpacity: 0.8,
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowRadius: 4.65,
              elevation: 8,
              margin: 10,
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <View style={{ position: "absolute", left: 12, top: 15 }}>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                WeekDays
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                Saturday
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                Saturday
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                Saturday
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                Saturday
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                }}
              >
                Saturday
              </Text>
              <Text
                style={{
                  ...tableStyles.cell,
                  borderBottomWidth: 1,
                }}
              >
                Saturday
              </Text>
            </View>
            <ScrollView horizontal style={{ marginLeft: 92 }}>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  10:00 - 11:00
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                  }}
                >
                  Bangla
                </Text>
                <Text
                  style={{
                    ...tableStyles.cell,
                    borderRightWidth: 1,
                    borderBottomWidth: 1
                  }}
                >
                  Bangla
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const tableStyles = StyleSheet.create({
  cell: {
    textAlign: "center",
    color: "#40393b",
    borderColor: "#d0d89c",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 2
  },
});

export default ClassRoutine;
