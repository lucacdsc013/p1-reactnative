import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable} from 'react-native';

import {styles} from './styles.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      pes: 0,
      alt: 0,
      res: '',
    };
    
    this.calcular = this.calcular.bind(this);
  }
 

  calcular(){
    
      if((this.state.pes / (this.state.alt * this.state.alt)) < 18.5){
        this.setState({
            res: 'Classificação: Abaixo do Peso'
          });
      }
      if((this.state.pes / (this.state.alt * this.state.alt)) >= 18.5 && (this.state.pes / (this.state.alt * this.state.alt)) < 24.9){
        this.setState({
            res: 'Classificação: Peso Normal'
          });
      }
      if((this.state.pes / (this.state.alt * this.state.alt)) >= 25 && (this.state.pes / (this.state.alt * this.state.alt)) < 29.9){
        this.setState({
            res: 'Classificação: Sobrepeso'
          });
      }
      if((this.state.pes / (this.state.alt * this.state.alt)) >= 30 && (this.state.pes / (this.state.alt * this.state.alt)) < 34.9){
        this.setState({
            res: 'Classificação: Obesidade I'
          });
      }
      if((this.state.pes / (this.state.alt * this.state.alt)) >= 35 && (this.state.pes / (this.state.alt * this.state.alt)) < 39.9){
        this.setState({
            res: 'Classificação: Obesidade II'
          });
      }
      if((this.state.pes / (this.state.alt * this.state.alt)) > 40){
        this.setState({
            res: 'Classificação: Obesidade III'
          });
      }
  }


  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de IMC</Text>

      <Image source={{ uri: 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg'}} style={{ width: 400, height: 300, marginBottom: 20}} />


      <TextInput style={styles.inputt} placeholder="Digite seu Peso" onChangeText={ (peso) => this.setState({pes: peso})}/> 

      <TextInput style={styles.inputt} placeholder="Digite sua Altura" onChangeText={ (altura) => this.setState({alt: altura})}/>

      <Pressable style={styles.botao} onPress={() => this.calcular()}>
        <Text style={styles.textobotao}>Calcular</Text>
      </Pressable>

      <Text style={styles.res}>{this.state.res}</Text>

    </View>
  );
}
}
export default App;
