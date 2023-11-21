import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const LeaderBoardScreen = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <View>
      <Text style={styles.HeadLeaderboard}>LeaderBoard 📊</Text>
      
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  HeadLeaderboard: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
});