import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { THEME } from '../../assets/style/theme.style';
import { View } from 'react-native';
import { ROUTES } from '../../consts/routes';
import { SignIn } from '../../screens/auths/signin.screen';
import { Welcome } from '../../screens/auths/welcome.screen';
import { ListeCommande } from '../../screens/main/commande.screen';




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
              name={ROUTES.listeCommande}
             component={ListeCommande}/>
          <Tap.Screen
            name={ROUTES.welcome}
            component={Welcome}
          />
          
        </Tap.Navigator>
    );
  }
}
export default MainPartenaireNavigation;