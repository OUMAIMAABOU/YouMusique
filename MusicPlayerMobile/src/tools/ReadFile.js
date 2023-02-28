import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackPlayer from 'react-native-track-player';

export const ReadFile = () => {
  const tab = [];
  return RNFS.readDir(
    RNFS.ExternalStorageDirectoryPath + '/snaptube/download/SnapTube Audio',
  ).then(contents => {
    for (let content in contents) {
      if (contents[content]['name'].endsWith('.mp3')) {
        tab.push({
          id: content,
          url: contents[content]['path'],
          title: contents[content]['name'],
        });
      }
    }
    return tab;
  });
};

export const FavoriteMusic = async music => {
  let data = (await AsyncStorage.getItem('key')) || '[]';
  data = JSON.parse(data);
  data.push(music);
  await AsyncStorage.setItem('key', JSON.stringify(data));
};

export const playSong = async (song, id) => {
  try {
    if (!global.OneTime) {
      TrackPlayer.setupPlayer();
      global.OneTime = true;
    }
    await TrackPlayer.add(song);
    await TrackPlayer.skip(id);
    await TrackPlayer.play();
  } catch (error) {
    console.error(error);
  }
};

// const playSong = async () => {
//   try {
//     await TrackPlayer.add(await ReadFile());
//     await TrackPlayer.skip(parseInt(idTrack?.id));
//     await TrackPlayer.play();
//     SetisPlaying(true);
//   } catch (error) {
//     console.error(error);
//   }
// };
