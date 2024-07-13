import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const AddStudent = () => {
  const { colors } = useTheme();
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gurdianName, setGurdianName] = useState("");
  const [relationWithGurdian, setRelationWithGurdian] = useState("");
  const [gurdianPhoneNumber, setGurdianPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    alert("Student Added successfully");
    return;
  };
  return (
    <>
      <SafeAreaView style={{paddingTop: 30,backgroundColor: "#f2f2f2",}}>
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Add Student"}
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
          {/* add student form */}
          <View>
            {/* <Text
              style={{
                fontSize: 20,
                color: colors.text,
                marginTop: 10,
                paddingLeft: 10,
              }}
            >
              Add Student
            </Text> */}

            <View
              style={[
                styles.card,
                {
                  backgroundColor: "#fff",
                  paddingVertical: 15,
                  marginTop: 10,
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
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setStudentName(value)}
                placeholder="Student Name"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setFatherName(value)}
                placeholder="Father Name"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setMotherName(value)}
                placeholder="Mother Name"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setGurdianName(value)}
                placeholder="Gurdian Name"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setRelationWithGurdian(value)}
                placeholder="Relation with Gurdian"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setGurdianPhoneNumber(value)}
                placeholder="Gurdian Phone Number"
              />
              <TextInput
                style={{
                  borderColor: "#a2a1a6",
                  padding: 8,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 3,
                  width: "100%",
                  marginBottom: 15,
                }}
                placeholderTextColor={"#424140"}
                onChangeText={(value) => setAddress(value)}
                placeholder="Address"
              />
              <CustomButton title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
export default AddStudent;
