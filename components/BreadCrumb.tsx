import { Link } from "expo-router";
import { Text, View } from "react-native";
import FontawsomeIcon from "react-native-vector-icons/FontAwesome";

const BreadCrumb = ({ items }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          alignItems: "center",
          gap: 10,
        }}
      >
        {items?.map((item, index) => {
          return (
            <>
              {index > 0 && (
                <Text style={{ fontSize: 16, color: "#b46666", paddingTop: 2 }}>
                  <FontawsomeIcon name="angle-right" size={16} />
                </Text>
              )}
              <Link href={`/${item.route}`}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#b46666",
                    textTransform: "capitalize",
                  }}
                >
                  {item.routeName}
                </Text>
              </Link>
            </>
          );
        })}
      </View>
    </>
  );
};

export default BreadCrumb;
