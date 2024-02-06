import  Home  from "./screens/Home";
import  Result  from "./screens/Result";
import WebViewScreen from "./screens/WebViewScreen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Result'
          component={Result}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name='WebViewScreen'
          component={WebViewScreen}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
