import { StyleSheet, View, Text, Image,TextInput, Button } from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"; 



const Welcome = () => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("userName").then((value) => {
      if (value) setUserName(value);
    });
  }, []);

  const saveAndNavigate = async () => {
    await AsyncStorage.setItem("userName", userName);
    navigation.navigate("Home");
  };

  return (
    <View>
      <Image source={require('@/assets/images/welcome-img.jpeg')} style={{ width: 500, height: 300 }} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Eğitim Takvimine Hoşgeldiniz</Text>
        <View style={styles.giris}>
        <TextInput
        style={{ backgroundColor: "white", borderWidth: 1, padding: 10, width: "80%", marginVertical: 10 }}
        placeholder="Adınızı yazın..."
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Kaydet ve Devam Et" onPress={saveAndNavigate} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    marginTop:-25,
    backgroundColor:'#fff',
    borderTopRightRadius:30,
    borderTopLeftRadius:30
  },
  welcomeText:{
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold'
  },
  giris:{
    margin:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }

})

export default Welcome