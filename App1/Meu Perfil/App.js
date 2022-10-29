import * as React from 'react';
import { Text, View, Image } from 'react-native';

import {styles} from './styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.foto}>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/86813331?v=4'}} style={{ width: 300, height: 300}} />
      </View>
      <Text style={styles.title}>Dados Pessoais</Text>
      <Text>Nome: Geovanne Costa Santos</Text>
      <Text>Telefone: (13) 99793-8290</Text>
      <Text>Endereço: Rua Conselheiro Lafaiete n° 30 - AP 18</Text>
      <Text>Estado Civil: Casado</Text>
      <Text style={styles.title}>Formação</Text>
      <Text>Técnico em Informática para Internet</Text>
      <Text style={styles.title}>Experiência</Text>
      <Text>Sem experiência no mercado</Text>
      <Text style={styles.title}>Projetos</Text>
      <Text>Projeto de TCC - Sistema para Personal Trainers de Gerenciamento de Treinos</Text>
    </View>
  );
}

