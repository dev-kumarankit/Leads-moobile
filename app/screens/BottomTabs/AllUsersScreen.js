import { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  Button,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../component/CustomButton";
import {
  getUserDeleteByID,
  getUserDetails,
} from "../../Store/reducer/users/getAllUserSlice";
import { AntDesign } from "@expo/vector-icons";
import LoaderScreen from "../component/LoaderScreen";
import { ADDBTNSTYLE, APPCOLOR, BOX } from "../../style/theme";
import AddButton from "../component/AddButton";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LinearGrad from "../component/LinearGrad";
import NoUser from "../../assets/other/NoUser";
import NoData from "../../assets/other/NoData";
import AnimateEffect from "../component/AnimateEffect";
import androidNotification from "../component/androidNotification";

export default function AllUsersScreen({ navigation }) {
  const [check, setCheckStatus] = useState(false);
  const dispatch = useDispatch();
  const { getUserDetail, isLoading } = useSelector((state) => state.alluser);
  const { getUserDeleteCheck, isSuccess } = useSelector(
    (state) => state.alluser
  );

  // console.log(getUserDeleteCheck, "getUserDeleteCheck");
  if (check) {
    // console.log(getUserDeleteCheck, "getUserDeleteCheck");
    androidNotification(getUserDeleteCheck?.data);
    setCheckStatus(false);
  }
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  // const LeftActions = () => {
  //   // let i = 0;
  //   // console.log("left actions", i++);
  //   return (
  //     <View
  //       style={{ flex: 1, backgroundColor: "blue", justifyContent: "center" }}
  //     >
  //       <Text
  //         style={{
  //           color: "white",
  //           paddingHorizontal: 10,
  //           fontWeight: "600",
  //         }}
  //       >
  //         Left Action
  //       </Text>
  //     </View>
  //   );
  // };
  // const ListItem = ({ text }) => (
  //   <View style={{ paddingVertical: 20 }}>
  //     <Text style={{ fontSize: 24 }}>{text}</Text>
  //   </View>
  // );FlatList
  // const mockDataList = [
  //   { id: "1", text: "Swipe me left!" },
  //   { id: "2", text: "Swipe me right!" },
  //   { id: "3", text: "Try swiping in both directions" },
  // ];
  // const Separator = () => <View style={styles.itemSeparator} />;
  const deleteUser = (x) => {
    dispatch(getUserDeleteByID(x));
    dispatch(getUserDetails());
    setCheckStatus(true);
  };
  const renderRightActions = (x) => (
    <TouchableOpacity
      onPress={() => deleteUser(x)}
      style={{
        backgroundColor: "red",
        borderRadius: 5,
        marginTop: 15,
        marginRight: 10,
        width: 40,
      }}
    >
      <View
        style={{
          alignItems: "center",
          textAlignVertical: "center",
          textAlign: "center",
          top: "50%",
        }}
      >
        <AntDesign name="delete" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <LinearGrad start={{ x: 0, y: 1 }} color={["#711AFF", "#46FFBC"]}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={"#711AFF"}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 12,
            paddingBottom: 5,
            color: "white",
          }}
        >
          All Users
        </Text>
        {/* <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        All Users
      </Text> */}
        {/* <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
          <FlatList
            data={mockDataList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem {...item} />}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Swipeable>
      </GestureHandlerRootView> */}
        <ScrollView>
          <View style={{ paddingBottom: 16 }}>
            {isLoading ? (
              <LoaderScreen />
            ) : getUserDetail?.data && getUserDetail?.data.length > 0 ? (
              getUserDetail?.data.map((item) => {
                return (
                  <AnimateEffect
                    outputRange={[100, 0]}
                    inputRange={[0, 1]}
                    userBox={true}
                    key={item.id}
                  >
                    <GestureHandlerRootView key={item.id}>
                      <Swipeable
                        renderRightActions={() => renderRightActions(item?.id)}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("SingleUserDetails", {
                              paramKey: item.id,
                            })
                          }
                        >
                          <View style={[styles.container, BOX]}>
                            <View style={styles.container2}>
                              <View>
                                <Text
                                  style={{ color: "#A7A7A7", fontSize: 12 }}
                                >
                                  #
                                </Text>
                                <Text style={{ fontSize: 14 }}>{item.id}</Text>
                              </View>
                              <View>
                                <Text
                                  style={{ fontSize: 12, color: "#A7A7A7" }}
                                >
                                  Name
                                </Text>
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    fontSize: 14,
                                  }}
                                >
                                  {item.name}
                                </Text>
                              </View>
                            </View>

                            <View style={{ marginBottom: 10 }}>
                              <Text
                                style={{
                                  color: "#A7A7A7",
                                  fontSize: 12,
                                  marginTop: 10,
                                }}
                              >
                                E-Mail
                              </Text>
                              <Text style={{ fontSize: 14 }}>{item.email}</Text>
                            </View>
                            <View style={styles.container2}>
                              <View style={{ marginBottom: 10 }}>
                                <Text
                                  style={{ color: "#A7A7A7", fontSize: 12 }}
                                >
                                  Phone Number
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                  {item.phone_number}
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    color: "#A7A7A7",
                                    fontSize: 12,
                                  }}
                                >
                                  Role
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                  {item.role_id == 1
                                    ? "Super Admin"
                                    : item.role_id == 2
                                    ? "Admin"
                                    : item.role_id == 3
                                    ? "Lead/manager"
                                    : ""}
                                </Text>
                              </View>
                            </View>
                            <View>
                              <Text style={{ color: "#A7A7A7", fontSize: 12 }}>
                                Channels
                              </Text>
                              <Text style={(styles.message, { fontSize: 14 })}>
                                {item.channel_id == 1
                                  ? "Seasia"
                                  : item.channel_id == 2
                                  ? "Woosper"
                                  : item.channel_id == 3
                                  ? "Bugraptors"
                                  : item.channel_id == 4
                                  ? "Moogle"
                                  : "Cerebrum"}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </Swipeable>
                    </GestureHandlerRootView>
                  </AnimateEffect>
                );
              })
            ) : (
              <View
                style={{
                  paddingTop: -30,
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height - 150,
                }}
              >
                <NoUser />
              </View>
            )}
          </View>
        </ScrollView>
        <AddButton
          text={<Entypo name="add-user" size={20} color="white" />}
          routetext="AddUserTab"
        />
      </LinearGrad>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // width: "100%",
    padding: 12,
    paddingBottom: 10,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    // borderRadius:10,
    justifyContent: "space-between",
  },
  message: {
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  card: {
    height: 200,
    width: "100%",
    backgroundColor: "#f18484",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },
  text: {
    backgroundColor: "#fff",
  },
});
