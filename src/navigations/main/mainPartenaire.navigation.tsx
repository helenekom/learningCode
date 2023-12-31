import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { THEME } from '../../assets/style/theme.style';
import { View } from 'react-native';
import { ROUTES } from '../../consts/routes';
import { SignIn } from '../../screens/auths/signin.screen';
import { Welcome } from '../../screens/auths/welcome.screen';
import { ListeCommande } from '../../screens/main/commande.screen';
import { AddCommande } from '../../screens/main/addProduit.screen';
import { ListeHistorique } from '../../screens/main/listeHistorique.screen';
import { ListeCommandeClient } from '../../screens/main/commandeClient.screen';
import { ListeCommandePartenaire } from '../../screens/main/commandePartenaire.screen';
import { ListeHistoriquePartenaire } from '../../screens/main/listeHistoriquePartenaire.screen';
import { ListeProduitP } from '../../screens/main/fournisseur.screen';




const Tap = createMaterialTopTabNavigator();

class MainPartenaireNavigation extends Component {
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
            name={'all produit'}
            component={ListeProduitP}
          />
           <Tap.Screen
              name={' mes produit'}
             component={ListeCommande}/>
          <Tap.Screen
            name={'commande'}
            component={ListeHistoriquePartenaire}
          />
         
          
        </Tap.Navigator>
    );
  }
}
export default MainPartenaireNavigation;