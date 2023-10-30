import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { THEME } from '../../assets/style/theme.style';import { navigate } from '../../navigations/app/app.navigation';
import { ROUTES } from '../../consts/routes';
;


export class HeaderAdmin extends Component{

  render() {
    return <View style={styles.container}>
            <Text style={styles.text}>{THEME.Text.APP_NAME}</Text>
        <View style={styles.container_icon}>
            <TouchableOpacity >
            <FontAwesomeIcon icon={faSearch} color={THEME.COLOR.white} size={THEME.FONT_SIZE.medium} />
            </TouchableOpacity>
            <TouchableOpacity >
            <FontAwesomeIcon icon={faEllipsisV} color={THEME.COLOR.white} size={THEME.FONT_SIZE.medium} />
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
    padding: THEME.SPACE.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   },
   container_icon:{
    width:SPACE,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   
   text:{
    color: THEME.COLOR.white,
    fontWeight: 'bold',
    fontSize:THEME.FONT_SIZE.medium
   }
});