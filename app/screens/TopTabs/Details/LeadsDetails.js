import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Linking,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import BugRapterLogo from "../../../assets/logo/BugRapterLogo";
import CerebrumLogo from "../../../assets/logo/CerebrumLogo";
import MoogleLogo from "../../../assets/logo/MoogleLogo";
import WoosperLogo from "../../../assets/logo/WoosperLogo";
import SeasiaLogo from "../../../assets/logo/SeasiaLogo";
import { Picker } from "@react-native-picker/picker";
import {
  Foundation,
  FontAwesome5,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import BtnStatus from "../../component/BtnStatus";
import CustomButton from "../../component/CustomButton";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { BOX, STATUS1, TextColorLightblack } from "../../../style/theme";
import {
  leadOverViewData,
  leadUpdateData,
  assignlead,
} from "../../../Store/reducer/leads/leadOverViewSlice";
import {
  getCommentsData,
  PostCommentData,
} from "../../../Store/reducer/leads/comment/commentLeadsSlice";
import LoaderScreen from "../../component/LoaderScreen";

import { Dropdown } from "react-native-element-dropdown";
import LinearGrad from "../../component/LinearGrad";
import BackBtn from "../../component/BackBtn";
import { useFocusEffect } from "@react-navigation/native";
const LeadsDetails = ({ route, navigation }) => {
  const [description, setDescription] = useState("");
  const [statusShow, setStatusShow] = useState(false);
  const [statusLead, setStatusLead] = useState(false);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const { getComment, isDispatching } = useSelector(
    (state) => state.commentLeads
  );
  const { leadOverview, isLoading } = useSelector(
    (state) => state.leadOverview
  );
  const [userSelectStatus, setUserSelectStatus] = useState("");
  const [assigneeCheck, setAssigneeCheck] = useState();

  const leadsData = leadOverview?.data;
  let splited = route?.params?.otherParam.split("SingleLeadDetails");
  useEffect(() => {
    if (leadsData?.status) {
      setUserSelectStatus(leadsData.status);
    }
    if (leadsData?.assignee) {
      setAssigneeCheck(leadsData.assignee);
    }
  }, [userSelectStatus, statusShow, statusLead]);
  useFocusEffect(
    React.useCallback(() => {
      // alert("Screen was focused");
      dispatch(leadOverViewData(id));
      dispatch(getCommentsData(id));
      return () => {
        // navigation.goBack();
        // Useful for cleanup functions
      };
    }, [route, dispatch])
  );

  // console.log(splited, "splited");
  const id = route?.params?.paramKey;
  // console.log(navigation, "navigation");
  // navigation.pop(splited[0]);
  // const detailedNavigation = route?.params?.otherParam;
  // console.log(detailedNavigation, "detailedNavigation");
  useEffect(() => {
    if (assigneeCheck) {
      LeadChangeDispatch;
    }
  }, [assigneeCheck]);
  const PostData = {
    lead_id: route?.params?.paramKey,
    comment: description,
  };

  const PostComment = async () => {
    // console.log("clicked comment");
    await dispatch(PostCommentData(PostData));
    dispatch(getCommentsData(route?.params?.paramKey));
    setDescription("");
  };
  const TouchStatus = () => {
    setStatusShow(true);
  };
  const TouchStatus1 = () => {
    setStatusLead(true);
  };
  const StatusDispatch = async (value) => {
    setStatus(value), setStatusShow(false);
    await dispatch(leadUpdateData({ status: value, id: id }));
    dispatch(leadOverViewData(id));
  };
  // (item) => {
  //   setAssigneeCheck(item.value);
  // };
  const LeadChangeDispatch = async (item, index) => {
    setAssigneeCheck(item.value);
    await dispatch(assignlead({ user_id: item.value, lead_id: id }));
    dispatch(leadOverViewData(id));
    setStatusLead(false);
  };

  // console.log(leadsData, "leadOverview");
  //commented
  // const leader = leadsData?.map((x) => {
  //   return { label: `${x.name}`, value: `${x.id}` };
  // });

  const userStatus = [
    { label: "New", value: "new" },
    { label: "Warm", value: "warm" },
    { label: "Cold", value: "cold" },
    { label: "Awarded", value: "awarded" },
    { label: "Dead", value: "dead" },
    { label: "Junk", value: "junk" },
  ];

  const _renderItem = (item, x) => {
    return (
      <>
        {x == item.value ? (
          <View style={Styles.item}>
            <Text style={Styles.textItem} numberOfLines={1}>
              {item.label}
            </Text>
            <Foundation name="check" size={16} color="black" />
          </View>
        ) : (
          <Text style={Styles.textItem} numberOfLines={1}>
            {item.label}
          </Text>
        )}
      </>
    );
  };

  // useEffect(() => {
  //   if (route && id) {
  //     // console.log("hit ");
  //     dispatch(leadOverViewData(id));
  //     dispatch(getCommentsData(id));
  //   }
  // }, [route, dispatch]);
  return (
    <>
      <ScrollView style={{ display: "flex", flex: 1 }}>
        <LinearGrad start={{ x: 0, y: 1 }} color={["#711AFF", "#46FFBC"]}>
          <BackBtn
            text="User Details"
            specificnavigation={splited?.[1]}
            navigation={navigation}
            paddingTop={10}
          />

          <View>
            {isLoading ? (
              <LoaderScreen />
            ) : leadsData && leadOverview?.data ? (
              <>
                <View style={BOX}>
                  {/* {leadOverview &&
                leadOverview?.data?.map((item) => {
                  return ( */}
                  <View style={{ padding: 12, paddingBottom: 10 }}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          {leadsData?.channel_id == 2 ? (
                            <WoosperLogo width="60" height="50" />
                          ) : leadsData?.channel_id == 3 ? (
                            //worked
                            <BugRapterLogo width="100" height="80" />
                          ) : leadsData?.channel_id == 4 ? (
                            <MoogleLogo width="50" height="50" />
                          ) : leadsData?.channel_id == 5 ? (
                            <CerebrumLogo width="40" height="50" />
                          ) : (
                            <SeasiaLogo
                              width="80"
                              height="50"
                              color="#AB0E0E"
                            />
                          )}
                        </View>
                      </View>

                      {!statusShow ? (
                        <TouchableOpacity onPress={TouchStatus}>
                          <BtnStatus status={leadsData?.status} />
                        </TouchableOpacity>
                      ) : (
                        <></>
                        // <Dropdown
                        //   style={Styles.dropdown}
                        //   containerStyle={Styles.shadow}
                        //   data={userStatus}
                        //   search={false}
                        //   searchPlaceholder="Search"
                        //   labelField="label"
                        //   valueField="value"
                        //   label="Dropdown"
                        //   placeholder="Select Status"
                        //   value={userSelectStatus}
                        //   onChange={(item) => {
                        //     // console.log(item, "item");
                        //     StatusDispatch(item.value);
                        //   }}
                        //   renderLeftIcon={() => (
                        //     <FontAwesome5
                        //       name="user-check"
                        //       size={20}
                        //       color="black"
                        //     />
                        //   )}
                        //   renderItem={(item) => _renderItem(item, userSelectStatus)}
                        //   textError="Error"
                        // />
                      )}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "900",
                          textTransform: "capitalize",
                          paddingTop: 15,
                          marginBottom: 5,
                        }}
                      >
                        {leadsData?.name}
                      </Text>
                      <Text
                        style={[
                          { fontSize: 14, paddingTop: 2, paddingBottom: 6 },
                          TextColorLightblack,
                        ]}
                        onPress={() => {
                          Linking.openURL(`mailto:${leadsData?.email}`);
                        }}
                      >
                        {leadsData?.email}
                      </Text>
                    </View>

                    <View style={{ paddingTop: 2, paddingBottom: 15 }}>
                      {leadsData?.phone_number ? (
                        <Text
                          onPress={() => {
                            Linking.openURL(`tel:${leadsData?.phone_number}`);
                          }}
                          style={{ marginBottom: 8 }}
                        >
                          <Feather name="phone-call" size={16} color="black" />
                          &nbsp;&nbsp;
                          {leadsData?.phone_number}
                        </Text>
                      ) : (
                        <Text style={{ marginBottom: 8 }}>
                          No Phone Number Found
                        </Text>
                      )}
                      {leadsData?.skype_id ? (
                        <Text
                          style={{ paddingTop: 2 }}
                          onPress={() => {
                            // Linking.openURL(`skype:${item?.skype_id}`);
                          }}
                        >
                          <Entypo name="skype" size={16} color="#00aff0" />
                          {leadsData?.skype_id}
                        </Text>
                      ) : (
                        <Text>No Skype ID Found</Text>
                      )}
                    </View>
                    <View
                      stgiyle={{
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <Text style={{ textTransform: "capitalize" }}>
                        {leadsData?.message}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <View>
                        <AntDesign name="calendar" size={16} color="black" />
                      </View>

                      <Text style={{ paddingLeft: 5 }}>
                        {moment(leadsData?.created_at).format("Do MMMM YYYY")}
                      </Text>
                    </View>
                    {!statusLead ? (
                      <TouchableOpacity onPress={TouchStatus1}>
                        <Text style={STATUS1}>
                          {!leadsData?.assignee_name
                            ? "Assign Here"
                            : leadsData?.assignee_name}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <></>
                      //commented
                      // <Dropdown
                      //   style={Styles.dropdown}
                      //   containerStyle={Styles.shadow}
                      //   data={leader}
                      //   search={false}
                      //   labelField="label"
                      //   valueField="value"
                      //   label="Dropdown"
                      //   placeholder="Select Leads"
                      //   value={assigneeCheck}
                      //   onChange={LeadChangeDispatch}
                      //   renderLeftIcon={() => (
                      //     <FontAwesome5
                      //       name="user-check"
                      //       size={20}
                      //       color="black"
                      //     />
                      //   )}
                      //   renderItem={(item) =>
                      //     _renderItem(item, userSelectStatus)
                      //   }
                      //   textError="Error"
                      // />
                    )}
                  </View>
                </View>
              </>
            ) : (
              <Text>NO Data Found</Text>
            )}
            <View style={Styles.input}>
              <TextInput
                multiline={true}
                numberOfLines={6}
                value={description}
                placeholder="Add your Comment"
                onChangeText={setDescription}
                style={{ padding: 10 }}
              />
            </View>
            <View style={{ marginTop: 5, padding: 10 }}>
              <CustomButton
                text="Add Comment"
                onPress={PostComment}
                paddingTop={10}
                backgroundColor="#5271ff"
                btnNormal={true}
                fontColor="white"
              />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
                Comments
              </Text>
              {isDispatching ? (
                <LoaderScreen />
              ) : getComment && getComment?.data == "data not found" ? (
                <Text>No Comments Found</Text>
              ) : getComment && getComment?.data?.length > 0 ? (
                getComment?.data?.map((item, index) => {
                  return (
                    <View key={index} style={Styles.CBox}>
                      <View style={{ flexDirection: "row" }}>
                        {/* <Text style={{ color: "#A7A7A7" }}>Name:</Text> */}
                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                          {item?.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingTop: 10,
                          paddingLeft: 10,
                          fontSize: 12,
                        }}
                      >
                        <Text>{item.comment}</Text>
                      </View>
                    </View>
                  );
                })
              ) : (
                <></>
              )}
            </View>
          </View>
        </LinearGrad>
      </ScrollView>
    </>
  );
  x;
};
export default LeadsDetails;
const Styles = StyleSheet.create({
  picker: {
    dropdownIconRippleColor: "red",
    width: 150,
    height: 60,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    elevation: 8,
    backgroundColor: "#e6e6e6",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    borderColor: "#fff",
  },
  active: {
    backgroundColor: "#F1B44C",
    borderColor: "#F1B44C",
  },
  new: {
    backgroundColor: "#7DF9FF",
    borderColor: "#7DF9FF",
  },
  completed: {
    backgroundColor: "#34c38f",
    borderColor: "#34c38f",
  },
  dead: {
    backgroundColor: "#f46a6a",
    borderColor: "#f46a6a",
  },
  CBox: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    shadowColor: "red",
    // flexDirection:"row",
    flexWrap: "wrap",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 1,
    borderRadius: 10,
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
    width: 100,
  },
  dropdown: {
    width: 100,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
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
});
