import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Courses from "@/components/Courses";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userName").then((value) => {
      if (value) setUserName(value);
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Hoşgeldin, {userName}!</Text>
      <Courses/>
    </View>
  );
};

export default Home;
