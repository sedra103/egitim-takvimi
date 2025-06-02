import React, { useState, useEffect } from "react";
import courses from "@/assets/courses.json"
import { View, Text, FlatList, TouchableOpacity,Image,Linking } from "react-native";

const Courses = () => {

    const phoneNumber = "905510765250"; 

  const callUs = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const sendWhatsApp = (course) => {
    const message = `Merhaba, ${course.name} eğitimine kayıt olmak istiyorum.\nTarih: ${course.date}\nEğitim Tipi: ${course.type}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    Linking.openURL(whatsappURL);
  };
  

  return (
    <View style={{ marginTop: 20}}>
        <Text style={{fontSize:20,fontWeight:'bold' ,
    textTransform:'capitalize',
    marginBottom:3}}>Eğitimlermiz:</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={<View style={{ marginBottom: 60 }} />}
        renderItem={({ item }) => (
            <View style={{
                backgroundColor: 'white',
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:20,
                marginBottom:25,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 3,
              }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 180,
              height: 100,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{ padding: 10,justifyContent:'center',alignItems:'center' }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
            <Text>Tarih: {item.date}</Text>
            <Text>Tip: {item.type}</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                <TouchableOpacity
                  onPress={callUs}
                  style={{
                    backgroundColor: "#007AFF",
                    padding: 12,
                    borderRadius: 5,
                    marginRight: 8,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>Telefonla Kayıt 📞</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => sendWhatsApp(item)}
                  style={{
                    backgroundColor: "#25D366",
                    padding: 12,
                    marginRight:8,
                    borderRadius: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>WhatsApp 📲</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
          
        )}
      />
    </View>
  );
};

export default Courses;
