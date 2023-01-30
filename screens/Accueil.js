import {  StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'


export default function Accueil({navigation}) {



  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome for a New Life !</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. </Text>
    
      <Button
        title="Start"
        onPress={() => navigation.navigate('Login')}
        
      />
      
     
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
    title: {
      color: "#E4D0D0",
      fontSize: 28,
      fontWeight: "bold",    
    },
    text: {
      color: "#E4D0D0",
      fontSize : 14,
      marginTop: 40,
      paddingHorizontal: 50,
      textAlign: 'justify',
    },
   
  });
  