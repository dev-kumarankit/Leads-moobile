import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import LoaderScreen from "../component/LoaderScreen";
import moment from "moment";
import { BOX } from "../../style/theme";
import { NEWCOLOR, COMPLETED, ACTIVE, DEAD } from "../../style/theme";
import BugRapterLogo from "../../assets/logo/BugRapterLogo";
import CerebrumLogo from "../../assets/logo/CerebrumLogo";
import MoogleLogo from "../../assets/logo/MoogleLogo";
import WoosperLogo from "../../assets/logo/WoosperLogo";
import SeasiaLogo from "../../assets/logo/SeasiaLogo";
import BtnStatus from "./BtnStatus";
import LinearGrad from "./LinearGrad";
import NOData from "../../assets/other/NoData";
import AnimateEffect from "./AnimateEffect";
export default function LeadsCard({
  data,
  navigation,
  navigationDetails,
  isLoading,
  dispatchApi,
}) {
  const AllData = data?.data;
  //1 seasia
  //2 woosper
  //3 bugrapter
  //4 moogle
  //5 celebrium
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
    LeadsDetails,
  }) => {
    const paddingToBottom = 120;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          // dispatchApi();
        }
      }}
      scrollEventThrottle={400}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {isLoading ? (
        <LoaderScreen />
      ) : AllData && AllData?.length > 0 ? (
        AllData?.map((item) => {
          return (
            <AnimateEffect
              outputRange={[100, 0]}
              inputRange={[0, 1]}
              userBox={true}
              key={item.id}
            >
              <TouchableOpacity
                key={item.id}
                style={BOX}
                onPress={
                  () =>
                    navigation.navigate(`${navigationDetails}`, {
                      key: item.id,
                      paramKey: item.id,
                      otherParam: navigationDetails,
                    })
                  // navigation.navigate("SingleLeadDetails", {
                  //   paramKey: item.id,
                  // })
                }
              >
                <View style={Styles.container}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <View style={{ marginBottom: 10,  }}> */}
                      {/* <View style={{ width: 50, height: 50 }}> */}
                      {item.channel_id == 2 ? (
                        <WoosperLogo width="60" height="50" />
                      ) : item.channel_id == 3 ? (
                        <BugRapterLogo width="50" height="50" />
                      ) : item.channel_id == 4 ? (
                        <MoogleLogo width="50" height="50" />
                      ) : item.channel_id == 5 ? (
                        <CerebrumLogo width="40" height="50" />
                      ) : (
                        <SeasiaLogo width="150" height="50" color="#AB0E0E" />
                      )}
                      {/* </View> */}
                      <View>
                        <BtnStatus status={item.status} />
                      </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ color: "#A7A7A7", fontSize: 12 }}>
                        Created Date
                      </Text>
                      <Text style={{ fontSize: 14 }}>
                        {moment(item.created_at).format("Do MMMM YYYY")}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ marginBottom: 10 }}>
                      <Text
                        style={{
                          color: "#A7A7A7",
                          textTransform: "capitalize",
                          fontSize: 12,
                        }}
                      >
                        Assigned to
                      </Text>
                      <Text
                        style={{ textTransform: "capitalize", fontSize: 14 }}
                      >
                        {item && item?.assignee_name
                          ? item?.assignee_name
                          : "Not Assigned yet"}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: "#A7A7A7",
                          fontSize: 12,
                        }}
                      >
                        Client Name
                      </Text>
                      <Text
                        style={{
                          marginLeft: 15,
                          textTransform: "capitalize",
                          fontSize: 14,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ color: "#A7A7A7", fontSize: 12 }}>
                      Message
                    </Text>
                    {item.message ? (
                      <Text
                        style={(Styles.message, { fontSize: 14 })}
                        numberOfLines={1}
                      >
                        {item.message}
                      </Text>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </AnimateEffect>
          );
        })
      ) : (
        <NOData />
      )}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // backgroundColor: "red",
    width: "100%",
    padding: 12,
    paddingBottom: 10,
  },
  outer: {
    backgroundColor: "red",
  },
  message: {
    backgroundColor: "#fff",

    textTransform: "capitalize",
  },
  status: {
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    // lineHeight: 1,
    width: 80,
    height: 30,
    // display: "flex",
    elevation: 8,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "#fff",
  },
});
