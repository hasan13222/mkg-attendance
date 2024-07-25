import { RootState } from "@/redux/reducer";
import { setAccByMonthVisible } from "@/redux/reducer/reportSlice";

import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import { useState } from "react";
import { COLORS } from "@/constants/theme";
import { router } from "expo-router";
import RNPickerSelect from "react-native-picker-select";

const AccByMonthModal = () => {
  const [year, setYear] = useState("");

  const { accByMonthVisible } = useSelector(
    (state: RootState) => state.reportSlice
  );
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!year) {
      alert("Please select a year");
      return;
    }

    router.navigate("/AccReportByMonth");
    router.setParams({ year });
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={accByMonthVisible}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "relative",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => dispatch(setAccByMonthVisible())}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
        </View>
        {/* fees search form */}
        <View
          style={{
            gap: 15,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            paddingTop: 0,
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: 5,
            elevation: 7,
            shadowOpacity: 3,
            shadowRadius: 5,
          }}
        >
          {/* select year */}
          <View>
            <Text style={{ fontSize: 18, paddingVertical: 10 }}>
              Select Year
            </Text>
            <View
              style={{
                borderColor: COLORS.darkBg,
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => setYear(value)}
                items={[
                  { label: "2012", value: "2012" },
                  { label: "2011", value: "2011" },
                ]}
              />
            </View>
          </View>

          <View style={{ marginTop: 5 }}>
            <CustomButton onPress={handleSearch} title={"Search"} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AccByMonthModal;
