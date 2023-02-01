import { Animated, Switch, View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, Platform } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { signOut } from 'firebase/auth';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { auth, database } from '../config/firebase';
import colors from '../colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker'

// 
const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};
// 


export default function QuizzDep() {

    //mise en place d'un toggle pour l'affichage ou non du questionnaire :
    const [toggle, setToggle] = useState(false)

    const toggleFunction = () => {
        setToggle(!toggle)
    }




    const navigation = useNavigation();

    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };


    //input
    const [text, onChangeText] = useState('');
    

    const [date, setDate] = useState(new Date())
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState('')

    const showPicker = () => {
        setVisible(true)
    }

    const showDate = () => {
        setMode('date')
        showPicker()
    }

    // const showTime = () => {
    //     setMode('time')
    //     showPicker()
    // }

    const dateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setVisible(false)
        setDate(currentDate)
    }




    return (
        <ScrollView style={styles.container}>

            {/* début du Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>New Life</Text>
                <TouchableOpacity onPress={onSignOut} >
                    <AntDesign name="logout" size={24} color={colors.lightGray} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            {/* fin du Header */}


            {/* début du Body */}
            <View>
                <Text style={styles.title}>Avant de commencer !</Text>
                <Text style={styles.text}>Evaluer le niveau de dépendance à la nicotine :</Text>
                <View style={styles.animation}>
                    <FadeInView style={styles.animationBloc} >
                        <Text style={styles.animationText} onPress={toggleFunction}>
                            Quizz
                        </Text>

                    </FadeInView>
                </View>

                {/* Questionnaire: */}
                <View style={toggle ? { display: 'flex' } : { display: 'none' }}>

                    <Text style={styles.title}>Etape 1 :</Text>
                    <View style={styles.blocInput}>
                        <Text style={styles.textInput}>Pseudo : </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Pseudo"
                        />

                    </View>


                    <View style={styles.blocInput}>
                    <Text style={styles.textInput}>Date de naissance : </Text>
                        <Text style={styles.textDate} onPress={showDate}>
                            {`${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth()+1)).slice(-2)}/${date.getFullYear()}`}
                        </Text>
                        {/* <Text style={styles.textDate} onPress={showTime}>
                            {`${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`}
                        </Text> */}
                        {visible &&
                            <DateTimePicker
                                value={date}
                                mode={mode}
                                onChange={dateChange}
                            />
                        }
                    </View>

                    <Text style={styles.title}>Etape 2 :</Text>

                    <Text style={styles.title}>Etape 3 :</Text>

                    <Text style={styles.title}>Etape 4 :</Text>




                </View>
                {/* fin du questionnaire */}

            </View>
            {/* fin du Body */}



            <Text >QuizzDep</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#060534',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    logo: {
        color: "white",
        marginTop: 24,
        fontSize: 28,
        fontWeight: 'bold',

    },
    title: {
        color: "white",
        marginTop: 54,
        fontSize: 22,
        fontWeight: 'bold',
    },
    text: {
        color: "white",
        marginTop: 24,
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
    },
    animation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,

    },
    animationBloc: {
        width: 150,
        height: 45,
        backgroundColor: 'orange',
        borderRadius: 50,
    },
    animationText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    blocInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        color: 'white',
    },
    dateContainer: {
        flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    padding: 8,
    },
    textDate :{
        fontSize: 14,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#ecf0f1',
      }
})