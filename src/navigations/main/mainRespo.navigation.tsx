import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { THEME } from '../../assets/style/theme.style';
import { View } from 'react-native';
import { ROUTES } from '../../consts/routes';
import { SignIn } from '../../screens/auths/signin.screen';
import { Welcome } from '../../screens/auths/welcome.screen';
import { ListeCommande } from '../../screens/main/commande.screen';
import { ListeHistorique } from '../../screens/main/listeHistorique.screen';
import { ListeCommandeRespo } from '../../screens/main/commandeRespo.screen';
import { ListeHistoriqueRespo } from '../../screens/main/listeHistoriqueRespo.screen';
import { ListeFournisseurs } from '../../screens/main/listeFournisseurs.screen';




const Tap = createMaterialTopTabNavigator();

class MainRespoNavigation extends Component {
  render() {
    return (
        <Tap.Navigator
          tabBarOptions={{
            
            labelStyle: {
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: 16,
            },
            activeTintColor: THEME.COLOR.primaryColor,
            indicatorStyle: {
              backgroundColor: THEME.COLOR.primaryColor,
              height: 5,
            },
            inactiveTintColor: THEME.COLOR.black,

            style: {
              elevation: 0,
              backgroundColor: THEME.COLOR.secondaryColor,
             
            },
          }}
          
          >
            <Tap.Screen
              name={'produits'}
             component={ListeCommandeRespo}/>
          <Tap.Screen
            name={'commande'}
            component={ListeHistoriqueRespo}
          />
          <Tap.Screen
            name={'fournisseurs'}
            component={ListeFournisseurs}
          />
          
        </Tap.Navigator>
    );
  }
}
export default MainRespoNavigation;