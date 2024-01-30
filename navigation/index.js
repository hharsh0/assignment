import React, { useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    console.log("index.tsx", authCtx.isAuthenticated);
  }, [authCtx.isAuthenticated]);

  return authCtx.isAuthenticated ? <MainStack /> : <AuthStack />;
};


export default Navigation;