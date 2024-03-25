import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
  },

  titulo: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },

  texto: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export { styles };
