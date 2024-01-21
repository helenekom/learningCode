
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../assets/style/theme.style';
import logo from "../../assets/imgs/aaa.jpg";
import { ROUTES } from '../../consts/routes';
import { navigate } from '../../navigations/app/app.navigation';
import { Component } from 'react';
import { NextButton } from '../../components/nextButton/NextButton.component';
import { Button } from '../../components/button/Button.component';
const BUTTON_SIZE = 70
const LOGO_SIZE=150
const ICON_SIZE=30
export class Accueil extends Component{
    toSignUp = ()=>{
        navigate('signUp')
    }
    MainClientNavigation = ()=>{
        navigate('MainClientNavigation')
    }
    
    render(){
        return <View style={styles.container}> 
            <View style={styles.inputContainer}>
           
            <Image style={styles.image} source={logo}/>
            <Text style={styles.title}>Apprendre a coder</Text>  
            <Text style={styles.Stitle}>maitrisez les compestances necessaire pour lire et ecrire du code, creer des applications et des jeux, et faire progresser votre carriere </Text>
            </View>
            <Button handler={this.toSignUp}>{THEME.Text.commencer}</Button>
            <TouchableOpacity onPress={this.MainClientNavigation} >
            <Text style={styles.textB}>Jai deja un compte</Text>  
            </TouchableOpacity>
        </View>
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: THEME.COLOR.primaryColor,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: THEME.SPACE.medium,

    },
    Stitle:{
alignItems:'center',
fontSize:24,
textAlign:'center',
color:'black'

    },
    textB:{
        color:'blue',
        fontSize:20
    },
    image:{
width:300,
height:300
    },
    nextButton:{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE/2,
        backgroundColor: THEME.COLOR.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: THEME.SPACE.large
    },
    logo:{
        marginTop:THEME.SPACE.large,
        marginBottom:THEME.SPACE.large,
        width: LOGO_SIZE,
        height: LOGO_SIZE,
       
    },
    title:{
color:'black',
fontSize:40,
fontWeight:'bold',

    },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeTxt:{
    fontSize: THEME.FONT_SIZE.large,
    color: "black",
    fontWeight: "bold",
  },
  logoTxt:{

    fontSize: 6*THEME.FONT_SIZE.large,
    color: THEME.COLOR.secondaryColor,
    
    fontFamily: 'Arial',
    fontWeight: "bold",
    textShadowColor: 'black',
    textShadowOffset: { width:7, height: 4 },
    textShadowRadius: 14,
  }
})