import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    //ESTILIZAÇÃO DAS PAGINAS DE LOGIN E CADASTRO
    container:{
        flex:1,
        backgroundColor:'#63c2d1',    
        justifyContent:'center',
        alignItems:'center',
    },
    texto:{
        color:'#fff',
    },
    BotaoCadatrar:{
        color:'#fff',
        margin:20,
    },
    img:{
        width:350,
        height:350,
    },
    imgMenor:{
        width:200,
        height:200,
    },
    titleEmailSenha:{
        fontSize:20,
        marginTop:15,
        color:'#fff',
    },
    title:{
        fontSize:20,
        margin:15,
        alignItems:'center'
    },
    titleApp: {
        fontSize:40,
        color:'#fff',
        fontWeight: 'bold',
        fontFamily:'SpaceMono'
    },
    titleApp2:{
        fontSize:20,
        marginBottom:20,
        color:'#fff',
        fontFamily:'SpaceMono'
    },
    titleAgendamento:{
        fontSize:30,
        margin:30,
        color:'#fff',
    },
    input:{
        fontSize:16,
        margin:10,
        borderWidth:1,
        borderColor:'#fff',
        padding:10,
        width:300,
        borderRadius:10,
        backgroundColor: 'white',
    },
    button:{
        backgroundColor: '#fff' ,
        padding:10,
        margin: 30,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#fff',
        alignItems:"center",
    },
    buttonDate:{
        backgroundColor: '#fff' ,
        padding:10,
        margin: 10,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#fff',
        right: 83,
    },
    buttonTime:{
        backgroundColor: '#fff' ,
        padding:10,
        margin: 10,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#fff',
        left: 83,
    },
    //ESTILIZAÇÃO DAS PAGINAS POS LOGADO

    /*Estilização das páginas de criação de agendamento*/
    TextInput:{
        fontSize:16,
        margin:10,
        borderWidth:1,
        borderColor:'#fff',
        padding:10,
        width:500,
        borderRadius:10,
    },
    textoBotao:{
        color: "black" ,
    },
    task:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:15,
        marginBottom:1,
        backgroundColor: "#fff",
        borderRadius:5,
        shadowColor:"#000",
    },
    Scrollcontainer:{
        flex:1,
        backgroundColor:'#fff',    
        justifyContent:'center',
        alignItems:'center',

    },
    textTask:{
        flex:1,
        fontSize:18,
    },
    completed:{
        textDecorationLine:"line-through",
        color:"#888"
    },
})

