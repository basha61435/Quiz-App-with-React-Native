import { View, Text } from 'react-native'
import React from 'react'
import Questions from '../data/Questions';
const quz = () => {
    const data=Questions;
    const CurrentQuestion=data[0];
  return (
    <View>
      <Text>{CurrentQuestion.question}</Text>
      {
        CurrentQuestion.options.map((item)=>(
          <View>
            
            <Text>{item.answer}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default quz