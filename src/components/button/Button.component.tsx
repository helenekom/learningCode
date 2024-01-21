import React, {Component} from 'react'
import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import { THEME } from '../../assets/style/theme.style'


interface IProps{
    handler?:any;
    children:any;
}
export class Button extends Component<IProps>{
    render(){
        return <TouchableOpacity style={styles.nextButton} onPress={this.props.handler}>
        <Text style={styles.text}>{this.props.children}</Text>
    </TouchableOpacity>
    }
} 

const styles= StyleSheet.create({
    nextButton:{
        width: "100%",
        height: 1.2*THEME.HEIGHT.button,
        borderRadius:THEME.BORDER_RADIUS.medium,
        backgroundColor: THEME.COLOR.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        margingTop: THEME.SPACE.small,
        marginBottom: THEME.SPACE.small
    },
    text:{
        color: THEME.COLOR.white,
        fontSize:25,
        fontWeight:'bold'
    }
})