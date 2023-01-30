import {  StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const logo = require("../assets/welcom.jpg");
export default function Accueil({navigation}) {



  return (
    <View style={styles.container}>
      
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>for a New Life !</Text>

      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. </Text>
      {/* <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. </Text> */}
    
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Start </Text>
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#060534',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: "100%",
      height: 40,
      position: "relative",
      top: 0,
      resizeMode: 'cover',
      backgroundColor: '#060534',
      marginVertical: 40,
    },
    title: {
      color: "#E4D0D0",
      fontSize: 45,
      fontWeight: "bold", 
       
    },
    text: {
      color: "#E4D0D0",
      fontSize : 14,
      marginTop: 40,
      paddingHorizontal: 50,
      textAlign: 'justify',
    },
    button: {
      backgroundColor: '#f57c00',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      paddingHorizontal: 40,
    },
   
  });
  