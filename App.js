import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./store/auth-context";


export default function App() {
  return (
    <>
      <AuthContextProvider>
        <NavigationContainer>
          <Navigation />
          <StatusBar style="auto" />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}

