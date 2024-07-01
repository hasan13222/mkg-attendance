import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { COLORS, FONTS } from "@/constants/theme";
import { useRef, useState } from "react";

const HomeWorkCard = () => {
  const [autoFoucus, setAutoFoucus] = useState(false);
  const [status, setStatus] = useState("upcoming");
  const [homeWork, setHomeWork] = useState("");
  const [editable, setEditable] = useState(true);

  const handleAddHomeWork = () => {
    if (!homeWork) {
      alert("Please add home work details");
      return;
    }
    if (editable) {
      setStatus("added");
      setEditable(false);
    } else {
      setAutoFoucus(true);
      setEditable(true);
    }
  };
  const handleDeleteHomeWork = () => {
    setHomeWork("");
    setStatus("upcoming");
    setEditable(true);
    setAutoFoucus(false);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: "#af12a2",
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 15,
          width: "100%",
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              fontSize: 15,
              color: "white",
              position: "absolute",
              left: -45,
              bottom: 35,
              height: 30,
              width: 100,
              overflow: "hidden",
              fontWeight: "700",
              transform: [{ rotate: "-90deg" }],
              verticalAlign: "middle",
              textAlign: "center",
            }}
          >
            {status === "upcoming" ? "🚒 Upcoming" : "✅ Added"}
          </Text>
          <View
            style={{
              borderLeftColor: COLORS.light,
              borderLeftWidth: 1,
              paddingLeft: 10,
              marginLeft: 20,
            }}
          >
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Text
                style={{
                  ...FONTS.font,
                  fontSize: 15,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Class: Six
              </Text>
              <Text
                style={{
                  ...FONTS.font,
                  fontSize: 15,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Subject: Bangla
              </Text>
            </View>

            <View style={{paddingTop: 3}}>
              {editable && (
                <TextInput
                  autoFocus={autoFoucus}
                  value={homeWork}
                  onChangeText={(value) => setHomeWork(value)}
                  multiline={true}
                  placeholderTextColor="white"
                  numberOfLines={3}
                  style={{
                    color: "white",
                    textAlignVertical: "top",
                    borderColor: `${
                      status === "added" ? "#c984b6" : "transparent"
                    }`,
                    padding: status === "added" ? 5 : 0,
                    borderWidth: 1,
                    borderRadius: 3,
                    marginBottom: 5,
                  }}
                  placeholder="Please Write Here Your Home Work Details"
                />
              )}
              {!editable && (
                <Text
                  numberOfLines={3}
                  style={{
                    color: "white",
                    textAlignVertical: "top",
                    height: 50,
                  }}
                >
                  {homeWork}
                </Text>
              )}
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                gap: 10,
              }}
            >
              {status === "upcoming" && (
                <TouchableOpacity
                  onPress={handleAddHomeWork}
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 3,
                  }}
                >
                  <Text style={{ color: "#af12a2" }}>Add</Text>
                </TouchableOpacity>
              )}

              {status === "added" && (
                <TouchableOpacity
                  onPress={handleAddHomeWork}
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 3,
                  }}
                >
                  <Text style={{ color: "#af12a2" }}>Edit</Text>
                </TouchableOpacity>
              )}
              {status === "added" && (
                <TouchableOpacity
                  onPress={handleDeleteHomeWork}
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 3,
                  }}
                >
                  <Text style={{ color: "#af12a2" }}>Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeWorkCard;
