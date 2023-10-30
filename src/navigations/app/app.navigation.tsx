import React, {Component} from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { AuthNavigation } from '../auth/auth.navigation';
import { ROUTES } from '../../consts/routes';
import MainPartenaireNavigation from '../main/mainPartenaire.navigation';
import MainRespoNavigation from '../main/mainRespo.navigation';
import { HeaderAdmin } from '../../components/header/headerAdmin.component';
import { Header } from '../../components/header/header.component';
import MainClientNavigation from '../main/mainClient.navigation';
const Stack = createStackNavigator();
export const navigationRef: any = React.createRef();

export function navigate(name: string) {
  navigationRef.current?.navigate(name);
}
export function goBack(name: string) {
  navigationRef.current?.goBack();
}
export function replace(name: string) {
  navigationRef.current?.replace(name);
}
export class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.authNavigation}
          component={AuthNavigation}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={ROUTES.MainPartenaireNavigation}
          component={MainPartenaireNavigation}
          options={{header: () =><HeaderAdmin/> }}
        />
        <Stack.Screen
          name={ROUTES.MainClientNavigation}
          component={MainClientNavigation}
          options={{header: () =><HeaderAdmin/> }}
        />
        <Stack.Screen
          name={ROUTES.MainRespoNavigation}
          component={MainRespoNavigation}
          options={{header: () =>null }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}