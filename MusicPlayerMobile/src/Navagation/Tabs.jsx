import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Component/Home';
import PlayList from '../Component/PlayList';
import Subtitle from '../Component/subtitle';
import PlayMusic from '../Component/playMusic';

import {StyleSheet, Image, View} from 'react-native';
const tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <tab.Navigator
      screenOptions={{
        activeTintColor: 'red',
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
        name="PlayList"
        component={PlayList}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/music-notes.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="playMusic"
        component={PlayMusic}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/musical-note.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="subtitle"
        component={Subtitle}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/microphone.png')}
            />
          ),
        }}
      />

      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/love.png')}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image: {
    tintColor: 'white',
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
