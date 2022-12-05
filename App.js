import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen";
import * as Font from "expo-font";
import Home from "./src/screens/HomeScreen/Home";
import React from "react";
import SignInScreen from "./src/screens/Registration/SignInScreen";
import SignUpScreen from "./src/screens/Registration/SignUpScreen";
import Welcome from "./src/screens/Welcome";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import AddTransaction from "./src/screens/AddTransaction/AddTransaction";
import Wallet from "./src/screens/WalletScreen/Wallet";
import UserPage from "./src/screens/UserProfile/UserPage";
import TransactionHistory from "./src/screens/TransactionHistory/TransactionHistory";
import DatePicker from "./src/screens/TransactionHistory/components/FilterForm";
import SuccessScreen from "./src/screens/AnimationsScreen/SuccessScreen";
import FailedScreen from "./src/screens/AnimationsScreen/FailedScreen";
// import FilteredList from "./src/screens/TransactionHistory/components/FilteredList";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

let customFonts = {
  InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  InterLight: require("./assets/fonts/Inter-Light.ttf"),
};

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      // code below act as router
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Signin"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Signin" component={SignInScreen} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="Header" component={Header} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="DatePicker" component={DatePicker} />

          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          />
          <Stack.Screen name="UserPage" component={UserPage} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
          <Stack.Screen name="FailedScreen" component={FailedScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
