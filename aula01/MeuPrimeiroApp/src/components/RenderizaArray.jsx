import { View, Text } from "react-native";

const RenderizaArray = ({ arr }) => {


    return (
        <View>
            {arr.map((value, index) => {
                return (
                    <Text>
                        Valor {index}: {value}
                    </Text>
                )
            })}
        </View>
    )
}

export default RenderizaArray;