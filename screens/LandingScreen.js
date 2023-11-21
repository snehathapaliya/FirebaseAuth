import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const LandingScreen = () => {
  const route = useRoute();
  const { user } = route.params;
  const navigation = useNavigation()

  return (
    <View style ={styles.container}>
      <View style = {styles.categoryContainer}>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'world-affairs'}))}
        >
          <Text style ={styles.categoryTitle}>World-Affairs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'science'}))}
        >
          <Text style ={styles.categoryTitle}>Science</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'technology'}))}
        >
          <Text style ={styles.categoryTitle}>Technology</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'sports'}))}
        >
          <Text style ={styles.categoryTitle}>Sports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'literature'}))}
        >
          <Text style ={styles.categoryTitle}>Literature</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.category}
          onPress={()=> navigation.replace('QuizScreen', JSON.stringify({user, category: 'movies'}))}
        >
          <Text style ={styles.categoryTitle}>Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  categoryContainer:{
    flexDirection :'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 50,
  },
  category:{
    width: 150,
    height: 150,
    margin: 10,
    borderRaadius:10,
    backgroundColor: '#ffffff',
    shadowColor: '000000',
    shadowOpacity:0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000'
  }
});

export default LandingScreen