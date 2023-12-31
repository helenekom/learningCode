import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity } from 'react-native'
import illustration from '../../assets/imgs/ma.jpg'
import illustration2 from '../../assets/imgs/sze.jpg'
import illustration3 from '../../assets/imgs/zse.jpg'
import illustration1 from '../../assets/imgs/qae.jpg'
import illustration5 from '../../assets/imgs/aaaaz.jpg'
import illustration6 from '../../assets/imgs/erdd.jpg'
import illustration66 from '../../assets/imgs/carte.jpg'
import illustration46 from '../../assets/imgs/phone.jpg'
import { Historique } from '../../components/historique/historique.omponent'
import { THEME } from '../../assets/style/theme.style'

export const listE = [
 
{name: "WIFI",
typeUser: "67778904",
day:"12/02/23",
hour:"HENRI",
image:illustration
},
{name: "MODEM",
typeUser: "68889499",
day:"12/02/23",
hour:"ROSTAND",
image:illustration2
},
{name: "TELEPHONE",
typeUser: "68944554",
day:"12/02/23",
hour:"BABANA",
image:illustration3
},









  ];

export class ListeHistoriqueRespo extends Component{  

    render() {
        return (
    <View style={styles.container}>
            {listE.map((i: any) => (
         <Historique name={i.name} typeUser={i.typeUser} day={i.day} hour={i.hour} image={i.image}/>
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
})