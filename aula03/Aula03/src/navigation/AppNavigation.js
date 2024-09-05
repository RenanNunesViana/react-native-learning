import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
const AppNavigation = ()=>{
    //inicializa o stack navigation
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
            />
            <Stack.Screen 
                name='Details'
                component={DetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default AppNavigation;