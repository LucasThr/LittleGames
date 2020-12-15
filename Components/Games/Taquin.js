// ../Components/Games/Taquin.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'



class Taquin extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
          <View style={styles.box_container}>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
          </View>
          <View style={styles.box_container}>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
          </View>
          <View style={styles.box_container}>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                
            </TouchableOpacity>
          </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  box_container: {
    flex: 1,
  },
  box: {
    backgroundColor:'red',
    margin:15,
    borderRadius:20,
    height:100,
    width:100

  },
  titleGames: {
    textAlign: 'center',
    fontSize:45,
    color:'white'
  }
})


export default Taquin