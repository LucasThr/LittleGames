// ../Components/HomeGames.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'




class HomeGames extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.block}>
          <View style={styles.box_container}>
            <TouchableOpacity style={styles.boxMorpion}
              onPress={() => this.props.navigation.navigate('Morpion')}
              >
              <Image  style={styles.tinyLogo}
              source={require('../assets/morpion.png')} />
              {/* <Text style={styles.titleGames}>Morpion</Text> */}
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTaquin}
                onPress={() => this.props.navigation.navigate('Taquin')}
                >
              <Image  style={styles.tinyLogo}
              source={require('../assets/taquin.png')} />
              {/* <Text style={styles.titleGames}>Taquin</Text> */}
            </TouchableOpacity>
            </View>
          </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor:'#505050',

  },
  block:{
    height:180,
  },
  box_container: {
    flex:1,
    flexDirection:'row',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  boxMorpion: {
    flex:1,
    backgroundColor:'#06e79f',
    flexDirection:'row',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  boxTaquin: {
    flex:1,
    backgroundColor:'#06c1e7',
    flexDirection:'row',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  boxBurger: {
    flex:1,
    backgroundColor:'#e70688',
    flexDirection:'row',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
  },
  titleGames: {
    fontSize:45,
    color:'white'
  }
})


export default HomeGames