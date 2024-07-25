import { HomeStyles } from "@/app/(tabs)";
import { COLORS, FONTS } from "@/constants/theme";
import FoundationIcon from "@expo/vector-icons/Foundation";
import FontawesomeIcon from "@expo/vector-icons/FontAwesome";
import { Text } from "react-native";
import { View } from "react-native";

const DashboardCards = () => {
  return (
    <>
      <View style={{ marginVertical: 15, flexDirection: "row", gap: 10 }}>
        {/* card item */}
        <View style={HomeStyles.cardStyle}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 30,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <FontawesomeIcon size={25} color={COLORS.white} name="group" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Students</Text>
            <Text
              numberOfLines={1}
              style={[
                FONTS.h6,
                {
                  lineHeight: 16,
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 4,
                },
              ]}
            >
              202
            </Text>
          </View>
        </View>

        {/* card item */}
        <View style={HomeStyles.cardStyle}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 30,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <FoundationIcon size={25} color={COLORS.white} name="graph-bar" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Attendance</Text>
            <Text
              numberOfLines={1}
              style={[
                FONTS.h6,
                {
                  lineHeight: 16,
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 4,
                },
              ]}
            >
              60%
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DashboardCards;
