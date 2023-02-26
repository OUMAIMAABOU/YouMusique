import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {ReadFile} from '../tools/ReadFile';
import {setupTrackPlayer} from '../tools/TrackPlayer';

export default function PlayMusic() {
  const route = useRoute();
  if (!global.OneTime) {
    TrackPlayer.setupPlayer();
    global.OneTime = true;
  }
  const [isPlaying, SetisPlaying] = useState(false);
  const [Time, SetTime] = useState(0);
  1;
  const idTrack = route.params;
  const progress = useProgress();
  const Sliderr = Value => {
    TrackPlayer.seekTo(Value);
  };
  const playSong = async () => {
    try {
      TrackPlayer.add(await ReadFile());
      TrackPlayer.skip(parseInt(idTrack?.id));
      TrackPlayer.play();
      SetisPlaying(true);
    } catch (error) {
      console.error(error);
    }
  };
  // async function getTrackInfo(trackId) {
  //   const {title} = TrackPlayer.getTrack(trackId) || {};
  //   Setinfo(title);
  // }
  useEffect(() => {
    try {
      playSong();
      setupTrackPlayer();
    } catch (error) {
      console.error(error);
    }
  }, [idTrack]);
  console.log(idTrack);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/image/WallpaperAnime.png')}
        />
      </View>
      <View style={styles.Card}>
        <View style={styles.title}>
          <Text style={styles.paragraph}>NEFFEX</Text>
          <Image
            style={styles.favorite}
            source={require('../assets/Icon/favorite.png')}
          />
        </View>
        <View>
          <Text style={styles.paragraph2}>{idTrack?.Title}</Text>
        </View>
        <View>
          <Slider
            style={{width: 400, height: 40, marginTop: 20}}
            minimumValue={0}
            maximumValue={200}
            minimumTrackTintColor="#FFC8D0"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFC8D0"
            value={progress.position}
            step={1}
            onValueChange={Sliderr}
          />
          <View style={styles.time}>
            <Text>0.00</Text>
            <Text>2.5</Text>
          </View>
        </View>
        <View style={styles.Play}>
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToNext();
            }}>
            <Image
              style={[styles.iconF, styles.Next_pre]}
              source={require('../assets/Icon/previous.png')}
            />
          </TouchableOpacity>

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
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToPrevious();
            }}>
            <Image
              style={[styles.icon, styles.Next_pre]}
              source={require('../assets/Icon/next.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    alignItems: 'center',
    opacity: 0.9,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    color: '#FFFFFF',
  },
  paragraph2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    opacity: 0.9,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  Card: {
    backgroundColor: '#171717',
    position: 'absolute',
    bottom: -60,
    height: 340,
    width: Dimensions.get('window').width,
    borderRadius: 30,
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingTop: 1,
    marginBottom: 30,
  },
  Play: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 60,
    width: 60,
    height: 60,
    tintColor: '#fff',
  },
  iconF: {
    marginLeft: 20,
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  favorite: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginEnd: 20,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  Next_pre: {
    width: 20,
    height: 20,
    marginTop: 19,
  },
});
