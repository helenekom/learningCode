import React, { Component } from 'react'
import { Image, StyleSheet,TextInput,View } from 'react-native'
import illustration from '../../assets/imgs/ma.jpg'
import illustration2 from '../../assets/imgs/sze.jpg'
import illustration3 from '../../assets/imgs/zse.jpg'
import illustration1 from '../../assets/imgs/qae.jpg'
import illustration5 from '../../assets/imgs/aaaaz.jpg'
import illustration6 from '../../assets/imgs/erdd.jpg'
import illustration66 from '../../assets/imgs/carte.jpg'
import illustration46 from '../../assets/imgs/phone.jpg'
import { THEME } from '../../assets/style/theme.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '../../navigations/app/app.navigation'
import { ROUTES } from '../../consts/routes'
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

export class ProduitWelcome extends Component{ 
    toSignUp = ()=>{
        navigate(ROUTES.signUp)
    } 
    render() {
        return (
    <View style={styles.container}>
       
        <TextInput placeholder={THEME.Text.recherche} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
        
            {listE.map((i: any) => (
        
         <CommandeClient title={i.title} description={i.description} logo={i.logo} number={'4'}/>
       
       ))}  
        </View>
  )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: THEME.COLOR.primaryColor,
        alignItems: 'center',
        padding: THEME.SPACE.large, 
        
    },
    input: {
        
        backgroundColor:THEME.COLOR.gray,
        width: '100%',
        borderRadius: THEME.BORDER_RADIUS.small,
        margin: THEME.SPACE.small,
        color: THEME.COLOR.black
    }
})