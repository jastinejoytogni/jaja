import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import CICLManagementScreen from "./screens/CICLManagementScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import ReportsScreen from "./screens/ReportsScreen";

const RootStack = createStackNavigator();

const linking = {
  prefixes: ["/"],
  config: {
    screens: {
      Login: "login",
      Dashboard: "dashboard",
      // CARManagement: "car-management",
      CICLManagement: "cicl-management",
      Reports: "reports",
      // Add other screens here
    },
  },
};

export default function App() {
  const navigationRef = useNavigationContainerRef();

  // Helper to get current route name
  const [routeName, setRouteName] = React.useState<string | undefined>("Login");

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => setRouteName(navigationRef.getCurrentRoute()?.name)}
      onStateChange={() => setRouteName(navigationRef.getCurrentRoute()?.name)}
    >
      {/* Only show NavigationBar if not on Login */}
      {routeName !== "Login" && <NavigationBar />}
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          presentation: "modal",
        }}
      >
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Dashboard" component={DashboardScreen} />
        {/* <RootStack.Screen name="CARManagement" component={CARManagementScreen} /> */}
        <RootStack.Screen name="CICLManagement" component={CICLManagementScreen} />
        <RootStack.Screen name="Reports" component={ReportsScreen} />
        {/* Add other screens here */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}