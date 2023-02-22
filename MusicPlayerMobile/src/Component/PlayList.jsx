import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import RNFS from 'react-native-fs';
import {ReadFile} from '../tools/ReadFile';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function PlayList() {
  const [content, setContent] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    ReadFile().then(res => {
      setContent(res);
    });
  }, []);

  const handlePress = (id, name) => {
    navigation.navigate('playMusic', {path: id, name: name});
  };
  //     <TouchableOpacity onPress={() => handlePress(item?.Path, item?.name)}>
  //     </TouchableOpacity>

  return (
    <ScrollView>
      <Text>im here</Text>
      {content.map((item, index) => (
        <View style={styles.Card}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/image/Inner.png')}
            />
          </View>
          <View>
            <Text style={[styles.paragraph, styles.Title]}>
              <Text>{item?.name}</Text>
            </Text>
            <Text style={styles.paragraph}>NEFFEX</Text>
          </View>
        </View>
      ))}
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
    marginLeft: 20,
    color: 'black',
    width: 299,
  },
  Title: {
    color: '#34495e',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
