import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Component/Home';
import PlayList from '../Component/PlayList';
import Icon from 'react-native-vector-icons/Entypo';

import {StyleSheet, Image, View} from 'react-native';
const tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            backgroundColor: '#171717',
            borderRadius: 30,
            bottom: 30,
            height: 70,
          },
        ],
      }}>
      <tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/home-3-32.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Icon name="home" size={30} />,
        }}
      />
    </tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image: {
    color: 'red',
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
