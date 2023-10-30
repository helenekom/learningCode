import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import { THEME } from '../../assets/style/theme.style';


export class Header extends Component{
 
  render() {
    return <View style={styles.container}>
            <Text style={styles.text}>{THEME.Text.APP_NAME}</Text>
        <TouchableOpacity style={styles.container_icon}>
            <FontAwesomeIcon icon={faSearch} color={THEME.COLOR.white} size={THEME.FONT_SIZE.medium} />
            <FontAwesomeIcon icon={faEllipsisV} color={THEME.COLOR.white} size={THEME.FONT_SIZE.medium} />
        </TouchableOpacity>
        
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