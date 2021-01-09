// ../Components/Settings.js

import React from 'react'
import { StyleSheet,Text, View, Image, ImageBackground } from 'react-native'



class Settings extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/greenfond.webp')} style={styles.image}>
         
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
    },
    image:{
      height:500,
      resizeMode:"contain",
      justifyContent:'center',

    }
  })
  

export default Settings