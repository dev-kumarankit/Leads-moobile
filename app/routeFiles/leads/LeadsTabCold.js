import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ActiveLeadsScreen from "../../screens/TopTabs/WarmLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
import WarmLeadsScreen from "../../screens/TopTabs/WarmLeadsScreen";
import ColdLeadsScreen from "../../screens/TopTabs/ColdLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabCold() {
  return (
    <Stack.Navigator initialRouteName="LeadTabCold">
      <Stack.Screen
        name="LeadTabCold"
        component={ColdLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsCold"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
