import Header from "@/components/Header";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const Notice = () => {
  const { colors } = useTheme();
  return (
    <>
      <SafeAreaView style={{paddingTop: 30,backgroundColor: "#f2f2f2",}}>
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Notice Board"}
          bgWhite
          leftIcon={"back"}
        />
        <ScrollView
          style={{
            minHeight: "100%",
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          <View>
            {/* notice title*/}
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.text,
                  marginTop: 10,
                  paddingLeft: 15,
                }}
              >
                Notice List
              </Text>
            </View>

            {/* notices */}
            <ScrollView
              style={[
                styles.card,
                {
                  backgroundColor: "#fff",
                  maxHeight: "85%"
                },
              ]}
            >
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
              <View style={[styles.listStyle, { borderColor: colors.border }]}>
                <Text
                  style={{
                    backgroundColor: "#a2af12",
                    width: 100,
                    textAlign: "center",
                    color: "white",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  16 June, 2024
                </Text>
                <Text>
                  On the Occasion of Eid-ul-Adha, Our Class will close from 20
                  June, 2024 to 30 June, 2024
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    borderRadius: 7,
    margin: 15,
    marginTop: 0,
    shadowColor: "rgba(0,0,0,0.8)",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4.65,
    elevation: 8,
  },
  listStyle: {
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});

export default Notice;
