import { faChevronRight, faUser, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View,Keyboard, TouchableOpacity } from 'react-native'
import { THEME } from '../../assets/style/theme.style';
import { Button } from '../../components/button/Button.component';


const ICON_SIZE = 70

export class AddProduit extends Component {  
   
    render() {
        return (
    <View style={styles.container}> 
            <View>
                <Text style={styles.title}>{THEME.Text.CommandeTitle}</Text>
            </View>
            <TouchableOpacity>
            <FontAwesomeIcon icon={faUserCircle} color={THEME.COLOR.secondaryColor} size={ICON_SIZE}/>
            </TouchableOpacity>
            <TextInput placeholder={THEME.Text.CommandeName} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput placeholder={THEME.Text.quantite} style={styles.input} placeholderTextColor={THEME.COLOR.black} />
            <TextInput placeholder={THEME.Text.description} style={styles.input_description} placeholderTextColor={THEME.COLOR.black} />
            <Button  >{THEME.Text.valider}</Button>
        </View>
  )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLOR.white,
        alignItems: 'center',
        padding: THEME.SPACE.large,
        borderRadius:THEME.BORDER_RADIUS.medium,
        borderColor:THEME.COLOR.secondaryColor,
        borderWidth:1
    },
    title: {
        fontWeight: 'bold',
        color: THEME.COLOR.secondaryColor,
        fontSize: THEME.FONT_SIZE.medium,
        marginBottom:THEME.SPACE.medium
    },
    input: {
        backgroundColor:THEME.COLOR.gray,
        width: '100%',
        borderRadius: THEME.BORDER_RADIUS.small,
        margin: THEME.SPACE.small,
        color: THEME.COLOR.black
    },
    input_description:{
        backgroundColor:THEME.COLOR.gray,
        width: '100%',
        height:4*THEME.SPACE.large,
        borderRadius: THEME.BORDER_RADIUS.small,
        margin: THEME.SPACE.small,
        color: THEME.COLOR.black,
        alignItems:"flex-start",
        marginBottom:2*THEME.SPACE.large
    }
})