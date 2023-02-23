import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ReadFile} from '../tools/ReadFile';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';

export default function PlayList() {
  const [content, setContent] = useState([]);
  const navigation = useNavigation();
  const [isPlaying, SetisPlaying] = useState(false);

  useEffect(() => {
    ReadFile().then(res => {
      setContent(res);
    });
  }, []);

  const handlePress = id => {
    navigation.navigate('playMusic', {id: id});
  };

  return (
    <ScrollView style={styles.container}>
      {content.map((item, index) => (
        <View key={index} style={styles.Card}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/image/Inner.png')}
            />
          </View>
          <View>
            <Text style={[styles.paragraph, styles.Title]}>
              <Text onPress={() => handlePress(item.id)}>{item?.title}</Text>
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
    color: 'black',
    width: 285,
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
