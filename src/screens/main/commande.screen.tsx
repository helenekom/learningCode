import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity } from 'react-native'
import illustration from '../../assets/imgs/b.png'
import illustration2 from '../../assets/imgs/logo.png'
import illustration3 from '../../assets/imgs/logo2.png'
import illustration1 from '../../assets/imgs/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Commande } from '../../components/commande/commande.component'
import { THEME } from '../../assets/style/theme.style'
const ICON_SIZE=40
export const listE = [
    {title: "HABIT",
    description: "Toutes marques",
    logo:illustration2,
},
    {title: "VOITURE",
    description: "Toutes marques",
    logo:illustration1,
},
{title: "APPAREILS",
description: "Electronique",
logo:illustration2,
},
{title: "CHAUSSURES",
description: "Toutes marques",
logo:illustration3,
},
{title: "RUIT",
description: "plusieur types",
logo:illustration1,
},
    {title: "MOTO",
    description: "Toute les marques",
    logo:illustration,
},
{title: "MAISON",
description: "Chambre, salon",
logo:illustration2,
},


  ];

export class ListeCommande extends Component{  
 
    render() {
        return (
    <View style={styles.container}>
            {listE.map((i: any) => (
         <Commande title={i.title} description={i.description} logo={i.logo} />
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