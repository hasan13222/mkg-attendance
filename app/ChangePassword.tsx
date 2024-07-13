import Header from "@/components/Header";
import { COLORS, SIZES } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "./../constants/theme";
import { images } from "@/assets";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const ChangePassword = () => {
  const { colors } = useTheme();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const handleSubmit = () => {
    if(!oldPassword){
      alert("Please enter old password");
      return;
    }
    if(!newPassword){
      alert("Please enter new password");
      return;
    }
    if(!confirmPassword){
      alert("Please enter confirmation password");
      return;
    }
    alert("Password has been changed successfully")
    return;
  }
  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
        }}
      >
      <Header
        paddingTop={0}
        paddingBottom={5}
        title={"Change Password"}
        bgWhite
        leftIcon={"back"}
      />
      <ScrollView
        style={{
          padding: 5,
          minHeight: "100%",
          backgroundColor: "transparent",
        }}
      >
        {/* Account information */}
        <View>
          <Text
            style={{
              fontSize: 20,
              color: colors.text,
              marginTop: 0,
              paddingLeft: 15,
            }}
          >
            Account information
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: "#fff",
                marginTop: 10
              },
            ]}
          >
            <View style={[styles.listStyle, { borderColor: colors.border }]}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "cover",
                  borderRadius: 100,
                }}
                source={images.avatar1}
              />
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontPoppins,
                  color: colors.text,
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                Md. Hakim Ali
              </Text>
            </View>
            <View style={[styles.listStyle, { borderColor: colors.border }]}>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontPoppins,
                  color: colors.text,
                  flex: 1,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Email: </Text>
                parent@demo.com
              </Text>
            </View>
            <View style={[styles.listStyle, { borderColor: colors.border }]}>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontPoppins,
                  color: colors.text,
                  flex: 1,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Phone: </Text>
                01849725485
              </Text>
            </View>
            <View style={[styles.listStyle, { borderColor: "transparent" }]}>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontPoppins,
                  color: colors.text,
                  flex: 1,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Address: </Text>
                Dhanmondi, Dhaka, Bangladesh.
              </Text>
            </View>
          </View>
        </View>

        {/* chnage password form */}
        <View>
          <Text
            style={{
              fontSize: 20,
              color: colors.text,
              marginTop: 0,
              paddingLeft: 15,
            }}
          >
            Change Password
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: "#fff",
                paddingVertical: 15,
                marginTop: 10
              },
            ]}
          >
            <TextInput
              style={{
                borderColor: "#a2a1a6",
                padding: 8,
                paddingLeft: 10,
                borderWidth: 1,
                borderRadius: 3,
                width: "100%",
                marginBottom: 15
              }}
              placeholderTextColor={"#424140"}
              onChangeText={(value) => setOldPassword(value)}
              placeholder="Old Password"
            />
            <TextInput
              style={{
                borderColor: "#a2a1a6",
                padding: 8,
                paddingLeft: 10,
                borderWidth: 1,
                borderRadius: 3,
                width: "100%",
                marginBottom: 15
              }}
              placeholderTextColor={"#424140"}
              onChangeText={(value) => setNewPassword(value)}
              placeholder="New Password"
            />
            <TextInput
              style={{
                borderColor: "#a2a1a6",
                padding: 8,
                paddingLeft: 10,
                borderWidth: 1,
                borderRadius: 3,
                width: "100%",
                marginBottom: 15
              }}
              placeholderTextColor={"#424140"}
              onChangeText={(value) => setConfirmPassword(value)}
              placeholder="Confirm New Password"
            />
            <CustomButton title="Submit" onPress={handleSubmit} />
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    borderRadius: 7,
    margin: 15,
    marginTop: 0,
    shadowColor: "rgba(0,0,0,0.8)",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4.65,
    elevation: 8,
  },
  listStyle: {
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});

export default ChangePassword;
