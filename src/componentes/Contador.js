import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Padrao from '../estilo/Padrão'

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial
    }

    // constructor(props){
    //     super(props)

    //     this.maisUm = this.maisUm.bind(this)
    // }

    maisUm() {
        this.setState({numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({numero: this.props.numeroInicial})
    }

    render(){
        this.props.numero++
        return(
            <View> 
                <Text>{this.state.numero}</Text>
                <TouchableHighlight 
                onPress={() => this.maisUm}
                onLongPress={this.limpar}>                    
                    <Text style={Padrao.ex}>Incrementar/Zerar</Text>
                </TouchableHighlight>                
            </View>
        )
    }
}
