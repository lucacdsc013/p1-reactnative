import * as React from 'react';
import { Text, View, ScrollView} from 'react-native';

import {styles} from './styles.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>VAGAS DE TI</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
              <Text style={styles.cardtitle}>Desenvolvedor React Native Junior</Text>
              <Text style={styles.item}><strong>Salário:</strong> R$3500,00</Text>
              <Text style={styles.item}><strong>Descrição:</strong> Desenvolver Apps e Sistemas WEB com React Native, usando técnicas como CRUD, aplicar Estilos diversos de CSS, resolver problemas de código, aplicar metodologias de Clean Code, trabalhar com Bancos de Dados, conversar diretamente com Designers para alinhamento de ideias de front-end.</Text>
              <Text style={styles.item}><strong>Experiência:</strong> Não</Text>
              <Text style={styles.item}><strong>Contato:</strong> <u>LucaDaTI (LinkedIn)</u></Text>
          </View>

          

          <View style={styles.card}>
              <Text style={styles.cardtitle}>Desenvolvedor Python Pleno</Text>
              <Text style={styles.item}><strong>Salário:</strong> R$3882,00</Text>
              <Text style={styles.item}><strong>Descrição:</strong> Participar de SCRUMs diárias para alinhamento do processo que será feito no dia, desenvolver o Back-end de aplicativos e sites para web onde se faça necessário o uso de banco de dados e reprodução de dados dentro do processo. NECESSÁRIO TER EXPERIÊNCIA NA ÁREA</Text>
              <Text style={styles.item}><strong>Experiência:</strong> Sim</Text>
              <Text style={styles.item}><strong>Contato:</strong> <u>AnaDoVrau (LinkedIn)</u></Text>
              <Text style={styles.pcd}>PCD</Text>
          </View>

          <View style={styles.card}>
              <Text style={styles.cardtitle}>Desenvolvedor PHP Junior</Text>
              <Text style={styles.item}><strong>Salário:</strong> R$3000,00</Text>
              <Text style={styles.item}><strong>Descrição:</strong> Realizar Projetos descritos pela Empresa, juntamente com Designers e uma vasta equipe de Devs, onde trabalhará com metodologias ágeis para desenvolver sistemas que funcionem dependendo de Banco de Dados externos, como por exemplo de APIs do governo e Banco de Dados das maiores empresas de TI.</Text>
              <Text style={styles.item}><strong>Experiência:</strong> Não</Text>
              <Text style={styles.item}><strong>Contato:</strong> <u>GustavoDaBrisa (LinkedIn)</u></Text>
          </View>

          <Text>Teste</Text>

          <View style={styles.card}>
              <Text style={styles.cardtitle}>SEO Senior</Text>
              <Text style={styles.item}><strong>Salário:</strong> R$3200,00</Text>
              <Text style={styles.item}><strong>Descrição:</strong> Desenvolver Apps e Sistemas WEB com React Native, usando técnicas como CRUD, aplicar Estilos diversos de CSS, resolver problemas de código, aplicar metodologias de Clean Code, trabalhar com Bancos de Dados, conversar diretamente com Designers para alinhamento de ideias de front-end.</Text>
              <Text style={styles.item}><strong>Experiência:</strong> Sim</Text>
              <Text style={styles.item}><strong>Contato:</strong> <u>BentoETotó (LinkedIn)</u></Text>
          </View>
        </ScrollView>
      </View>
  );
}
