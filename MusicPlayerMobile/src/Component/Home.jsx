import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
// import songs from '../../model/data';
export default function Home() {
  // const Player = async () => {
  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.add(songs);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/image/WallpaperAnime.png')}
        />
      </View>
      <View style={styles.Card}>
        <Image
          style={styles.icon}
          source={require('../assets/Icon/Prec.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/Icon/play-button.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/Icon/next-button.png')}
        />
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
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
    height: 200,
    width: Dimensions.get('window').width,
    borderRadius: 30,
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 30,
    width: 50,
    height: 50,
  },
});
