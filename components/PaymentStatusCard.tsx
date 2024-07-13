import { Text } from "react-native";
import { View } from "react-native";

const PaymentStatusCard = ({ status }) => {
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
        <Text style={{ color: "white", fontWeight: "600" }}>May Fee</Text>
          <Text
            style={{
              color: "white",
              backgroundColor: status.toLowerCase() === "payment complete" ? "green" : "#af1712",
              borderRadius: 3,
              paddingHorizontal: 5,
              paddingVertical: 3,
            }}
          >
            {status}
          </Text>
          
        </View>

        {/* card body */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ color: "white" }}>Fee: 1000</Text>
          <Text style={{ color: "white" }}>Discount: 50</Text>
          <Text style={{ color: "white" }}>Paid: 500</Text>
          <Text style={{ color: "white" }}>Due: 500</Text>
        </View>
      </View>
    </>
  );
};

export default PaymentStatusCard;
