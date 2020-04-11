import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList,  } from 'react-native';
import BackButton from '../components/BackButton';
import CoverImageList from '../components/CoverImageList';

const MyCatsScreen = ({ user, fetchMyCats, navigation }) => {
  const [myCats, setMyCats ] = useState([]);

  useEffect(() => {
    const foucsListner = navigation.addListener('focus', async () => {
      const { result, cats } = await fetchMyCats(user.mongoId);
      setMyCats(cats);
    });
 
    return foucsListner;
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <BackButton navigation={navigation} />  
        </View>  
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>내가찾은 냥이들</Text>
        </View>
      </View>
      <FlatList 
        style={styles.faltListBox}
        data={myCats}
        renderItem={({ item }) => (
          <CoverImageList cat={item} navigation={navigation} />
        )}
      />
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
    justifyContent: "space-around",
    backgroundColor: '#ff9191',
  },
  headerBox: {
    width: '85%',
  },
  headerText: {
    fontSize: 20,
  },
  faltListBox: {
    marginTop: 20, 
    backgroundColor: '#f5fcff',
  },
});

export default MyCatsScreen;
