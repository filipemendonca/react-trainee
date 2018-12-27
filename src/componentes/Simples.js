import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/Padrão';

// export default function(props){
//     return <Text>{props.texto}</Text>
// }

export default props => <Text style={Padrao.ex}>Arrow: {props.texto}</Text>    
