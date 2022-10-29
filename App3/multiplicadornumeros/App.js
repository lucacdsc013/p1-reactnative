import React, { Component } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

import {styles} from './styles.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      res: 0,
    };
    
    this.multiplicar = this.multiplicar.bind(this);
  }
 

  multiplicar(){
    this.setState({
      res: this.state.num1 * this.state.num2
      });
  }



  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Multiplicador de Números</Text>
          <TextInput style={styles.inputt} placeholder="Digite o 1° Número" onChangeText={ (numero1) => this.setState({num1: numero1})}/>
          <TextInput style={styles.inputt} placeholder="Digite o 2° Número" onChangeText={ (numero2) => this.setState({num2: numero2})} />
          <Pressable style={[styles.botao, styles.botao2]} onPress={() => this.multiplicar()}>
            <Text style={styles.textobotao}>Multiplicar</Text>
          </Pressable>
          
          <Text style={styles.contador}>{this.state.res}</Text>
        </View>
      );
    }
  }

export default App;

