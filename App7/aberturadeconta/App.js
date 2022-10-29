import React, { Component } from 'react';
import { Text, View, TextInput, Pressable, Switch} from 'react-native';

import { Picker } from '@react-native-picker/picker';
 
import Slider from '@react-native-community/slider';

import { styles } from './styles.js';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: 0,
      escolaridade: 0,
      limite: 200,
      status: false,
      brasileiro: '',
      res: '',
    };

    this.mostrar = this.mostrar.bind(this);
  }

  mostrar() {

    if(this.state.status == false){
      this.setState({
        brasileiro: "Não"
      })
    }
    else{
      this.setState({
        brasileiro: "Sim"
      })
    }

    if(this.state.nome == ""){
      this.setState({
        res: "É necessário informar seu nome!"
      })
    }

    if(this.state.idade == ""){
      this.setState({
        res: "É necessário informar sua idade!"
      })
    }

    if(this.state.sexo == 0){
      this.setState({
        res: "É necessário escolher seu sexo!"
      })
    }

    if(this.state.escolaridade == 0){
      this.setState({
        res: "É necessário escolher sua escolaridade!"
      })
    }
    else{
      this.setState({
        res: 'Dados Informados:' + '\n\nNome: ' + this.state.nome + '\nIdade: ' + this.state.idade + '\nSexo: ' +     this.state.sexo + '\nEscolaridade: ' + this.state.escolaridade + '\nLimite: R$' + this.state.limite + '.00\nBrasileiro: ' + this.state.brasileiro
      })
    }
    

    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Abertura de Conta</Text>
        <View style={styles.rows}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.inputt} placeholder="Digite seu nome"
              onChangeText={(valor) => this.setState({ nome: valor})}
            />
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput style={styles.inputt} 
              keyboardType="numeric" 
              placeholder="Digite sua idade"
              onChangeText={(valor) => this.setState({ idade: valor })}
            />
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Sexo:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sexo: itemValue })
            }>
            <Picker.Item key={0} value={0} label="Escolha o Sexo" />
            <Picker.Item key={1} value={"Masculino"} label="Masculino" />
            <Picker.Item key={2} value={"Feminino"} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.escolaridade}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ escolaridade: itemValue })
            }>
            <Picker.Item key={0} value={0} label="Escolha a Escolaridade" />
            <Picker.Item key={1} value={"Ensino Fundamental Incompleto"} label="Ensino Fundamental Incompleto" />
            <Picker.Item key={2} value={"Ensino Fundamental Completo"} label="Ensino Fundamental Completo" />
            <Picker.Item key={3} value={"Ensino Médio Incompleto"} label="Ensino Médio Incompleto" />
            <Picker.Item key={4} value={"Ensino Médio Completo"} label="Ensino Médio Completo" />
            <Picker.Item key={5} value={"Ensino Superior Incompleto"} label="Ensino Superior Incompleto" />
            <Picker.Item key={6} value={"Ensino Superior Completo"} label="Ensino Superior Completo" />
          </Picker>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Limite:</Text>
          <Slider style={styles.slider}
            minimumValue={200}
            maximumValue={1000}
            step={50}
            onValueChange={ (valor) => this.setState({limite: valor})}
            value={this.state.limite}
          />
          <Text style={{textAlign: 'center', fontSize: 20}}>
            R${this.state.limite.toFixed(2)}
          </Text>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch style={styles.switchh}
            value={this.state.status}
            onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
          />

        </View>

        <Pressable style={styles.botao} onPress={() => this.mostrar()}>
          <Text style={styles.textobotao}>Confirmar </Text>
        </Pressable>

        <Text style={styles.res}>{this.state.res}</Text>



      </View>
    );
  }
}

