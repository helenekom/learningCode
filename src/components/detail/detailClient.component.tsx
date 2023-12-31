import {  faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../assets/style/theme.style';
import { EXCHANGE_STYLE } from './exchange.style';
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter';
import { MODALS } from '../../consts/modals';
import { AddCommande } from '../../screens/main/addCommandeC.screen';

interface IProps {
    
}

export class DetailClient extends Component<IProps>{
    showAddCom = () => {
        AppEventEmitter.emit(AppEvents.ShowModal, {
            name: MODALS.addCommande, modalChildren: <AddCommande />
        })
    }
    render() {
        
        return <View style={styles.detail} >
        <View style={styles.header}>
            <Text style={styles.text2}> Produit</Text>
        </View>
        
        <View style={styles.row}>
            <FontAwesomeIcon icon={faCircle}  size={20}  style={EXCHANGE_STYLE.marginBotton}  color={THEME.COLOR.secondaryColor} />
            <View style={styles.titleDetail}>
                <Text style={styles.text3}>nom: MODEM</Text>
            </View>
        </View>
        <View style={styles.row}>
            <FontAwesomeIcon icon={faCircle}  size={20}  style={EXCHANGE_STYLE.marginBotton}  color={THEME.COLOR.secondaryColor} />
            <View style={styles.titleDetail}>
                <Text style={styles.text3}>quantite:56</Text>
            </View>
        </View>
        <View style={styles.row}>
            <FontAwesomeIcon icon={faCircle} size={20} style={EXCHANGE_STYLE.marginBotton} color={THEME.COLOR.secondaryColor}/>
            <View style={styles.titleDetail}>
                <Text style={styles.text3}>description: toutes marques </Text>
            </View>
        </View>
        <TouchableOpacity style={[styles.typeCommande, { backgroundColor:  THEME.COLOR.secondaryColor }]} onPress={this.showAddCom}>
                <Text style={styles.spend1}> commander</Text>
            </TouchableOpacity>
    </View>
    } 
}
const styles = StyleSheet.create({
    text1: {
        color: THEME.COLOR.black,
        fontSize: 0.8 * THEME.FONT_SIZE.medium,
        fontWeight: 'bold'
    },
    detail: {
        padding: THEME.SPACE.large,
        borderRadius: THEME.SPACE.small,
        backgroundColor: THEME.COLOR.white3
    },
    titleDetail: {
    alignItems:'center'
    },
    text2: {
        color: THEME.COLOR.black,
        fontSize: THEME.FONT_SIZE.medium,
        fontWeight: 'normal'
    },
    text3: {
        color: THEME.COLOR.black,
        fontSize: 0.8 * THEME.FONT_SIZE.medium,
        fontWeight: "400",
        marginLeft: 1.2*THEME.SPACE.small
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: THEME.SPACE.medium,
    },
    row: {
        borderBottomWidth:0.3 ,
        borderBottomColor:THEME.COLOR.gray,
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginBottom: THEME.SPACE.small,
        paddingTop:THEME.SPACE.small 
    },
    spend1: {
        color: THEME.COLOR.white,
        marginBottom: 0.1*THEME.SPACE.small,
        fontWeight: 'bold'
    },
    typeContainer: {
        borderRadius: 0.3 * THEME.SPACE.small,
        width: 3.5 * THEME.SPACE.large,
        height: 1.5 * THEME.SPACE.medium,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    typeCommande: {
        borderRadius: 0.3 * THEME.SPACE.small,
        width: 4 * THEME.SPACE.large,
        height: 1.5 * THEME.SPACE.medium,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
})