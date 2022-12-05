import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Pressable, View, Animated, Easing } from "react-native";
import Lottie from 'lottie-react-native';
import failedanimation from "../../../assets/json/failed.json";


const FailedScreen = ({ navigation }) => {
    const animationRef = useRef<Lottie>(null)
  
    useEffect(() => {
        animationRef.current?.play()
        
    }, [])

  return (
    <Lottie
        backgroundColor="#fff"
        source={failedanimation}
        autoPlay = {true}
        loop = {false}
        onAnimationFinish = {() => {
            navigation.navigate("AddTransaction")
        }}
    />
  );
}

export default FailedScreen;