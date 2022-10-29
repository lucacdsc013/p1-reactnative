import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contador: {
    fontSize: 80,
    color: 'red'
  },
  botao: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 30
  },
  botao1: {
    backgroundColor: '#1abc9c',
    borderColor: '#16a085'
  },
  botao2: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9'
  },
  textobotao: {
    fontSize: 40,
    textAlign: 'center'
  }
});

export {styles}