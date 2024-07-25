import { ReportStyles } from "@/app/AttendanceReport";
import { Text, View } from "react-native";

const AccByDateReportCard = ({ data, index }) => {
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
            flex: 1,
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
            textAlign: "center"
          }}
        >
          {data.income}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...ReportStyles.tbodyItem,
            color: "#4f4c4c",
            fontWeight: "normal",
            textAlign: "right",
            paddingRight: 20,
          }}
        >
          {data.expense}
        </Text>
        
      </View>
    </>
  );
};

export default AccByDateReportCard;
