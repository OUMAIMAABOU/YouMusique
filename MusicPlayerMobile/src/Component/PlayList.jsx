import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function PlayList() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>

      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/image/Inner.png')}
          />
        </View>
        <View>
          <Text style={[styles.paragraph, styles.Title]}>
            NEFFEX-Hell Won't Take
          </Text>
          <Text style={styles.paragraph}>NEFFEX</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
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
