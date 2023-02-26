import {useEffect, useState} from 'react';
import axios from 'axios';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {getLyrics, getSong} from 'genius-lyrics-api';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

export default function Subtitle() {
  const [lyricss, setL] = useState({});
  const [isPlaying, SetisPlaying] = useState(false);
  const [id, SetId] = useState('');
  const [titleSong, setTitle] = useState('');
  const [ArtistName, setArtistName] = useState('');
  const [datas, setdata] = useState(false);

  const apiKey =
    'd75QoxXBbUqS9y9GFB-M4mTk7HLVOAKc7sp25sOGnJLk6tpj4EneVl2q0Mgj5zoI';

  const options = {
    apiKey: 'd75QoxXBbUqS9y9GFB-M4mTk7HLVOAKc7sp25sOGnJLk6tpj4EneVl2q0Mgj5zoI',
    title: titleSong,
    artist: ArtistName,
    optimizeQuery: true,
  };
  const songs = id => {
    const apiUrl = `https://api.genius.com/songs/${id}?access_token=d75QoxXBbUqS9y9GFB-M4mTk7HLVOAKc7sp25sOGnJLk6tpj4EneVl2q0Mgj5zoI`;
    fetch(apiUrl)
      .then(response => console.log(response))
      .then(data => {
        const audioUrl = data.response.song; // assuming the audio URL is in the first media object
        console.log(audioUrl);
      });
  };
  const handleTitle = value => {
    setTitle(value);
  };
  const handleArtist = value => {
    setArtistName(value);
  };

  const getSongs = () => {
    getSong(options).then(song => {
      play(song);
      songs(song.id);
      setL(song);
    });
  };
  console.log(titleSong);
  console.log(ArtistName);

  const progress = useProgress();
  const Sliderr = Value => {
    TrackPlayer.seekTo(Value);
  };
  const play = async song => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.add({
      url: 'https://genius.com/songs/4822757/apple_music_player',
    });
    // TrackPlayer.skip(song.id);
    TrackPlayer.play();
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        onChangeText={value => handleTitle(value)}
        value={titleSong}
        placeholder="Title song"
        style={styles.input}
      />
      <TextInput
        onChangeText={value => handleArtist(value)}
        value={ArtistName}
        placeholder="artist"
        style={styles.input}
      />
      <TouchableOpacity onPress={() => getSongs()}>
        <View style={styles.save}>
          <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
        </View>
      </TouchableOpacity>

      <View>
        {/* <Image source={lyricss.albumArt} /> */}
        <Text>{lyricss.lyrics}</Text>
        <Text>{lyricss.id}</Text>
        <Text>{lyricss.albumArt}</Text>

        <Text>{lyricss.title}</Text>
        <Text>{lyricss.url}</Text>
      </View>
      <View style={styles.PlayContainer}>
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
  Play: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  PlayContainer: {
    // position: 'absolute',
    // bottom: -60,
  },
  icon: {
    // marginLeft: 10,
    width: 60,
    height: 60,
    tintColor: '#fff',
  },

  input: {
    marginBottom: 20,
    marginLeft: 50,
    height: 48,
    width: 300,
    borderWidth: 1,
    borderRadius: 34,
    padding: 10,
    paddingLeft: 18,
    fontSize: 18,
    borderColor: '#FFC8D0',
  },
  save: {
    padding: 10,
    marginHorizontal: 90,
    borderRadius: 34,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#FFC8D0',
    opacity: 0.8,
  },
});
