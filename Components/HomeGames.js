// ../Components/HomeGames.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'




class HomeGames extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.box_container}>
          <TouchableOpacity style={styles.box}
          onPress={() => this.props.navigation.navigate('Morpion')}
          >
            <Text style={styles.titleGames}>Morpion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}
           onPress={() => this.props.navigation.navigate('Taquin')}
           >
            <Text style={styles.titleGames}>Taquin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.titleGames}>Flappy Bird</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  box_container: {
    flex: 1,
  },
  box: {
    flex:1,
    backgroundColor:'skyblue',
    flexDirection:'row',
    margin:15,
    borderRadius:20,
    justifyContent: 'center',
    alignItems:'center'
  },
  titleGames: {
    fontSize:45,
    color:'white'
  }
})


export default HomeGames