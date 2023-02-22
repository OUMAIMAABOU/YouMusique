import RNFS from 'react-native-fs';

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
