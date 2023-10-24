import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, {Component} from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../../assets/style/theme.style'
const BUTTON_SIZE = 80
const ICON_SIZE=30

interface IProps{
    handler:any;
}
export class NextButton extends Component<IProps>{
    render(){
        return <TouchableOpacity style={styles.nextButton} onPress={this.props.handler}>
        <FontAwesomeIcon icon={faChevronRight} color={THEME.COLOR.secondaryColor} size={ICON_SIZE}/>
    </TouchableOpacity>
    }
} 

const styles= StyleSheet.create({
    nextButton:{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE/2,
        backgroundColor: THEME.COLOR.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2*THEME.SPACE.large
    }
})