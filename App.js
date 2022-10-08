import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import BottomTab from "./Navigation/BottomTab";

import Home from "./screens/Home";
import Details from "./screens/Details";
import Wishlist from "./screens/Wishlist";
import Settings from "./screens/Settings";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Settings"
      >
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "Details" component={Details} />
        <Stack.Screen name = "Wishlist" component={Wishlist} />
        <Stack.Screen name = "Settings" component={Settings} />
      </Stack.Navigator> */}
      <BottomTab />
      
    </NavigationContainer>
  );
};

export default App;
