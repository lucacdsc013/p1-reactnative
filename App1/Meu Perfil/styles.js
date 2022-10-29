import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlign: 'center'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5
  },
  foto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export {styles}