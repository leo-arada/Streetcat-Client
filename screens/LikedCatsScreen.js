import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import BackButton from '../components/BackButton';
import tileStyleHelper from '../utils/tileStyleHelper';
import TileList from '../components/TileList';

const LikedCatsScreen = ({ user, fetchLikedcats, navigation }) => {
  const [myCats, setMyCats ] = useState([]);

  useEffect(() => {
    const foucsListner = navigation.addListener('focus', async () => {
      const { result, cats } = await fetchLikedcats(user.mongoId);
      const array = tileStyleHelper(cats);
      setMyCats(array);
    });
 
    return foucsListner;
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View></View>
          <BackButton navigation={navigation} />
        <View style={{ width: '85%' }}>
          <Text style={{ fontSize: 20 }}>내가 좋아한 냥이들</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
           data={myCats}
           renderItem={({ item }) => {
            if (item.empty) {
              return <View style={styles.invisible}></View>
            }

            return (
              <TileList cat={item} navigation={navigation}/>
            );
          }}
           numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    height: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  invisible: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').width /2,
    flex: 1,
    margin: 1,
  },
  listContainer: {
    flex: 1, 
    paddingTop: 30,
  }
});

export default LikedCatsScreen;
