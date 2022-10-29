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
  titulo: {
    fontSize: 30,
    color: '#2EBCD8',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  botao: {
    width: 350,
    padding: 20,
    backgroundColor: '#81ecec',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor:'#00cec9',
    marginBottom: 20 
  },
  textobotao: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  res: {
    fontSize: 40,
    color: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 20,
    width: 350,
    marginBottom: 30,
    textAlign: 'center'
  }
});

export {styles}