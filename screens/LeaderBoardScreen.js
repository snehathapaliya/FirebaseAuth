import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import { getFirestore, query, getDocs, collection } from 'firebase/firestore';

const LeaderBoardScreen = () => {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const db = getFirestore();

    const q = query(collection(db, 'quizzers'));
    const snapshot = await getDocs(q);

    const fetchedData = snapshot.docs.map(doc => doc.data());
    setAllData(fetchedData);
  };

  return (
    <View>
      <Text style={styles.HeadLeaderboard}>LeaderBoard 📊</Text>

      <View style={styles.container}>
        {allData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.username}>{item.user}</Text>
            <Text style={styles.score}>{item.score} points</Text>
          </View>
        ))}
      </View>
      
    </View>
  ); 
}


export default LeaderBoardScreen;

const styles = StyleSheet.create({
  HeadLeaderboard: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  username: {
    fontSize: 18,
  },
  score: {
    fontSize: 18,
  },
});