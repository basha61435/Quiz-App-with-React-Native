import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { QuizStyle } from '../styles/QuizStyle'
import { styles } from '../styles/homeStyle'
import { Actions } from 'react-native-router-flux'
import axios from 'axios';
import Questions from '../data/Questions'

const Quiz = () => {
    const data = Questions;
    const [questionIndex, setQuestionIndex] = useState(0)
    const CurrentQuestion = data[questionIndex];
    const [skipQuestion, setSkipQuestion] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);
    const [counter, setCounter] = useState(15);
    const[previousCounter,setPreviousCounter]=useState(0)
    let interval: number | null = null;
    const Skip = () => {
        setPreviousCounter(counter)
        setSkipQuestion(skipQuestion + 1)
        setQuestionIndex(questionIndex + 1)
        setCounter(15);
    }
    const PreviousQuestion = () => {
        
        setCounter(previousCounter);
        setQuestionIndex(questionIndex - 1);
    }
    const Submit = () => {
        // Alert.alert("currect answers are " + selectedAnswerIndex);
        // Actions.result({ CorrectedAnswers: selectedAnswerIndex });
        result();
    }
    const SelectedIndex = (index: number) => {
        setPreviousCounter(counter)
        setCounter(15);
        const a = index;
        if (CurrentQuestion.correctAnswerIndex === a) {

            setSelectedAnswerIndex(selectedAnswerIndex + 1)
        }
        else {
        }
        if (questionIndex < 9) {
            setQuestionIndex(questionIndex + 1);
        }
        else {
            // Alert.alert("currect answers are " + selectedAnswerIndex);
            // Actions.result({
            //     CorrectedAnswers: selectedAnswerIndex, Skip: skipQuestion,
            //     WrongQuestion: data.length - (selectedAnswerIndex + skipQuestion),
            //     totalQuestion: data.length
            // });
            result()
        }
    }
    const result = () => {
        Actions.result({
            CorrectedAnswers: selectedAnswerIndex, Skip: skipQuestion,
            WrongQuestion: data.length - (selectedAnswerIndex + skipQuestion),
            totalQuestion: data.length
        });
    }
    useEffect(() => {
        const myinterval = () => {
            if (counter >= 1) {
                setCounter(counter - 1);
            }
            if (counter == 0) {
                if(questionIndex==data.length-1)
                {
                    result();
                }
                else
                {
                setQuestionIndex(questionIndex + 1);
                setCounter(15);
                }
            }
        }
        interval = setTimeout(myinterval, 1000);
        return () => {
            clearTimeout(interval)
        }

    }, [counter])
    return (
        <SafeAreaView style={QuizStyle.container}>
            <Text style={QuizStyle.counter}> Timer : {counter}</Text>
            <View>
                <Text style={QuizStyle.question}>{questionIndex + 1} . {CurrentQuestion.question}</Text>
            </View><View>
                {
                    CurrentQuestion.options.map((item, index) => (

                        <TouchableOpacity onPress={() => SelectedIndex(index)}
                        key={index} >
                            <Text style={QuizStyle.options}
                           >{item.options} . {item.answer}</Text>
                        </TouchableOpacity>

                    ))}
            </View>
            <View style={QuizStyle.buttom}>
                {questionIndex != 0 ?
                    <TouchableOpacity onPress={PreviousQuestion}>
                        <Text style={QuizStyle.previous}>Previous</Text>
                    </TouchableOpacity>
                    :
                    <Text />
                }
                {questionIndex < 9 ?
                    <TouchableOpacity onPress={Skip}>
                        <Text style={QuizStyle.previous} >Skip</Text>
                    </TouchableOpacity>
                    : <TouchableOpacity onPress={Submit}>
                        <Text style={QuizStyle.previous} >Submit</Text>
                    </TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}
export default Quiz;

