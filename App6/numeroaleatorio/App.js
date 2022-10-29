import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable} from 'react-native';

import {styles} from './styles.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      res: '??',
    };
    this.descobrir = this.descobrir.bind(this);
  }
 

  descobrir(){
    this.setState({
      res: Math.floor(Math.random() * 10)
    });
  }


  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo do N° Aleatório</Text>

      <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/410/722/large_2x/purple-dices-on-purple-background-free-photo.jpg'}} style={{ width: 350, height: 300, marginBottom: 20}} />

      <Text style={{color: 'red', fontSize: 20}}>Pense em um Número de 0 a 10</Text>

      <Text style={styles.res}>{this.state.res}</Text>

      <Pressable style={styles.botao} onPress={() => this.descobrir()}>
        <Text style={styles.textobotao}>Descobrir</Text>
      </Pressable>

      

    </View>
  );
}
}
export default App;
