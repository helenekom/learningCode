import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import illustration from '../../assets/imgs/ma.jpg'
import illustration2 from '../../assets/imgs/sze.jpg'
import illustration3 from '../../assets/imgs/zse.jpg'
import illustration1 from '../../assets/imgs/qae.jpg'
import illustration5 from '../../assets/imgs/aaaaz.jpg'
import illustration6 from '../../assets/imgs/erdd.jpg'
import illustration66 from '../../assets/imgs/carte.jpg'
import illustration46 from '../../assets/imgs/phone.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Commande } from '../../components/commande/commande.component'
import { THEME } from '../../assets/style/theme.style'
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter'
import { MODALS } from '../../consts/modals'
import { AddCommande } from './addCommandeC.screen'
import { CommandeClient } from '../../components/commande/commandeClient.component'

const ICON_SIZE=40
export const listE = [
    {title: "MODEM",
    description: "Toutes marques",
    logo:illustration2,
    number:56
},
    {title: "TELEPHONE",
    description: "Toutes marques",
    logo:illustration1,
    number:4
},
{title: "CARTE CREDIT",
description: "Electronique",
logo:illustration5,
number:44
},
{title: "TELEPHONE",
description: "Toutes marques",
logo:illustration3,
number:7
},
{title: "CREDIT",
description: "plusieur pack",
logo:illustration6,
number:5
},
    {title: "MODEM",
    description: "Toute les marques",
    logo:illustration,
    number:4
},
{title: "TELEPHONE",
description: "Toutes les marques",
logo:illustration46,
number:5
},



  ];

export class ListeCommandeClient extends Component{  
    showAddCommande = () => {
        AppEventEmitter.emit(AppEvents.ShowModal, {
            name: MODALS.addCommande, modalChildren: <AddCommande />
        })
    }
    render() {
        
        return (<View style={styles.container}>
            {listE.map((i: any) => (
         <CommandeClient title={i.title} description={i.description} logo={i.logo} number={i.number} />
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