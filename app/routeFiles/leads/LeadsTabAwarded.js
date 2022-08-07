import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import AwardedLeadsScreen from "../../screens/TopTabs/AwardedLeadsScreen";
import CompleteLeadsScreen from "../../screens/TopTabs/AwardedLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabAwarded() {
  return (
    <Stack.Navigator initialRouteName="LeadTabAwarded">
      <Stack.Screen
        name="LeadTabAwarded"
        component={AwardedLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsAwarded"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
