import {View, Text} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import CartoesEstudoContext from "../contexts/CartoesEstudoContext";

const EdicaoCartaoScreen = ({route, navigation}) => {

    const {id} = route.params || {}
    const {cartoes, adicionarCartao, atualizarCartao, excluirCartao} = useContext(CartoesEstudoContext)
    const cartao = cartoes.find(c => c.id === id)

    const [titulo, setTitulo] = useState(cartao.titulo || "")
    const [notas, setNotas] = useState(cartao.notas || "")
    const [status, setStatus] = useState(cartao.status || "" )
    const [dataTermino, setDataTermino] = useState(cartao.dataTermino ? new Date(cartao.dataTermino) : new Date())
    const [mostraDataPicker, setMostraDataPicker] = useState(false)

    useEffect(() => {
        if(id) {
            setTitulo(cartao.titulo)
            setStatus(cartao.status)
            setNotas(cartao.notas)
            setDataTermino(cartao.dataTermino)
        }
    }, [id, cartao])

    function salvar(){
        const dadosCartao = {titulo, notas, status, dataTermino: dataTermino.toISOString()}

        if(id)
            atualizarCartao(id, dadosCartao)
        else
            adicionarCartao(dadosCartao)

        navigation.goBack()
    }

    function changeDataPicker(){
        setMostraDataPicker(!mostraDataPicker)
    }

    function confirmarDataTermino(data){
        setDataTermino(data)
    }

    return (
        <View>
            <Text>EdicaoCartaoScreen</Text>
        </View>
    )
}
export default EdicaoCartaoScreen
