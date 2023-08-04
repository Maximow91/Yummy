import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../../screens/ProfileScreen/ProfileScreen';
import {SettingsScreen} from '../../screens/SettingsScreen/SettingsScreen';
import {TabNavigator} from '../Tabs/Tabs';

export type DrawerParamList = {
  Profile: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
