import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#000',
    width: '20%',
    height: '10%',
    position: 'absolute',
    bottom: 2,
    left: 2,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backText: {
    color: 'white',
    fontSize: 20
  }
});

export default styles;
