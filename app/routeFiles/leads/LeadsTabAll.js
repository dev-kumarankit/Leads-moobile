import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import AddLead from "../../screens/TopTabs/AddLead";

import AllLeadsScreen from "../../screens/TopTabs/AllLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabAll() {
  return (
    <Stack.Navigator initialRouteName="LeadTabAll">
      <Stack.Screen
        name="LeadTabAll"
        component={AllLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsAll"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateLeads"
        component={AddLead}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
