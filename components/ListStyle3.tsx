import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { FONTS } from "./../constants/theme";

const ListStyle3 = ({date, text, type}) => {
  const { colors } = useTheme();
  return (
    <>
      <View style={[styles.listStyle, { borderColor: colors.border }]}>
        <View
          style={{
            marginRight: 7,
            backgroundColor: "#af12a2",
            padding: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {date}
          </Text>
        </View>

        <Text
          style={{
            ...FONTS.font,
            ...FONTS.fontPoppins,
            color: colors.text,
            flex: 1,
          }}
        >
          {text}
        </Text>

        <Text style={{backgroundColor: '#a2af12',overflow: 'hidden', width: 80, textAlign: 'center', color: 'white', padding: 5, borderRadius: 5}}>{type}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  listStyle: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ListStyle3;
