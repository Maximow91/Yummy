import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreen} from '../../screens/CartScreen/CartScreen';
import {MainStackNavigator} from '../MainStack/MainStack';

export type TabsParamList = {
  MainStack: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Menu',
        }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
