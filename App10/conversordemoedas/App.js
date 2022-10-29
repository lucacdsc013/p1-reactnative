import React, { Component } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { styles } from './styles.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      moedaA: 0,
      moedaB: 0,
      res: '',
    };

    this.converter = this.converter.bind(this);
  }

  converter() {

    if(this.state.moedaA > 0 && this.state.moedaB > 0 && this.state.val > 0){

      if(this.state.moedaB == 5.40 ){
      this.setState({
        res: "$ " + (this.state.val * this.state.moedaA / this.state.moedaB).toFixed(2)
      })
      }
      if(this.state.moedaB == 1.00){
        this.setState({
          res: "R$ " + (this.state.val * this.state.moedaA / this.state.moedaB).toFixed(2)
      })
      }
      if(this.state.moedaB == 5.29 ){
        this.setState({
          res: "Є " + (this.state.val * this.state.moedaA / this.state.moedaB).toFixed(2)
      })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Conversor de Moedas: Dólar, Real e Euro
        </Text>

        <TextInput
          style={styles.inputt} 
          keyboardType="numeric" 
          placeholder="Digite o valor para converter"
          onChangeText={(valor) => this.setState({ val: valor })}
        />

        <Text style={styles.titulo}>De:</Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.moedaA}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ moedaA: itemValue })
          }>
          <Picker.Item key={0} value={0} label="Escolha a moeda" />
          <Picker.Item key={1} value={5.40} label="Dólar" />
          <Picker.Item key={2} value={1.00} label="Real" />
          <Picker.Item key={3} value={5.29} label="Euro" />
        </Picker>

        <Text style={styles.titulo}>Para:</Text>


        <Picker
          style={styles.picker}
          selectedValue={this.state.moedaB}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ moedaB: itemValue})
          }>
          <Picker.Item key={0} value={0} label="Escolha a moeda" />
          <Picker.Item key={1} value={5.40} label="Dólar" />
          <Picker.Item key={2} value={1.00} label="Real" />
          <Picker.Item key={3} value={5.29} label="Euro" />
        </Picker>

        <Pressable style={styles.botao} onPress={() => this.converter()}>
          <Text style={styles.textobotao}>Converter </Text>
        </Pressable>

        <Text style={styles.res}>{this.state.res}</Text>
      </View>
    );
  }
}
