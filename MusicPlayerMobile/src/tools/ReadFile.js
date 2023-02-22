import RNFS from 'react-native-fs';

export const ReadFile = () => {
  const tab = [];
  return RNFS.readDir(
    RNFS.ExternalStorageDirectoryPath + '/snaptube/download/SnapTube Audio',
  ).then(contents => {
    for (let content in contents) {
      if (contents[content]['name'].endsWith('.mp3')) {
        tab.push({
          Path: contents[content]['path'],
          name: contents[content]['name'],
        });
      }
    }
    return tab;
  });
};

export const show = async () => {};
