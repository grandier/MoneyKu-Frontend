import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image, StyleSheet } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/onboarding1.png")} />,
          title: "Page One",
          subtitle: "This is the first page of the onboarding sequence.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/onboarding2.png")} />,
          title: "Page Two",
          subtitle: "This is the second page of the onboarding sequence.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/onboarding3.png")} />,
          title: "Page Three",
          subtitle: "This is the third page of the onboarding sequence.",
        },
      ]}
    ></Onboarding>
  );
};

export default OnboardingScreen;
