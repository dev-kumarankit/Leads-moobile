import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CompleteLeadsScreen from "../screens/TopTabs/AwardedLeadsScreen";

import { SafeAreaView } from "react-native-safe-area-context";
import LeadsTabAll from "./leads/LeadsTabAll";
import LeadsTabNew from "./leads/LeadsTabNew";

import LeadsTabDead from "./leads/LeadsTabDead";
import LinearGrad from "../screens/component/LinearGrad";
import LeadsTabWarm from "./leads/LeadsTabWarm";
import LeadsTabAwarded from "./leads/LeadsTabAwarded";
import LeadsTabJunk from "./leads/LeadsTabJunk";
import LeadsTabCold from "./leads/LeadsTabCold";
const Tab = createMaterialTopTabNavigator();

export default function RouteTopTabs({ route }) {
  // console.log(route, "route");
  return (
    <LinearGrad start={{ x: 0, y: 1 }} color={["#711AFF", "#CC477F"]}>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="All"
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarIndicatorStyle: {
              backgroundColor: "white",
              height: 3,
            },
            tabBarScrollEnabled: true,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarItemStyle: { width: 110 },
            tabBarStyle: {
              // height: 150,
              backgroundColor: "transparent",
              // paddingTop: 50,
            },
          }}
        >
          <Tab.Screen
            name="All"
            component={LeadsTabAll}
            // options={{ headerShown: true }}
          />
          <Tab.Screen name="New" component={LeadsTabNew} />
          <Tab.Screen name="Warm" component={LeadsTabWarm} />
          <Tab.Screen name="Awarded" component={LeadsTabAwarded} />
          <Tab.Screen name="Cold" component={LeadsTabCold} />
          <Tab.Screen name="Dead" component={LeadsTabDead} />
          <Tab.Screen name="Junk" component={LeadsTabJunk} />
        </Tab.Navigator>
      </SafeAreaView>
    </LinearGrad>
  );
}
