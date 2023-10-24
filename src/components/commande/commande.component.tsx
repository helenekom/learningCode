import React, {Component} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../assets/style/theme.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter';
import { AddCommande } from '../../screens/main/addCommande.screen';
import { MODALS } from '../../consts/modals';

interface IProps{
    logo:any;
    title:any;
    description:any;
}
const LOGO_SIZE =50
const ICON_SIZE=30
export class Commande extends Component<IProps>{
    showAddGroupe = () => {
        AppEventEmitter.emit(AppEvents.ShowModal, {
            name: MODALS.addCommande, modalChildren: <AddCommande />
        })
    }
    render(){
        const{logo,title,description}=this.props
        return (<View style={styles.container}>
            <View style={{flexDirection:'row'}}>
             <Image source={logo} style={styles.logo} />
        <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.AddButton} onPress={this.showAddGroupe} >
        <FontAwesomeIcon icon={faPlusCircle} color={THEME.COLOR.secondaryColor} size={ICON_SIZE}/>
    </TouchableOpacity> 
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
    AddButton:{
        padding:THEME.SPACE.medium,
       justifyContent:'space-between',
      
        marginBottom: THEME.SPACE.small,
        
    }
   
})