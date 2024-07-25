import { styles } from "@/app/(tabs)/Fees";
import { COLORS, FONTS } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const StudentDetails = () => {
    const {colors} = useTheme();
    return (
        <>
            <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                  paddingBottom: 4,
                  marginBottom: 4,
                }}
              >
                <Text style={{ ...FONTS.h6, color: colors.text }}>
                  Student Details
                </Text>
              </View>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "60%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Name: Md. Sabir Ali
                </Text>

                <Text
                  style={{
                    ...styles.listStyle,
                    width: "40%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Roll: 12
                </Text>

                <Text
                  style={{
                    ...styles.listStyle,
                    width: "60%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Gurdian: Eakub Ali
                </Text>
                <Text
                  style={{
                    ...styles.listStyle,
                    width: "40%",
                    ...FONTS.font,
                    ...FONTS.fontPoppins,
                    color: COLORS.text,
                  }}
                >
                  Class: Six
                </Text>
              </View>
        </>
    );
};

export default StudentDetails;