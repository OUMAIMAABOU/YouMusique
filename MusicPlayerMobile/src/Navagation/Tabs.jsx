import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Companane/Home';
import PlayList from '../Companane/PlayList';
import {StyleSheet} from 'react-native/types';
const tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'dark',
        },
      }}>
      <tab.Screen name="home" component={Home} />
      <tab.Screen name="PlayList" component={PlayList} />
    </tab.Navigator>
  );
}
