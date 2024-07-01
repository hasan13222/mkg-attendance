import { images } from "@/assets";
import { Image, Text } from "react-native";
import { View } from "react-native";

const ProfileDetails = () => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          justifyContent: "flex-start",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{
              width: 80,
              height: 80,
              objectFit: "cover",
              borderRadius: 100,
            }}
            source={images.avatar1}
          />
        </View>

        {/* details */}
        <View>
          <Text style={{ fontSize: 20 }}>Mahtab Kamal</Text>
          <Text style={{ fontSize: 15 }}>Class Teacher</Text>
        </View>
      </View>
    </>
  );
};

export default ProfileDetails;
