import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo';
import Principal from './src/components/principal';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#dab3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontBlue: {
    color: 'blue' ,
    fontWeight: 'bold' ,
    fontSize: 30 ,
  }
});

