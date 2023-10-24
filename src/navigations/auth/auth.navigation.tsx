import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../../consts/routes';
import { Welcome } from '../../screens/auths/welcome.screen';
import { SignIn } from '../../screens/auths/signin.screen';
import { NavigationContainer } from '@react-navigation/native';
import { EmailConfirmation } from '../../screens/auths/EmailConfirmation.screen';
import { HeaderWelcome } from '../../components/header/headerWelcome.component';
import { HeaderBack } from '../../components/header/headerBack.component';

const Stack = createStackNavigator();

export class AuthNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        
        <Stack.Screen
          name={ROUTES.welcome}
          component={Welcome}
          options={{header: () => null }}
        />
        <Stack.Screen
          name={ROUTES.signIn}
          component={SignIn}
          options={{header: () => <HeaderBack title={'Sign in'}/>}}
        />
         <Stack.Screen
          name={ROUTES.emailConfirmation}
          component={EmailConfirmation}
          options={{header: () => <HeaderBack title={'Confirmation'}/>}}
        />
      </Stack.Navigator>
    );
  }
}