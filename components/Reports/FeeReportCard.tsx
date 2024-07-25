import { ReportStyles } from "@/app/AttendanceReport";
import { Text, View } from "react-native";

const FeeReportCard = ({ data, index }) => {
  return (
    <>
      <View
        key={index}
        style={{
          flex: 1,
          alignSelf: "stretch",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            ...ReportStyles.tbodyItem,
            flex: 1.5,
            paddingLeft: 13,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.date}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...ReportStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.fee_count}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...ReportStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
            textAlign: "right",
            paddingRight: 15,
          }}
        >
          {data.amount}
        </Text>
        
      </View>
    </>
  );
};

export default FeeReportCard;
