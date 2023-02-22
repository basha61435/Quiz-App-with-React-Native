import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/components/screens/Home'
import Quiz from './src/components/screens/Quiz'
import{Router,Scene} from 'react-native-router-flux'
import Result from './src/components/screens/Result'
// import QuizScreen from './src/components/screens/QuizScreen'
const App = () => {
  return (
    <Router headerMode='none'>
      <Scene key='root'>
<Scene key="home" component={Home} initial={true}/>
<Scene key="quiz" component={Quiz}/>
<Scene key='result' component={Result}/>
      </Scene>
    </Router>
// {/* <View>
//   <Result/>
// </View> */}



  )
}

export default App 