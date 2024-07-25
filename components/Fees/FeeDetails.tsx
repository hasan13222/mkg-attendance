import { styles } from "@/app/(tabs)/Fees";
import { COLORS, FONTS } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const FeeDetails = () => {
    const {colors} = useTheme();
    return (
        <>
            <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                  paddingBottom: 4,
                  marginBottom: 2,
                  marginTop: 10,
                }}
              >
                <Text style={{ ...FONTS.h6, color: colors.text }}>
                  Fee Details
                </Text>
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Total: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Discount: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Due: 345
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "50%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Net Total: 345
                </Text>
              </View>
        </>
    );
};

export default FeeDetails;