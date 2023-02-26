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

// export const ReadFile = async () => {
//   try {
//     const files = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);
//     for (const file of files) {
//       console.log(files);
//       if (file.isDirectory()) {
//         await readAllFiles(file.path);
//       } else if (file.isFile()) {

//         console.log(file.path);
//       }
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };
