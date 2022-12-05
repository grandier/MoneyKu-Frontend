import React, { useEffect, useRef, ref } from 'react';
import { Image, StyleSheet, Pressable, View, Animated, Easing } from "react-native";
import Lottie from 'lottie-react-native';
import successanimation from "../../../assets/json/success.json";


const SuccessScreen = ({ navigation }) => {
    const animationRef = useRef<Lottie>(null)
  
    useEffect(() => {
        animationRef.current?.play()
        
    }, [])

  return (
    <Lottie
        backgroundColor="#fff"
        source={successanimation}
        autoPlay = {true}
        loop = {false}
        onAnimationFinish = {() => {
            navigation.navigate("AddTransaction")
        }}
    />
  );
}

export default SuccessScreen;