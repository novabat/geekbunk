import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import EditFormScreen from './screens/EditForm'
import {createStackNavigator} from 'react-navigation-stack'

const stackNavigator= createStackNavigator({
  Home:HomeScreen,
  EditForm: EditFormScreen
},
{
  initialRouteName:'Home',
})


export default createAppContainer(stackNavigator)