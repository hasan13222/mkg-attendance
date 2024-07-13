import Header from "@/components/Header";
import { COLORS, FONTS } from "@/constants/theme";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import RNPickerSelect from "react-native-picker-select";
import PaymentStatusCard from "@/components/PaymentStatusCard";
import BreadCrumb from "@/components/BreadCrumb";
import { useNavigation } from "@react-navigation/native";

const PaymentStatus = () => {
  const [feeValue, setFeeValue] = useState("All Fees");

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2",
          paddingTop: 30,
        }}
      >
        <Header
          paddingTop={0}
          paddingBottom={5}
          title={"Payment Status"}
          bgWhite
          leftIcon={"back"}
        />
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            {/* Search */}
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 10,
                marginBottom: 15,
                backgroundColor: "white",
                borderRadius: 8,
                marginTop: 12,
                shadowColor: "rgba(0,0,0,0.6)",
                shadowOpacity: 0.8,
                shadowOffset: {
                  width: 4,
                  height: 4,
                },
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <View
                style={{
                  borderColor: "#a2a1a6",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 8,
                  paddingLeft: 12,
                  position: "relative",
                  flexGrow: 1,
                }}
              >
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  style={{ placeholder: { color: "#424140" } }}
                  onValueChange={(value) => setFeeValue(value)}
                  items={[
                    { label: "First Term Exam Fee", value: "1" },
                    { label: "Final Exam Fee", value: "2" },
                    { label: "May Fee", value: "May Fee" },
                    { label: "All Fees", value: "All Fees" },
                  ]}
                />
                <AntDesign
                  style={{ position: "absolute", right: 15, top: 12 }}
                  name="caretdown"
                  size={13}
                  color={"#424140"}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  {
                    backgroundColor: "#AF1254",
                    paddingHorizontal: 13,
                    paddingVertical: 10,
                    borderRadius: 5,
                    alignItems: "center",
                  },
                ]}
              >
                <FeatherIcon name="search" size={22} color={COLORS.white} />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 15, marginTop: 0 }}>
              <PaymentStatusCard status="Payment Complete" />
              <PaymentStatusCard status="Partially Paid" />
              <PaymentStatusCard status="Payment Due" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PaymentStatus;
