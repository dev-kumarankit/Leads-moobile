import { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { getSingleUserById } from "../../Store/reducer/users/getAllUserSlice";
import { singleUserlead } from "../../Store/reducer/leads/getLeadAllDataSlice";
import LoaderScreen from "../component/LoaderScreen";
import {
  BOX,
  CENTER,
  JUSTIFYBETWEEN,
  PADDING2,
  ROUND,
  ROW,
  USERBOX,
} from "../../style/theme";
import SeasiaLogo from "../../assets/logo/SeasiaLogo";
import WoosperLogo from "../../assets/logo/WoosperLogo";
import BugRapterLogo from "../../assets/logo/BugRapterLogo";
import MoogleLogo from "../../assets/logo/MoogleLogo";
import CerebrumLogo from "../../assets/logo/CerebrumLogo";
import ImageComponent from "../component/ImageComponent";
import LinearGrad from "../component/LinearGrad";
import BackBtn from "../component/BackBtn";
import LeadsCard from "../component/LeadsCard";
export default function SingleUser({ route, navigation }) {
  // console.log(route, "route");
  // console.log(navigation, "navigation");
  const id = route.params?.paramKey;
  const dispatch = useDispatch();
  const { singleUserleadData, isLoading1 } = useSelector(
    (state) => state.leadall
  );

  const { getSingleUserDetail, isLoading } = useSelector(
    (state) => state.alluser
  );
  let data = getSingleUserDetail?.data;

  useEffect(() => {
    if (route && id) {
      dispatch(getSingleUserById(id));
      dispatch(
        singleUserlead({
          assignee: id,
        })
      );
    }
  }, [route]);

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGrad
          start={{ x: 0, y: 1 }}
          color={["#711AFF", "#46FFBC"]}
          flex={"false"}
        >
          <BackBtn
            text="User Details"
            navigation={navigation}
            paddingTop={20}
          />

          {isLoading ? (
            <LoaderScreen />
          ) : (
            <>
              <View>
                <View style={[BOX, { padding: 12, paddingBottom: 10 }]}>
                  <View style={[CENTER, ROW, JUSTIFYBETWEEN]}>
                    <ImageComponent
                      url={require("../../assets/logo/profilePic.png")}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {data?.name}
                    </Text>
                  </View>
                  <View style={Styles.container}>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text style={{ color: "#A7A7A7" }}>Email</Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                          {data?.email}
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: "#A7A7A7" }}>Last Login</Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        {data?.last_login_at
                          ? moment(data?.last_login_at).format("LLLL")
                          : "No Date Found"}
                      </Text>
                    </View>
                    <View style={Styles.container}>
                      <View style={{ marginBottom: 10 }}>
                        <Text style={{ color: "#A7A7A7" }}>Phone</Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                          {data?.phone_number}
                        </Text>
                      </View>
                      <View
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Text style={{ marginLeft: 10, color: "#A7A7A7" }}>
                          Total Leads Assigned
                        </Text>
                        <Text
                          style={{
                            marginLeft: 15,
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          {data?.total_leads}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[CENTER, PADDING2]}>
                    {data && data?.channel_id?.length > 0 ? (
                      <>
                        <View style={USERBOX}>
                          {data?.channel_id?.map((x, index) => {
                            return x == 2 ? (
                              <View key={index}>
                                <View style={ROUND}>
                                  <WoosperLogo width="150" height="50" />
                                </View>
                                <Text>BUGRAPTOR</Text>
                              </View>
                            ) : x == 3 ? (
                              <View key={index}>
                                <View style={ROUND}>
                                  <BugRapterLogo width="50" height="50" />
                                </View>
                                <Text>BUGRAPTOR</Text>
                              </View>
                            ) : x == 4 ? (
                              <View key={index}>
                                <View style={ROUND}>
                                  <MoogleLogo width="50" height="50" />
                                </View>
                                <Text>MOOGLE</Text>
                              </View>
                            ) : x == 5 ? (
                              <View key={index}>
                                <View style={ROUND}>
                                  <CerebrumLogo width="40" height="50" />
                                </View>
                                <Text>CEREBRUM</Text>
                              </View>
                            ) : x == 1 ? (
                              <View key={index}>
                                <View style={ROUND}>
                                  <SeasiaLogo
                                    width="50"
                                    height="50"
                                    color="#AB0E0E"
                                  />
                                </View>
                                <Text>SEAISA</Text>
                              </View>
                            ) : (
                              <></>
                            );
                          })}
                        </View>
                      </>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 15,
                  paddingBottom: 15,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 24, color: "#fff" }}
                >
                  {singleUserleadData?.data?.data?.length === 0 &&
                  singleUserleadData
                    ? "NO Assigned Leads Found"
                    : "Assigned Leads"}
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                {isLoading1 ? (
                  <LoaderScreen />
                ) : (
                  <LeadsCard
                    data={singleUserleadData?.data}
                    isLoading={isLoading}
                    navigation={navigation}
                    navigationDetails={"LeadsDetailsUserTab"}
                  />
                )}
              </View>
            </>
          )}
        </LinearGrad>
      </ScrollView>
    </>
  );
}
const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    marginTop: 15,
  },
});
