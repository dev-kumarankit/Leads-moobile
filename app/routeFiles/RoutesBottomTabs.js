import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import RouteTopTabs from "./RouteTopTabs";
import UserTab from "./user/UserTab";
import Home from "../screens/Home/home";
import ProfileScreen from "./profile/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function RoutesBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#711AFF",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelPosition: "below-icon",
        tabBarScrollEnabled: false,
        tabBarLabelStyle: { fontSize: 12, bottom: 12 },
        tabBarItemStyle: { padding: 1, margin: 0 },
        tabBarStyle: {
          height: 70,
          // backgroundColor: "#6269e8",
        },
      }}
      initialRouteName="Home1"
    >
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leads"
        component={RouteTopTabs}
        options={{
          tabBarLabel: "Leads",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="clipboard-notes" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="new1"
        component={New1}
        options={{
          tabBarLabel: "Leads",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="clipboard-notes" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="User"
        component={UserTab}
        options={{
          tabBarLabel: "Users",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
