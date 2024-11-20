import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style = {styles.label}>app de tarefas</Text>
    <TextInput
      style={styles.input}
       placeholder='Nome de tarefas'/>
      <Text style ={styles.label}>Tarefas descrição</Text>

      <TextInput 
      style={[styles.input,styles.textArea]}
      placeholder='Nome da tarefa'
      multiline/>
      <View style={styles.buttonContainer}>
        <Button title styles='Salvar'/>
          style=

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    fontSize: 16,
    fontWeight:'bold',
    marginBotton: 8
  },
  input:{
    borderBottomWidth:1,
    borderColor:'#ccc',
    borderRadius: 10,
    paddiign:12,
    fontSize:17,
    marginBottom:20,
  },
  textArea:{
    height:400,
    textAlignVertical:'Top'
  },
  buttonContainer:{
    marginTop:16
  },
  buttonGreen:{

  }

});

