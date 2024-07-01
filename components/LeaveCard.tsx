import { Text } from "react-native";
import { View } from "react-native";

const LeaveCard = ({ item }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#a2af12",
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 15,
          width: "100%",
        }}
      >
        {/* card heading */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "white",
              backgroundColor: "#af1712",
              borderRadius: 3,
              paddingHorizontal: 5,
              paddingVertical: 3,
            }}
          >
            Pending
          </Text>
          <Text style={{ color: "white", fontWeight: "600" }}>From - To</Text>
        </View>

        {/* card body */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          {/* student adn reason */}
          <View>
            <Text style={{ color: "white" }}>{item?.childVal}</Text>
            <Text style={{ color: "white" }}>{item?.reason}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>{item?.startDate}</Text>
            <Text style={{ color: "white" }}>{item?.endDate}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LeaveCard;
