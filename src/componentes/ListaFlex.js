import React from 'react'
import { ScrollView, View, FlatList, Text} from 'react-native'


const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Aluísio', nota: 6.4},
    {id: 3, nome: 'Marta', nota: 9.2},
    {id: 4, nome: 'Maria', nota: 10.0},
    {id: 5, nome: 'Filipe', nota: 8.6},
    {id: 6, nome: 'Márcio', nota: 9.0},
    {id: 7, nome: 'Luís', nota: 7.9},
    {id: 8, nome: 'Alessandra', nota: 10.0},
    {id: 9, nome: 'Yngrid', nota: 7.5},
    {id: 10, nome: 'Mariana', nota: 10.0},

    {id: 11, nome: 'João', nota: 7.9},
    {id: 12, nome: 'Aluísio', nota: 6.4},
    {id: 13, nome: 'Marta', nota: 9.2},
    {id: 14, nome: 'Maria', nota: 10.0},
    {id: 15, nome: 'Filipe', nota: 8.6},
    {id: 16, nome: 'Márcio', nota: 9.0},
    {id: 17, nome: 'Luís', nota: 7.9},
    {id: 18, nome: 'Alessandra', nota: 10.0},
    {id: 19, nome: 'Yngrid', nota: 7.5},
    {id: 20, nome: 'Mariana', nota: 10.0}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroudColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    //justifyContent: 'space-around'
    alignItems: 'center',    
    flexDirection: 'row',
    justifyContent: 'space-between'    
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}