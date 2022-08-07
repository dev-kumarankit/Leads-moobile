import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BarCharts from "../component/charts/BarCharts";
import PieCharts from "../component/charts/PieCharts";
import { AntDesign } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { channelDetails } from "../../Store/reducer/leads/leadOverViewSlice";
import LoaderScreen from "../component/LoaderScreen";
import LinearGrad from "../component/LinearGrad";
import { StatusBar } from "react-native";
import LoadingData from "../../assets/other/LoadingData";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(channelDetails(channelData));
  }, []);

  const { allChannelDetails, isLoading } = useSelector(
    (state) => state.leadOverview
  );

  const channelData = {
    channel_id: "1,2,3,4,5",
  };
  const allChannelData = allChannelDetails?.data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGrad start={{ x: 0, y: 1 }} color={["#711AFF", "#46FFBC"]}>
        <StatusBar animated={true} backgroundColor="#711AFF" translucent />
        <ScrollView>
          {!isLoading && allChannelData ? (
            <>
              <PieCharts allChannelDetails={allChannelData} />
              <BarCharts allChannelDetails={allChannelData} />
            </>
          ) : isLoading ? (
            <LoaderScreen />
          ) : (
            <View
              style={{
                marginTop: 60,
                paddingLeft: 10,
                paddingRight: 10,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height - 150,
              }}
            >
              <LoadingData />
            </View>
          )}
        </ScrollView>
      </LinearGrad>
    </SafeAreaView>
  );
}
