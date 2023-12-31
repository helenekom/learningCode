import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { THEME } from '../../assets/style/theme.style';
import { navigate } from '../../navigations/app/app.navigation';
import { ROUTES } from '../../consts/routes';



export class HeaderWelcome extends Component{
  toSignin = ()=>{
    navigate(ROUTES.signIn)
}
  render() {
    return <View style={styles.container}>
            <Text style={styles.text1}>{THEME.Text.APP_NAME}</Text>
            <View style={styles.containerBtn}>
        <TouchableOpacity  onPress={this.toSignin}>
        <Text style={styles.text2}>{THEME.Text.connexion}</Text>
        </TouchableOpacity>
        </View>
    </View>
  }
}
const SPACE = 50
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLOR.secondaryColor,
    height: SPACE,
    paddingHorizontal:0.5*THEME.SPACE.large,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
   },
   button:{
    borderRadius:THEME.BORDER_RADIUS.small,
    width:3*THEME.SPACE.large,
    alignItems:'center',
    borderWidth:1,
    borderColor:THEME.COLOR.white,
    marginRight:THEME.SPACE.small
   },
   
   text1:{
    color: THEME.COLOR.white,
    marginLeft:THEME.SPACE.small,
    fontWeight: 'bold',
    fontSize:THEME.FONT_SIZE.medium
   },
   text2:{
    color: THEME.COLOR.white,
    fontWeight: 'bold',
    fontSize:THEME.FONT_SIZE.medium
   },
   containerBtn:{
    flexDirection:'row',
    
   }
});