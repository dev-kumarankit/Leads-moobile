import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import {
  Foundation,
  FontAwesome5,
  Ionicons,
  Entypo,
  Feather,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import CustomInput from "../component/CustomInput";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../component/CustomButton";
import { postAddUser } from "../../Store/reducer/users/getAllUserSlice";
import { BOX, PADDING2 } from "../../style/theme";
import androidNotification from "../component/androidNotification.js";
import LinearGrad from "../component/LinearGrad";
import BackBtn from "../component/BackBtn";
export default function AddUser({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [dropdown, setDropdown] = useState("2");
  const [selected, setSelected] = useState([]);
  const [selectedManager, setSelectedManager] = useState("1");
  // console.log(dropdown, "dropdown");
  const dataRole = [
    { label: "Admin", value: "2" },
    { label: "Manager/Lead", value: "3" },
  ];
  const dataChannel = [
    { label: "Seasia", value: "1" },
    { label: "Woosper", value: "2" },
    { label: "Bugraptors", value: "3" },
    { label: "Moogle", value: "4" },
    { label: "Cerebrum", value: "5" },
  ];

  const SubmitBtn = () => {
    const formData = {
      email: email,
      name: name,
      password: password,
      phone_number: phoneNumber,
      role_id: dropdown,
    };
    // setSubmit(true);
    setFormError(formValidation(formData));
    let arr1 = [];

    if (dropdown == 2) {
      let data = {
        channel_id: selected,
      };
      if (formError) {
        // console.log("dispatch post add user");
        // dispatch(postAddUser(data));
      }
    } else {
      arr1.push(selectedManager);
      let data = {
        channel_id: arr1,
      };
      if (formError) {
        // console.log("dispatch postAddUser");
        // dispatch(postAddUser(data));
      }
      // dispatch(postAddUser(data));
    }
  };
  useEffect(() => {
    formError;
  }, [formError]);

  const formValidation = (data) => {
    const dataObj = {};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // console.log(data.name.length < 2, "data.name");
    if (data.name.length < 2) {
      dataObj.name = "Name is required";
      androidNotification(dataObj.name);
      return false;
    }

    if (reg.test(data.email) === false || data.email.length < 8) {
      dataObj.email = "E-mail is required";
      androidNotification(dataObj.email);
      return false;
    }
    if (data.phone_number.length < 10 || data.phone_number.length > 14) {
      dataObj.phoneNumber = "Please Enter the Correct Phone Number";
      androidNotification(dataObj.phoneNumber);
      return false;
    }
    if (data.password.length < 8) {
      dataObj.password = "Please Enter the password More than 8";
      androidNotification(dataObj.password);
      return false;
    }
    return dataObj;
  };

  const _renderItem = (item, x) => {
    return (
      <>
        {x == item.value ? (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            <Foundation name="check" size={18} color="black" />
          </View>
        ) : (
          <Text style={styles.textItem}>{item.label}</Text>
        )}
      </>
    );
  };
  const _renderItemMulti = (item, x) => {
    // console.log(item, "value x");
    return <Text style={styles.textItem}>{item.label}</Text>;
  };
  return (
    <View style={{ flex: 1 }}>
      <LinearGrad start={{ x: 0, y: 1 }} color={["#711AFF", "#46FFBC"]}>
        <ScrollView>
          <BackBtn
            text="Add User"
            navigation={navigation}
            paddingTop={20}
            paddingBottom={5}
          />
          <View style={[BOX, { padding: 15, marginBottom: 5 }]}>
            <CustomInput
              placeholder="Full Name"
              value={name}
              setValue={setName}
              marginBottom={20}
              icon={
                <Ionicons name="person-add-sharp" size={18} color="#bcbcbc" />
              }
            />
            <CustomInput
              placeholder="Email"
              value={email}
              setValue={setEmail}
              marginBottom={20}
              icon={<Entypo name="email" size={18} color="#bcbcbc" />}
            />
            <CustomInput
              placeholder="Phone No"
              value={phoneNumber}
              setValue={setPhoneNumber}
              ktype="true"
              marginBottom={20}
              icon={<Feather name="phone" size={18} color="#bcbcbc" />}
            />
            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={dataRole}
              search={false}
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select item"
              value={dropdown}
              onChange={(item) => {
                setDropdown(item.value);
              }}
              renderLeftIcon={() => (
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <FontAwesome5 name="user-check" size={18} color="#bcbcbc" />
                </View>
              )}
              renderItem={(item) => _renderItem(item, dropdown)}
              textError="Error"
            />

            {dropdown == 2 ? (
              <MultiSelect
                style={styles.dropdown}
                data={dataChannel}
                labelField="label"
                valueField="value"
                label="Multi Select"
                placeholder="Select multiple leads"
                search={false}
                value={selected}
                activeColor={"#a7a7a794"}
                alwaysRenderSelectedItem
                dropdownPosition={"bottom"}
                onChange={(item) => {
                  setSelected(item);
                }}
                renderLeftIcon={() => (
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Fontisto name="persons" size={18} color="#bcbcbc" />
                  </View>
                )}
                renderItem={(item) => _renderItemMulti(item, selected)}
              />
            ) : (
              <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={dataChannel}
                search={false}
                labelField="label"
                valueField="value"
                label="Dropdown"
                placeholder="Select leads"
                value={selectedManager}
                onChange={(item) => {
                  setSelectedManager(item.value);
                }}
                renderLeftIcon={() => (
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Foundation
                      name="clipboard-pencil"
                      size={18}
                      color="#bcbcbc"
                    />
                  </View>
                )}
                renderItem={(item) => _renderItem(item, selectedManager)}
                textError="Error"
              />
            )}

            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
              marginBottom={20}
              icon={<AntDesign name="key" size={18} color="#bcbcbc" />}
            />

            <CustomButton
              text="Submit"
              onPress={SubmitBtn}
              btnNormal={true}
              fontColor="white"
              backgroundColor="#000000"
            />
          </View>
        </ScrollView>
      </LinearGrad>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    fontSize: 16,
    padding: 8,
  },
  shadow: {
    width: "35%",
    textAlign: "center",
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
