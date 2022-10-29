import React, { Component } from 'react';
import { Text, View, Pressable } from 'react-native';

import {styles} from './styles.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    };
    
    this.adicionar = this.adicionar.bind(this);
    this.subtrair = this.subtrair.bind(this);
  }
 
  adicionar(){
    this.setState((previousState, currentProps) => {
      return {
        num: previousState.num+1
      }
    });
  }

  subtrair(){
    if (this.state.num > 0){
      this.setState((previousState, currentProps) => {
      return {
        num: previousState.num-1
      }
    });
    }
  }

  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Contador de Pessoas</Text>
          <Text style={styles.contador}>{this.state.num}</Text>
          <Pressable style={[styles.botao1 , styles.botao]} onPress={() => this.adicionar()}>
            <Text style={styles.textobotao}>+</Text>
          </Pressable>
          <Pressable style={[styles.botao, styles.botao2]} onPress={() => this.subtrair()}>
            <Text style={styles.textobotao}>-</Text>
          </Pressable>
        </View>
      );
    }
  }

export default App;

