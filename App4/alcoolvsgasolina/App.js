import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable} from 'react-native';

import {styles} from './styles.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      gas: 0,
      alc: 0,
      res: '',
    };
    
    this.verificar = this.verificar.bind(this);
  }
 

  verificar(){
    
      if((this.state.alc / this.state.gas) >= 0.7){
        this.setState({
            res: 'Gasolina é Melhor'
          });
      }
      else{
        this.setState({
            res: 'Álcool é Melhor'
          });
      }
  }


  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image source={{ uri: 'https://opetroleo.com.br/wp-content/uploads/2018/09/Calculadora-Flex.jpg'}} style={{ width: 350, height: 300, marginBottom: 20}} />


      <TextInput style={styles.inputt} placeholder="Preço do Álcool" onChangeText={ (alcool) => this.setState({alc: alcool})}/> 

      <TextInput style={styles.inputt} placeholder="Preço da Gasolina" onChangeText={ (gasolina) => this.setState({gas: gasolina})}/>

      <Pressable style={styles.botao} onPress={() => this.verificar()}>
        <Text style={styles.textobotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.res}>{this.state.res}</Text>

    </View>
  );
}
}
export default App;
