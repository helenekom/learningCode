import React, {Component} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../assets/style/theme.style';

interface IProps{
    logo:any;
    title:any;
    description:any;
}
const LOGO_SIZE =30
export class Commande extends Component<IProps>{
    render(){
        const{logo,title,description}=this.props
        return (<View style={styles.container}>
             <Image source={logo} style={styles.logo} />
        <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
        borderColor:THEME.COLOR.gray

    },
    logo:{
       height:LOGO_SIZE,
       width:LOGO_SIZE,
       borderRadius:THEME.BORDER_RADIUS.small,
       marginRight:THEME.SPACE.small
    },
    containerText:{

    },
    title:{
        fontWeight:'bold',
        color:THEME.COLOR.black

    },
    description:{

    },
   
})