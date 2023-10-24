import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../../consts/routes';
import { Welcome } from '../../screens/auths/welcome.screen';
import { SignIn } from '../../screens/auths/signin.screen';
import { NavigationContainer } from '@react-navigation/native';
import { EmailConfirmation } from '../../screens/auths/EmailConfirmation.screen';

const Stack = createStackNavigator();
export const navigationRef: any = React.createRef();

export function navigate(name: string,params?:any) {
  navigationRef.current?.navigate(name,params);
}
export function goBack() {
  navigationRef.current?.goBack();
}
export function replace(name: string) {
  navigationRef.current?.replace(name);
}
export class AuthNavigation extends Component {
  render() {
    return (<NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        
        <Stack.Screen
          name={ROUTES.welcome}
          component={Welcome}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={ROUTES.signIn}
          component={SignIn}
          options={{header: () => null}}
        />
         <Stack.Screen
          name={ROUTES.emailConfirmation}
          component={EmailConfirmation}
          options={{header: () => null}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}