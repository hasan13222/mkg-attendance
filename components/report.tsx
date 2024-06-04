import { Text, View } from "react-native";
import { ReportStyles } from '../app/Reports';

const Report = ({ data, index }) => {
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
            flex: 0.4,
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
            flex: 1.5,
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
          }}
        >
          {data.present}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...ReportStyles.tbodyItem,
            color: "#4f4c4c",
            flex: 0.5,
            fontWeight: "normal",
          }}
        >
          {data.absent}
        </Text>
      </View>
    </>
  );
};

export default Report;
