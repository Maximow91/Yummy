import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from './AuthStack/AuthStack';
import {DrawerNavigator} from './Drawer/Drawer';
import {TabNavigator} from './Tabs/Tabs';

export const AppNavigator = () => {
  const isAuth = true;
  return (
    <NavigationContainer>
      {isAuth ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
