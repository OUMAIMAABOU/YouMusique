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
import {ReadFile, FavoriteMusic, playSong} from '../tools/ReadFile';
import {setupTrackPlayer} from '../tools/TrackPlayer';
import duration from '../tools/ConvertTime';

export default function PlayMusic() {
  const route = useRoute();
 
  const [isPlaying, SetisPlaying] = useState(false);
  const [info, Setinfo] = useState({});
  const [id, Setid] = useState(0);

  const idTrack = route.params;
  const progress = useProgress();
  const Sliderr = Value => {
    TrackPlayer.seekTo(Value);
  };
  const getTrackInfo = async trackId => {
    const {title, url, id} = (await TrackPlayer.getTrack(trackId)) || {};
    Setinfo({id: id, url: url, title: title});
  };
  const getCurrentTrack = async () => {
    getTrackInfo(await TrackPlayer.getCurrentTrack());
    Setid(await TrackPlayer.getCurrentTrack());
  };
  const readSong = async () => {
    playSong(await ReadFile(), parseInt(idTrack?.id));
    SetisPlaying(true);
  };
  useEffect(() => {
    try {
      readSong();
      setupTrackPlayer();
      getCurrentTrack();
    } catch (error) {
      console.error(error);
    }
  }, [idTrack]);

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
          <TouchableOpacity onPress={() => FavoriteMusic(info)}>
            <Image
              style={styles.favorite}
              source={require('../assets/Icon/favorite.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.paragraph2}>{info.title}</Text>
        </View>
        <View>
          <Slider
            style={{width: 400, height: 40, marginTop: 20}}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor="#FFC8D0"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFC8D0"
            value={progress.position}
            step={1}
            onValueChange={Sliderr}
          />
          <View style={styles.time}>
            <Text> {duration(progress.position)}</Text>
            <Text>{duration(progress.duration)}</Text>
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
