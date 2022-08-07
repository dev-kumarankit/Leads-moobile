import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginDataDetails } from "../../Store/reducer/loginUserSlice";
import SeasiaLogo from "../../assets/logo/SeasiaLogo";
import CerebrumLogo from "../../assets/logo/CerebrumLogo";
import MoogleLogo from "../../assets/logo/MoogleLogo";
import BugRapterLogo from "../../assets/logo/BugRapterLogo";
import WoosperLogo from "../../assets/logo/WoosperLogo";
import { AntDesign } from "@expo/vector-icons";
import { logout, reset } from "../../Store/reducer/loginSlice";

import CustomButton from "../component/CustomButton";
import LoaderScreen from "../component/LoaderScreen";

export default function UserProfile({ navigation }) {
  const { isLoading, loginuser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loginDataDetails());
  }, [navigation]);
  const imageUri = loginuser?.dataToken?.data?.image
    ?.split(`\/`)[1]
    .slice(`\"}"`, -2);
  const data = loginuser?.dataToken?.data;
  const dispatch = useDispatch();

  let SignoutBtn = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={"#711AFF"}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: "100%", position: "relative" }}>
          {isLoading ? (
            <LoaderScreen />
          ) : (
            <View style={{ flex: 1, backgroundColor: "transparent" }}>
              <View
                style={{
                  height: 140,
                  backgroundColor: "#711AFF",
                  borderBottomRightRadius: 50,
                  borderBottomLeftRadius: 50,
                }}
              >
                {loginuser?.dataToken && imageUri ? (
                  <View
                    style={{
                      elevation: 2,
                      paddingTop: 60,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: `https://stgphys.appsndevs.com/hrs/storage/app/public/image/${imageUri}`,
                      }}
                      style={styles.profile}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "900",
                        paddingBottom: 10,
                        paddingTop: 10,
                      }}
                    >
                      {data.name}
                    </Text>
                    <Text
                      style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                      }}
                    >
                      {data.email}
                    </Text>
                  </View>
                ) : (
                  <></>
                )}

                <View
                  style={{
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  {data?.channel_id?.map((x) =>
                    x == 2 ? (
                      <View key={x.id}>
                        <WoosperLogo width="50" height="30" />
                      </View>
                    ) : x == 3 ? (
                      <View key={x.id} s>
                        <BugRapterLogo width="50" height="40" />
                      </View>
                    ) : x == 4 ? (
                      <View key={x.id} style={{ paddingLeft: 5 }}>
                        <MoogleLogo width="50" height="40" />
                      </View>
                    ) : x == 5 ? (
                      <View key={x.id} style={{ paddingLeft: 5 }}>
                        <CerebrumLogo width="35" height="40" />
                      </View>
                    ) : (
                      <View key={x.id}>
                        <SeasiaLogo width="35" height="50" color="#AB0E0E" />
                      </View>
                    )
                  )}
                </View>
                <View
                  style={{
                    height: "100%",

                    padding: 20,
                    width: "100%",
                  }}
                >
                  <CustomButton
                    text="Edit Profile"
                    paddingBottom1={15}
                    onPress={() => navigation.navigate("EditProfile")}
                    fontColor="#4e4e4ee3"
                    backgroundColor="white"
                    fontSze={14}
                    icon={
                      <AntDesign name="right" size={16} color="#4e4e4ee3" />
                    }
                  />
                  <CustomButton
                    text="Terms &amp; Conditions"
                    paddingBottom1={15}
                    fontColor="#4e4e4ee3"
                    fontSze={14}
                    icon={
                      <AntDesign name="right" size={16} color="#4e4e4ee3" />
                    }
                  />
                  <CustomButton
                    text="Privacy"
                    paddingBottom1={15}
                    fontColor="#4e4e4ee3"
                    fontSze={14}
                    icon={
                      <AntDesign name="right" size={16} color="#4e4e4ee3" />
                    }
                  />
                  <CustomButton
                    text="About Us"
                    paddingBottom1={15}
                    fontColor="#4e4e4ee3"
                    fontSze={14}
                    icon={
                      <AntDesign name="right" size={16} color="#4e4e4ee3" />
                    }
                  />
                  <CustomButton
                    text="Log Out"
                    fontColor="white"
                    backgroundColor="#545454"
                    fontSze={14}
                    icon={<AntDesign name="right" size={16} color="white" />}
                    onPress={SignoutBtn}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  profile: {
    marginTop: 20,
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 50,
  },
});
