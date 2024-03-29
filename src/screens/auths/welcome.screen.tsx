
import { Image, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../assets/style/theme.style';
import logo from "../../assets/imgs/logo2.png";
import { ROUTES } from '../../consts/routes';
import { navigate } from '../../navigations/app/app.navigation';
import { Component } from 'react';
import { NextButton } from '../../components/nextButton/NextButton.component';
const BUTTON_SIZE = 70
const LOGO_SIZE=150
const ICON_SIZE=30
export class Welcome extends Component{
    toAccueil = ()=>{
        navigate('accueil')
    }
  
    render(){
        return <View style={styles.container}> 
            <View style={styles.inputContainer}>
            <Text style={styles.logoTxt}>LC</Text>
           
            <Text style={styles.welcomeTxt}>{THEME.Text.welcome}</Text>  
            </View>
            <NextButton handler={this.toAccueil}/>
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