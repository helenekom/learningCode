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
 
{name: "Nguebs Besos",
typeUser: "Admin",
day:"12/02/23",
hour:"19H50",
image:illustration
},
{name: "Pablo escobar",
typeUser: "eleve",
day:"12/02/23",
hour:"20H50",
image:illustration2
},
{name: "Alino vegos",
typeUser: "manager",
day:"12/02/23",
hour:"9H50",
image:illustration3
},
{name: "El proffesor",
typeUser: "RespoClasse",
day:"12/02/23",
hour:"9H50",
image:illustration1
},
{name: "ndiguimite",
typeUser: "Admin",
day:"12/02/23",
hour:"9H50",
image:illustration
},
{name: "Ddi tali",
typeUser: "manager",
day:"12/02/23",
hour:"9H50",
image:illustration2
},
{name: "Python vegas ",
typeUser: "eleve",
day:"12/02/23",
hour:"9H50",
image:illustration3
},
{name: "Thales",
typeUser: "enseignant",
day:"12/02/23",
hour:"9H50",
image:illustration1
},
{name: "Amen Distra",
typeUser: "enseignant",
day:"12/02/23",
hour:"9H50",
image:illustration2
},
{name: "Malta gerard",
typeUser: "Admin",
day:"12/02/23",
hour:"9H50",
image:illustration3
},
{name: "Alain beber",
typeUser: "eleve",
day:"12/02/23",
hour:"9H50",
image:illustration1
},
{name: "Jeff Rost",
typeUser: "Admin",
day:"12/02/23",
hour:"9H50",
image:illustration3
},
{name: "Maman",
typeUser: "eleve",
day:"12/02/23",
hour:"9H50",
image:illustration1
},
  ];

export class ListeHistorique extends Component{  

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