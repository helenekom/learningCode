import React, {Component} from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'
import { THEME } from '../../assets/style/theme.style';

interface IProps{
    handler?:any;
    children:any;
}
export class TextLink extends Component<IProps>{
    render(){
        return <TouchableOpacity  onPress={this.props.handler}>
            <Text style={styles.text}>{this.props.children}</Text>
    </TouchableOpacity>
    }
} 

const styles= StyleSheet.create({
    text:{
        color:THEME.COLOR.black
    }
})