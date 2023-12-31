import React, {Component} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../assets/style/theme.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter';

import { MODALS } from '../../consts/modals';
import { Detail } from '../detail/transactionDetail.component.';

interface IProps{
    logo:any;
    title:any;
    description:any;
    number:any;
}
const LOGO_SIZE =50
const ICON_SIZE=30
export class CommandeV extends Component<IProps>{
   
    render(){
        const{logo,title,description,number}=this.props
        return (<View style={styles.container}>
            <TouchableOpacity >
            <View style={{flexDirection:'row'}}>
             <Image source={logo} style={styles.logo} />
             <View style={{flexDirection:'row'}}>   
        <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text >{description}</Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>
        <View style={styles.number}>
        <Text style={styles.textNumber}>{number}</Text>
        </View>
    </View>
    )
    }
} 

const styles= StyleSheet.create({
        container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:0.1*THEME.SPACE.small,
        borderColor:THEME.COLOR.gray,
        marginBottom:THEME.SPACE.medium,
        justifyContent:'space-between',

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
        color:THEME.COLOR.black,


    },
    description:{

    },
    number:{
        
        borderRadius:THEME.BORDER_RADIUS.medium,
        backgroundColor:THEME.COLOR.secondaryColor,
        width:'7%',
        
            },
            textNumber:{
                textAlign:'center',
                color:THEME.COLOR.primaryColor,
                fontWeight:'bold',
        
            },
            AddButton:{
                padding:THEME.SPACE.medium,
               justifyContent:'space-between',
              
                marginBottom: THEME.SPACE.small,
                
            }
   
})