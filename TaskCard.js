import { CircleCheck, View } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native-web";

const TaskCard = ({title, desc, status,onClick}) =>{
    return (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title}
            </Text>
            <CircleCheck color="green" size={32} />
          </View>    
          <Text style={styles.descreption}>{desc}</Text>
          <TouchableOpacity style={styles.button}
          onPress={onClick}>
            <Text style={status==="Done"?  'Deletar ':'Check'}>
            </Text>
          </TouchableOpacity>
        </View>
      );
},

const styles = StyleSheet.create({
    card:{
        backgroundColor :'#fff'
        padding: 15,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:5,
        elevation:3,
        marginVertical:10

    },
    header :{
        flexDirection:'row',
        justifyContent:'sapace-betweeen',
        alignItems: 'center',
        marinBottom:10,

    },
    title:{
        fontSize:10,
        fontWeight:'bold',
        color:'#333'
    },
    status:{
        fontSize:14,
        fontWeight:14,'bold',
        textTransform:'uppercase',
    },
    description:{
        fontSize:14,
        color:'#666',
        marginBottom:10
    },
    button:{
        backgroundColor:'#d33f49',
        paddingVertical:10,
        borderRadius:6,
        alignItems:"center"
    },
    button:{
        color:'#fff'
        fontSize : 14,
        fontWeight:'bold'
    }
})
export default TaskCard;