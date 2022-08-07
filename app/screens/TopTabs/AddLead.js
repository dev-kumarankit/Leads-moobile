import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import {
  Foundation,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";
import { getUserDetails } from "../../Store/reducer/users/getAllUserSlice";
import { postlead } from "../../Store/reducer/leads/leadOverViewSlice";
import { BOX } from "../../style/theme";
import androidNotification from "../component/androidNotification";
import LinearGrad from "../component/LinearGrad";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackBtn from "../component/BackBtn";
export default function AddLead({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [channelSelect, setChannelSelect] = useState("1");
  const [leads, setLeads] = useState("");
  const [userName, setUserName] = useState("");
  const [userSelectStatus, setUserSelectStatus] = useState("new");
  const { getUserDetail, isLoading } = useSelector((state) => state.alluser);
  let newData1 = [];

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  getUserDetail?.data?.map((x) => {
    if (x.channel_id.includes(channelSelect))
      newData1.push({ label: x.name, value: x.id });
  });

  const userStatus = [
    { label: "New", value: "new" },
    { label: "Active", value: "active" },
    { label: "Complete", value: "complete" },
    { label: "Dead", value: "dead" },
  ];
  const channelData = [
    { label: "Seasia", value: "1" },
    { label: "Woosper", value: "2" },
    { label: "Bugraptors", value: "3" },
    { label: "Moogle", value: "4" },
    { label: "Cerebrum", value: "5" },
  ];

  const submitBtn = () => {
    const data = {
      assignee: leads,
      assignee_name: userName,
      category_id: 2,
      channel_id: channelSelect,
      email: email,
      message: message,
      name: name,
      phone_number: phoneNumber,
      skype_id: skypeId,
      status: userSelectStatus,
    };
    formValidation(data);
    dispatch(postlead(data));
    navigation.navigate("LeadTabAll");
  };

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
      dataObj.phone_number = "Please Enter the Correct Phone Number";
      androidNotification(dataObj.phone_number);
      return false;
    }
    if (data.skype_id.length < 4) {
      dataObj.skype_id = "Please Enter the skype Id";
      androidNotification(dataObj.skype_id);
      return false;
    }
    if (data.message.length < 2) {
      dataObj.message = "Please Enter Valid Message";
      androidNotification(dataObj.message);
      return false;
    }
    if (data.assignee_name.length < 1) {
      dataObj.message = "Please Select the valid Leads";
      androidNotification(dataObj.message);
      return false;
    }
    return dataObj;
  };

  const _renderItem = (item, x) => {
    return (
      <>
        {x == item.value ? (
          <View style={styles.item}>
            <Text style={styles.textItem} numberOfLines={1}>
              {item.label}
            </Text>
            <Foundation name="check" size={16} color="black" />
          </View>
        ) : (
          <Text style={styles.textItem} numberOfLines={1}>
            {item.label}
          </Text>
        )}
      </>
    );
  };

  return (
    <>
      <LinearGrad
        start={{ x: 0, y: 1 }}
        color={["#711AFF", "#46FFBC"]}

        // flex={data && data?.length > 0 ? "false" : ""}
      >
        <ScrollView>
          {/* <Text>Create Leads</Text> */}
          <BackBtn navigation={navigation} text="Add Leads" paddingTop={15} />
          <View style={[BOX, styles.padding10]}>
            <CustomInput
              placeholder="Name*"
              value={name}
              setValue={setName}
              borderRadius={5}
              marginBottom={20}
              icon={<Ionicons name="person" size={18} color="#bcbcbc" />}
            />
            <CustomInput
              placeholder="Email*"
              value={email}
              setValue={setEmail}
              borderRadius={5}
              marginBottom={20}
              icon={<MaterialIcons name="email" size={18} color="#bcbcbc" />}
            />

            <CustomInput
              placeholder="Skype ID"
              value={skypeId}
              setValue={setSkypeId}
              borderRadius={5}
              marginBottom={20}
              icon={<AntDesign name="skype" size={18} color="#bcbcbc" />}
            />

            <CustomInput
              placeholder="Phone No"
              value={phoneNumber}
              ktype="true"
              setValue={setPhoneNumber}
              borderRadius={5}
              marginBottom={20}
              icon={<Feather name="phone-call" size={18} color="#bcbcbc" />}
            />

            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={channelData}
              search={false}
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select item"
              value={channelSelect}
              onChange={(item) => {
                setChannelSelect(item.value);
              }}
              renderLeftIcon={() => (
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <Foundation
                    name="clipboard-pencil"
                    size={18}
                    color="#bcbcbc"
                  />
                </View>
              )}
              renderItem={(item) => _renderItem(item, channelSelect)}
              textError="Error"
            />

            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.dropdownshadow}
              data={newData1}
              search={false}
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select Leads"
              value={leads}
              onChange={(item) => {
                setUserName(item.label);
                setLeads(item.value);
              }}
              renderLeftIcon={() => (
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <MaterialCommunityIcons
                    name="lead-pencil"
                    size={18}
                    color="#bcbcbc"
                  />
                </View>
              )}
              renderItem={(item) => _renderItem(item, leads)}
              textError="Error"
            />

            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={userStatus}
              search={false}
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select Leads"
              value={userSelectStatus}
              onChange={(item) => {
                setUserSelectStatus(item.value);
              }}
              renderLeftIcon={() => (
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <MaterialCommunityIcons
                    name="list-status"
                    size={18}
                    color="#bcbcbc"
                  />
                </View>
              )}
              // renderItem={(item) =>
              renderItem={(item) => _renderItem(item, userSelectStatus)}
              // <Dropdown
              //   style={styles.dropdown}
              //   containerStyle={styles.shadow}
              //   data={userStatus}
              //   search={false}
              //   searchPlaceholder="Search"
              //   labelField="label"
              //   valueField="value"
              //   label="Dropdown"
              //   placeholder="Select Leads"
              //   value={userSelectStatus}
              //   onChange={(item) => {
              //     setUserSelectStatus(item.value);
              //   }}
              //   renderLeftIcon={() => (
              //     <FontAwesome5 name="user-check" size={20} color="black" />
              //   )}
              //
              //   textError="Error"
              // />
              // )
              // }
              textError="Error"
            />

            <CustomInput
              placeholder="Message"
              value={message}
              setValue={setMessage}
              lines={4}
            />
            {/* <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        > */}
            {/* <CustomButton
            text="Go Back"
            onPress={() => navigation.navigate("LeadTabAll")}
            paddingTop={10}
            backgroundColor="black"
            btnNormal={true}
            fontColor="white"
            marginRight={10}
          /> */}
            <CustomButton
              text="Submit"
              onPress={submitBtn}
              btnNormal={true}
              fontColor="white"
              backgroundColor="#000000"
              marginBottom={20}
              marginTop={20}
            />
            {/* </View> */}
          </View>
        </ScrollView>
      </LinearGrad>
    </>
  );
}
const styles = StyleSheet.create({
  padding10: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    marginBottom: 20,
    backgroundColor: "#fff",

    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
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
  dropdownshadow: {
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
