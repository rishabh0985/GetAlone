import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Image3 from "../../assets/images/Image3.png";
import Image1 from "../../assets/images/Image1.png";
import { useRouter } from "expo-router";

const indianCollegesList = [
  "Indian Institute of Technology Bombay",
  "Indian Institute of Technology Delhi",
  "Indian Institute of Technology Kanpur",
  // Add other colleges...
];
const courseList = ["B'Tech", "BSC", "BCA", "BBA", "BCOM"];
const departmentList = [
  "Civil Engineering",
  "Computer Science Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
];
const semesterList = [
  "1st Sem",
  "2nd Sem",
  "3rd Sem",
  "4th Sem",
  "5th Sem",
  "6th Sem",
  "7th Sem",
  "8th Sem",
];

const InformationTab = () => {
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPicker, setCurrentPicker] = useState("");
  const [options, setOptions] = useState([]);
  const router = useRouter();

  const handlePickerChange = (value) => {
    if (currentPicker === "Semester") setSemester(value);
    if (currentPicker === "Course") setCourse(value);
    if (currentPicker === "Department") setDepartment(value);
    if (currentPicker === "College") setSelectedCollege(value);
    setModalVisible(false);
  };

  const openPicker = (pickerType) => {
    setCurrentPicker(pickerType);
    if (pickerType === "Semester") setOptions(semesterList);
    if (pickerType === "Course") setOptions(courseList);
    if (pickerType === "Department") setOptions(departmentList);
    if (pickerType === "College") setOptions(indianCollegesList);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={{ flex: "1" }}>
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <Image source={Image3} />
          <Image source={Image1} />
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{
                color: "black",
                padding: 10,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Semester
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                borderColor: "#888888",
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: "center",
                paddingLeft: 10,
                marginTop: 5,
              }}
              onPress={() => openPicker("Semester")}
            >
              <Text>{semester || "Select"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "black",
                padding: 10,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Course
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                borderColor: "#888888",
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: "center",
                paddingLeft: 10,
                marginTop: 5,
              }}
              onPress={() => openPicker("Course")}
            >
              <Text>{course || "Select"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "black",
                padding: 10,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Department
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                borderColor: "#888888",
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: "center",
                paddingLeft: 10,
                marginTop: 5,
              }}
              onPress={() => openPicker("Department")}
            >
              <Text>{department || "Select"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "black",
                padding: 10,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              College
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                borderColor: "#888888",
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: "center",
                paddingLeft: 10,
                marginTop: 5,
              }}
              onPress={() => openPicker("College")}
            >
              <Text>{selectedCollege || "Select"}</Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Link
              href="../authtication/profilePicture"
              style={{ color: "#4d7883", fontWeight: "bold" }}
            >
              Sign up
            </Link>
          </View> */}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
            }}
          >
            <TouchableOpacity>
              <Link
                href="../authtication/profilePicture"
                style={{
                  width: 218,
                  backgroundColor: "#4D7883",
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: "12px",
                  paddingHorizontal: "12px",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#FEFEFF" }}>Next</Text>
                </View>
              </Link>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                gap: "4px",
                // alignItems: "center",
                justifyContent: "center",
                // marginTop: "10px",
              }}
            >
              <Text style={{ color: "#686868", fontSize: "14px" }}>
                Already have an account?
              </Text>
              <Link href="../authtication/Email">
                <TouchableOpacity>
                  <Text style={{ color: "#4D7883" }}>Login In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 20,
              }}
            >
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#ccc",
                    }}
                    onPress={() => handlePickerChange(item)}
                  >
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#888888",
                  borderRadius: 10,
                  alignItems: "center",
                  marginTop: 10,
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default InformationTab;
