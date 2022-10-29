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
    textAlign: 'center'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15
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
  textobotao: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 5
  },
  inputt: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15
  }
});

export {styles}