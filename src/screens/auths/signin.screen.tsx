import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput,  View, Keyboard, TouchableOpacity} from 'react-native'
import illustration from '../../assets/imgs/logo2.png'
import { TextLink } from '../../components/textLink/TextLink.component';
import { THEME } from '../../assets/style/theme.style';
import { Button } from '../../components/button/Button.component';
import { navigate } from '../../navigations/auth/auth.navigation';
import { ROUTES } from '../../consts/routes';
const LOGO_SIZE = 150
const ILLUSTRATION_SIZE = 200


export class SignIn extends Component{
    toEmailC = ()=>{
        navigate(ROUTES.emailConfirmation)
    }
    state = {
        remove: true
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
        {remove&&<Image source={illustration} style={styles.image} />}
            <View>
                <Text style={styles.appName}>{THEME.Text.APP_NAME}</Text>
            </View>
            <TextInput placeholder={THEME.Text.email} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput   placeholder={THEME.Text.password} placeholderTextColor={THEME.COLOR.black} style={styles.input} />
            <Button handler={this.toEmailC}>{THEME.Text.signIn}</Button>
            <Text style={styles.texte}>{THEME.Text.forget_password}</Text>
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
    logo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        marginBottom: THEME.SPACE.medium
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
    texte:{
        color:THEME.COLOR.black,
        
    },
    input: {
        backgroundColor: THEME.COLOR.gray,
        width: '100%',
        borderRadius: THEME.BORDER_RADIUS.small,
        color: THEME.COLOR.black,
        paddingLeft:THEME.SPACE.small
        
      

    }
})