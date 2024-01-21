import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View,Keyboard } from 'react-native'
import { THEME } from '../../assets/style/theme.style'
import { Button } from '../../components/button/Button.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextLink } from '../../components/textLink/TextLink.component';
import { navigate } from '../../navigations/app/app.navigation';
import { ROUTES } from '../../consts/routes';
const ILLUSTRATION_SIZE = 150

export class SignUp extends Component {  
    state = {
        remove: true
    }
  
    toSingin = ()=>{
        navigate(ROUTES.signIn)
    }
    handleKeyboardDidShow= (e:any)=>{
        this.setState({remove:false})
      }
      handleKeyboardDidHide = (e:any)=>{
        this.setState({remove:true})
      }
    keyboardDidShowSub: any;
    keyboardDidHideSub: any;
    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow)
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide)
      }
    componentWillUnmount() {
        this.keyboardDidShowSub.remove()
        this.keyboardDidHideSub.remove()
      }
    render() {
        const { remove} = this.state
        return (
    <View style={styles.container}>
            {remove&&<Text style={styles.logoTxt}>LC</Text>}
            <View>
                <Text style={styles.appName}>LEARNING CODE</Text>
            </View>
            <TextInput placeholder={THEME.Text.name} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput placeholder={THEME.Text.email} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput placeholder={THEME.Text.number} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput placeholder={THEME.Text.password} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <Button >{THEME.Text.signUp}</Button>
            <TextLink handler={this.toSingin}>{THEME.Text.signIn}</TextLink>
        </View>
  )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLOR.primaryColor,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: THEME.SPACE.large
    },
    appName: {
        fontWeight: 'bold',
        color: THEME.COLOR.black,
        fontSize: THEME.FONT_SIZE.large
    },
    image: {
        width: ILLUSTRATION_SIZE,
        height: ILLUSTRATION_SIZE
    },
    input: {
        backgroundColor:THEME.COLOR.gray,
        width: '100%',
        borderRadius: THEME.BORDER_RADIUS.small,
        margin: THEME.SPACE.small,
        color: THEME.COLOR.black
    },
    logoTxt:{

        fontSize: 6*THEME.FONT_SIZE.large,
        color: THEME.COLOR.secondaryColor,
        
        fontFamily: 'Arial',
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width:7, height: 4 },
        textShadowRadius: 14,
      },
})