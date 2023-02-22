import { StyleSheet } from "react-native";

export const QuizStyle=StyleSheet.create({
    container:{
   padding:20,
   height:"100%"
    },

    question:{
        fontSize:25,
        marginVertical:20,
     },
    options:{
        backgroundColor:"green",
        marginBottom:20,
        paddingVertical:10,
        fontSize:25,
        borderRadius:20,
        paddingLeft:30,
        
       
     },
    buttom:{
        marginTop:150,
        paddingVertical:16,
        flexDirection:"row",
        justifyContent:"space-between",
       
        
    },
    previous:{
        backgroundColor:'blue',
        padding:15,
        fontSize:20,
        borderRadius:20,
        color:'white'

    },
    counter:{
      textAlign:'right',
      fontSize:30,
     marginRight:30,
     color:'black',
     
    }
})