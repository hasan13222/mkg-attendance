import { HomeStyles } from "@/app/(tabs)";
import { COLORS, FONTS } from "@/constants/theme";
import Fontawesome6Icon from "@expo/vector-icons/FontAwesome6";
import { Text } from "react-native";
import { View } from "react-native";

const ReportCards = () => {
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
                height: 35,
                width: 35,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <Fontawesome6Icon size={16} color={COLORS.white} name="hand-holding-dollar" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Total Income</Text>
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
              20200
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
                height: 35,
                width: 35,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <Fontawesome6Icon size={16} color={COLORS.white} name="money-bills" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Total Expense</Text>
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
              15000
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 5, flexDirection: "row", gap: 10 }}>
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
                height: 35,
                width: 35,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <Fontawesome6Icon size={16} color={COLORS.white} name="money-bill-transfer" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Total Fees</Text>
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
              10500
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
                height: 35,
                width: 35,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                opacity: 0.35,
              }}
            />
            <View style={{ position: "absolute" }}>
              <Fontawesome6Icon size={16} color={COLORS.white} name="money-check-dollar" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Total Due</Text>
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
              10500
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ReportCards;
