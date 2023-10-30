import React, {Component} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../assets/style/theme.style';

interface IProps{
    image:any;
    name:any;
    typeUser:any;
    hour:any;
    day:any;
}
const LOGO_SIZE =30
export class Historique extends Component<IProps>{
    render(){
        const{image,name,typeUser,hour,day}=this.props
        return (<View style={styles.container}>
             <Image source={image} style={styles.image} />
        <View style={styles.containerText1}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.typeUser}>{typeUser}</Text>
        </View>
        <View style={styles.containerText2}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.day}>{day}</Text>
        </View>
    </View>
    )
    }
} 

const styles= StyleSheet.create({
        container:{
        width:"100%",
        height:THEME.HEIGHT.input,
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:0.1*THEME.SPACE.small,
        borderColor:THEME.COLOR.gray,
        justifyContent:"space-between"

    },
    image:{
       height:LOGO_SIZE,
       width:LOGO_SIZE,
       borderRadius:THEME.BORDER_RADIUS.small,
       marginRight:THEME.SPACE.small
    },
    containerText1:{
        width:"70%"
    },
    containerText2:{
        alignItems:"center"
    },
    name:{
        fontWeight:'bold',
        color:THEME.COLOR.black

    },
    typeUser:{

    }, hour:{

    },
    day:{

    },
   
})