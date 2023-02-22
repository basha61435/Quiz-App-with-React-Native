import { Image, SafeAreaView, Text, View } from 'react-native'

import React from 'react'
import { styles } from '../styles/homeStyle';
import { ResultStyle } from '../styles/ResultsStyle';
const Result = (props) => {
  const totalQuestion=props.totalQuestion;
  const Percentage=(props.CorrectedAnswers/totalQuestion)*100;
  return (
    <SafeAreaView>
      <View>
      <Text style={ResultStyle.result}>Results</Text>
        <Image 
        source={{uri:'https://as2.ftcdn.net/v2/jpg/03/75/45/83/1000_F_375458395_vLmcXBtrB3DZtJWI0j9g3wZFGfdEqtcb.jpg'}}
        style={styles.image}/>
      </View>
       
        <View style={ResultStyle.resultContainer}>
            <Text style={ResultStyle.text}>Correct Attempt : {props.CorrectedAnswers}</Text>
            <Text style={ResultStyle.text}>Wrong Attempt : {props.WrongQuestion}</Text>
            <Text style={ResultStyle.text}>Skips : {props.Skip}</Text>
            <Text style={ResultStyle.text}>Percentage :  {Percentage} %</Text>
        </View>
    </SafeAreaView>
  )
}

export default Result;