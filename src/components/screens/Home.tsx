import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/homeStyle'
import { Actions } from 'react-native-router-flux'

const Home = () => {
    const Quiz=()=>{
        Actions.quiz()
    }
  return (
    <View>
        <Text style={styles.header}>Welcome To Quiz</Text>
        <Image source={{uri:'https://www.shutterstock.com/image-vector/quiz-question-marks-trivia-night-260nw-2052894734.jpg'}}
        style={styles.image}/>
        <TouchableOpacity onPress={Quiz}>
      <Text style={styles.text}> Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

