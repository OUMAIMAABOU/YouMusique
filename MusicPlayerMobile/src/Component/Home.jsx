import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {playSong} from '../tools/ReadFile';

export default function Home() {
  const [data, setData] = useState({});
  const [load, setload] = useState(false);
  const [isPlaying, SetisPlaying] = useState(false);

  const progress = useProgress();
  const Sliderr = Value => {
    TrackPlayer.seekTo(Value);
  };
  const getDataFromStorage = async () => {
    let storage = (await AsyncStorage.getItem('key')) || '[]';
    setData(JSON.parse(storage));
    setload(true);
  };

  useEffect(() => {
    getDataFromStorage();
  }, [load]);
  const renderItem = ({item}) => (
    <View style={styles.Card}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/image/Inner.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          onPress={() => playSong(item, parseInt(item.id))}
          style={[styles.paragraph, styles.Title]}>
          {item.title}
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.TitleG}>Favorite</Text>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.PlayContainer}>
        <View>
          <Slider
            style={{width: 300, height: 40, marginTop: 20}}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor="#FFC8D0"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFC8D0"
            value={progress.position}
            step={1}
            onValueChange={Sliderr}
          />
        </View>
        <View style={styles.Play}>
          <TouchableOpacity
            onPress={() => {
              if (isPlaying == true) {
                TrackPlayer.pause();
                SetisPlaying(false);
              } else {
                TrackPlayer.play();
                SetisPlaying(true);
              }
            }}>
            <Image
              style={styles.icon}
              source={
                isPlaying
                  ? require('../assets/Icon/pause.png')
                  : require('../assets/Icon/play.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    opacity: 0.9,
  },
  Card: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    width: 285,
  },
  Title: {
    color: '#34495e',
  },
  TitleG: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  Play: {
    flexDirection: 'row',
  },
  PlayContainer: {
    flexDirection: 'row',
    margin: 90,
    justifyContent: 'center',
    bottom: -270,
    height: 260,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: '#fff',
  },
});
