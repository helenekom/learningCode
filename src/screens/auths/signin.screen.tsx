import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput,  View, Keyboard, TouchableOpacity, ActivityIndicator} from 'react-native'
import { THEME } from '../../assets/style/theme.style';
import { Button } from '../../components/button/Button.component';
import { ROUTES } from '../../consts/routes';
import { navigate } from '../../navigations/app/app.navigation';
const LOGO_SIZE = 150
const ILLUSTRATION_SIZE = 200


export class SignIn extends Component{

    timer=()=>{
        this.setState({show:true})
        setTimeout(()=>{
           
            if(this.state.email==='fournisseur@gmail.com'&&this.state.psw==='fournisseur7777'){
                navigate(ROUTES.MainPartenaireNavigation)
            }else
             if(this.state.email==='admin@gmail.com'&&this.state.psw==='admin7777'){
                navigate(ROUTES.MainRespoNavigation)
            }
            else
             if(this.state.email==='etudiant@gmail.com'&&this.state.psw==='etudiant7777'){
                navigate(ROUTES.MainClientNavigation)
            }else{
                this.setState({show:false})
            }
            
        },200)
    }
    toSignup = ()=>{
        navigate(ROUTES.signUp)
    }
    toMainPart = ()=>{

       
    }
    state = {
        remove: true,
        show:false,
        email:'',
        psw:''
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
        console.log(this.state.email,'zzzzzz')
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
        
        {remove&& <Text style={styles.logoTxt}>LC</Text>}
            <View>
                <Text style={styles.appName}>LEARNING CODE</Text>
            </View>
            <TextInput onChangeText={(e)=>this.setState({email:e})} placeholder={THEME.Text.email} style={styles.input} placeholderTextColor={THEME.COLOR.black} />

            
            <TextInput  onChangeText={(e)=>this.setState({psw:e})}  placeholder={THEME.Text.password} placeholderTextColor={THEME.COLOR.black} style={styles.input} />
          
            {
                this.state.show?
                <ActivityIndicator/>:
                <Button handler={this.timer}>{THEME.Text.signIn}</Button>
                
                
            }
            
           <TouchableOpacity onPress={this.toSignup}>
            <Text style={styles.texte}>{THEME.Text.signUp}</Text>
            </TouchableOpacity>
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