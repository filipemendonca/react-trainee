import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrão';

function parOuImpar(num){
    const v = num % 2 == 0 ? 'Par' : 'Ímpar';
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props => 
    <View>
        {
            parOuImpar(props.numero)
        
            // props.numero % 2 == 0
            // ? <Text style={Padrao.ex}>Par</Text>
            // : <Text style={Padrao.ex}>Ímpar</Text>
            
        }
    </View>