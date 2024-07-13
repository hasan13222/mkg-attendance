import { StudentStyles } from "@/app/Students";
import { images } from "@/assets";
import { Image, Text, View } from "react-native";

const StudentListCard = ({ data, index }) => {
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
            ...StudentStyles.tbodyItem,
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
            ...StudentStyles.tbodyItem,
            color: "#4f4c4c",
            flex: 1.2,
            fontWeight: "normal",
          }}
        >
          {data.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...StudentStyles.tbodyItem,
            flex: 0.7,
            color: "#4f4c4c",
            fontWeight: "normal",
          }}
        >
          {data.section}
        </Text>
        <View
          style={{
            ...StudentStyles.tbodyItem,
            flex: 0.5,
          }}
        >
          <Image
            source={images.avatar1}
            style={{
              width: 30,
              height: 30,
              objectFit: "cover",
              borderRadius: 100,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default StudentListCard;
