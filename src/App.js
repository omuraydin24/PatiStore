import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import NewsCard from './components/NewsCard';


import news_data from './news_data.json';

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />; //burada olursa 1 kez çalışıp 200 kere içeri yollanıyor

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      <View style={styles.flatlist}>
        <FlatList
          data={news_data}
          // renderItem={({ item }) => <NewsCard news={item} />} böyle içerde durursa 200 kez fonksiyon çalışıyor
          renderItem={renderNews}
          keyExtractor={(item) => item.u_id.toString()}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'purple',
    marginLeft: 10,
  },
  flatlist: {
    flex: 1,

  },
  search: {
    margin: 5,
    backgroundColor: "#eceff1",
    borderRadius: 7,
    padding: 10,
  }
})

export default App;