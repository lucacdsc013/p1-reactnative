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
  inputt: {
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: 350,
    marginBottom: 20,
    fontSize: 20
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
    fontSize: 25,
    color: 'red'
  }
});

export {styles}