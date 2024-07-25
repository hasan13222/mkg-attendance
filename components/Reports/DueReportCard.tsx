import { ReportStyles } from "@/app/AttendanceReport";
import { Text, View } from "react-native";

const DueReportCard = ({ data, index }) => {
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
            flex: 0.7,
            paddingLeft: 15,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.roll}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...ReportStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.name}
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
          {data.due}
        </Text>
        
      </View>
    </>
  );
};

export default DueReportCard;
