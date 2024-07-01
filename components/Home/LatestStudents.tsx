import { latestStudents } from "@/constants/dashboardStudents";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import StudentCard from "../StudentCard";
import { useTheme } from "@react-navigation/native";

const LatestStudents = () => {
  const { colors } = useTheme();
  return (
    <>
      <Text style={{ fontSize: 18, color: colors.text, marginBottom: 10 }}>
        Latest Students
      </Text>
      <ScrollView horizontal>
        {latestStudents.map((item) => (
          <StudentCard item={item} />
        ))}
      </ScrollView>
    </>
  );
};

export default LatestStudents;
