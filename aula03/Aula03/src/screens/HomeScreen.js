import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation})=>{
    return (
        <View style={{flex:1, alignItens: 'center', justifyContent:'center'}}>
            <Text>HomeScreen</Text>
            <Button 
                title="Go to Details"
                onPress={()=> navigation.navigate('Details', {
                    itemID: 86,
                    otherParam: 'Pode ser qualquer coisa'
                })}
            />
        </View>
    )
}

export default HomeScreen;