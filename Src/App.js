import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,FlatList, SafeAreaView } from 'react-native';
import storeData from '../patiStore_data.json';
import StoreCard from './components/StoreCard';

export default function App() {

  const [list,setList] = useState(storeData)

  const renderStoreCard = store => <StoreCard store={store} />

  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput 
      placeholder='Ara...'
      style={styles.searchBar}
      />
     <FlatList
      data={list}
      renderItem={renderStoreCard}
      keyExtractor={key => key.id}
      numColumns={2}
     />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:35,
    margin:10,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'#800080',
   
  },
  searchBar:{
    padding:10,
    backgroundColor:'#ECEFF1',
    margin:5,
    borderRadius:10,
  },
  list:{
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    flexDirection:'row'
  }
});
