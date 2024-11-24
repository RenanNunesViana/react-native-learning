import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartoesEstudoContext = createContext()

export const CartoesEstudoProvider = ({children})=>{

    const [cartoes, setCartoes] = useState([])

    useEffect(async () => {
        await carregarCartoes()
    }, []);

    const carregarCartoes = async () =>{
        const cartoesArmazenados = await AsyncStorage.getItem('cartoes');

        if(cartoesArmazenados.length > 0)
            setCartoes(JSON.parse(cartoesArmazenados));
    }

    const adicionarCartao = async (cartao) =>{
        if(!cartao) throw new Error('Cartão para adicionar inválido')
        const novosCartoes = [...cartoes, {...cartao, id: Date.now()}]
        setCartoes(novosCartoes);

        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes));
    }

    const atualizarCartao = async  (id, atualizacoes)=>{
        const cartoesAtualizados = cartoes.map(cartao =>
        cartao.id === id ? {
            ...cartao, ...atualizacoes
        } : cartao)
        setCartoes(cartoesAtualizados);
        await AsyncStorage.setItem('cartoes', JSON.stringify(cartoesAtualizados));
    }

    const excluirCartao = async (id) => {
        const cartoesAposExclusao = cartoes.filter(cartao => cartao.id !== id)

        setCartoes(cartoesAposExclusao);
        await AsyncStorage.setItem('cartoes', JSON.stringify(cartoesAposExclusao));
    }

    return (
        <CartoesEstudoContext.Provider value={{cartoes, adicionarCartao, atualizarCartao, excluirCartao}}>
            {children}
        </CartoesEstudoContext.Provider>
    )
}

export default CartoesEstudoContext