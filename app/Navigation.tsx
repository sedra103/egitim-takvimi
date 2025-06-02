import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home}  />
      </Stack.Navigator>
      
  );
};

export default App;
