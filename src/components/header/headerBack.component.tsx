import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBackward, faBackwardFast, faHandBackFist, faHistory, faLeftLong, faMessage, faRightLeft, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { THEME } from '../../assets/style/theme.style';import { goBack } from '../../navigations/app/app.navigation';
import { ROUTES } from '../../consts/routes';
;

interface IProps{
    title:any;
}

export class HeaderBack extends Component<IProps>{
  toBack = ()=>{
    goBack(ROUTES.welcome)
}
  render() {
    const {title}=this.props
    return <View style={styles.container}>
        <TouchableOpacity onPress={this.toBack} style={styles.icone}>
            <FontAwesomeIcon icon={faArrowLeft} color={THEME.COLOR.secondaryColor} size={THEME.FONT_SIZE.large} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
    </View>
  }
}
const SPACE = 50
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLOR.primaryColor,
    height: SPACE,
    flexDirection: 'row',
  
    alignItems: 'center'
   },
   icone:{
    marginLeft:THEME.SPACE.large,
    marginRight:THEME.SPACE.large,
   },
   text:{
    color: THEME.COLOR.white,
    fontWeight: 'bold',
    fontSize:THEME.FONT_SIZE.medium
   }
});