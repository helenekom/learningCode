import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Commande } from '../../components/commande/commande.component'
import { THEME } from '../../assets/style/theme.style'
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter'
import { MODALS } from '../../consts/modals'
import { AddProduit } from './addProduit.screen'
import { Fournisseurs } from '../../components/commande/fournisseur.component'
const ICON_SIZE=40
export const listE = [
    {title: "Brice",
    description: "Toutes marques",
    logo:faCircleUser,
    number:56556567
},
    {title: "eddy",
    description: "HABITS",
    logo:faCircleUser,
    number:45667765
},
{title: "babana",
description: "Electronique",
logo:faCircleUser,
number:44555556
},
{title: "abdel",
description: "TELEPHONE",
logo:faCircleUser,
number:75555555
},
{title: "aymric",
description: "ORDINATEUR",
logo:faCircleUser,
number:5445566
},
    {title: "Goran",
    description: "appareil",
    logo:faCircleUser,
    number:677777777
},


  ];

export class ListeFournisseurs extends Component{  
  
    render() {
        
        return (<View style={styles.container}>
            {listE.map((i: any) => (
         <Fournisseurs title={i.title} description={i.description} number={i.number} />
       ))}  
       
       
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR.primaryColor,
        alignItems: 'center',
        padding: THEME.SPACE.large, 
        
    },
    AddButton:{
        padding:THEME.SPACE.medium,
        position:'absolute',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: THEME.SPACE.small,
        bottom:0
    }
})