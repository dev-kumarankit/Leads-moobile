import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ActiveLeadsScreen from "../../screens/TopTabs/WarmLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
import WarmLeadsScreen from "../../screens/TopTabs/WarmLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabWarm() {
  return (
    <Stack.Navigator initialRouteName="LeadTabWarm">
      <Stack.Screen
        name="LeadTabWarm"
        component={WarmLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsWarm"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
