import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import {THEME} from '../../assets/style/theme.style';
import illustration from '../../assets/imgs/logo2.png';
import {Button} from '../../components/button/Button.component';
import { navigate } from '../../navigations/app/app.navigation';
import { ROUTES } from '../../consts/routes';
const ILLUSTRATION_SIZE = 200;


export class EmailConfirmation extends Component {
  toMainPart = ()=>{
    navigate(ROUTES.MainPartenaireNavigation)
}
toMainClient = ()=>{
  navigate(ROUTES.MainClientNavigation)
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
            {remove&&<Text style={styles.logoTxt}>M</Text>}
            <View>
              <Text style={styles.appName}>{THEME.Text.APP_NAME}</Text>
            </View>
                <TextInput
                  placeholder={'Confirm verification code'}  
                  style={styles.input}
                  placeholderTextColor={THEME.COLOR.black}
                /> 
            <Button  handler={this.toMainPart}>
            Get verification code
            </Button>
            <Button >
              resend Code
            </Button>
          </View>
        )}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLOR.primaryColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: THEME.SPACE.medium,
  },
  appName: {
    fontWeight: 'bold',
    color: THEME.COLOR.black,
    fontSize: THEME.FONT_SIZE.large,
  },
  image: {
    width: ILLUSTRATION_SIZE,
    height: ILLUSTRATION_SIZE,
  },
  input: {
    backgroundColor: THEME.COLOR.gray,
    width: '100%',
    borderRadius: THEME.BORDER_RADIUS.small,
    margin: THEME.SPACE.small,
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
  }
});
