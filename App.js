import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-web';
import TaskCard from './TaskCard';


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
        <Button title styles='Salvar'
          style={styles.buttonGreen}
          color='darkgreen'
          onPress={
            () =>{
              alert ('Salvando ..')
            }
          }/>

      </View>
      <TaskCard
            title="Teste"
            desc="Descrição Teste"  
            status="Done"
            onClick={() => {
              alert("deletar");
           }
      }/>

},

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
    marginBottom:16,
  },
  textArea:{
    height:200,
    textAlignVertical:'Top'
  },
  buttonContainer:{
    marginTop:16
  },
  buttonGreen:{

  }

});

