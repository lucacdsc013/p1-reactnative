import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  card: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  titulo: {
    fontSize: 30,
    color: '#2EBCD8',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  cardtitle: {
    fontSize: 17,
    color: '#2EBCD8',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  item: {
    marginBottom: 7
  },
  pcd: {
    textAlign: 'right',
    color:  '#0C88DB',
    fontWeight: 700
  }
});

export {styles}