// ../Components/HomeGames.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'




class HomeGames extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.sub_container}>
        
          <Text style={styles.title}>Games </Text>
          <View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.boxTouchButton}
              onPress={() => this.props.navigation.navigate('TouchBall')}
              >
              <Image  style={{width:150,height:70,}}
              source={require('../assets/balle.png')} />
              <Text  style={styles.titleGames}>
                Touch Ball
              </Text>
      
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTaquin}
                onPress={() => this.props.navigation.navigate('Taquin')}
                >
              <Image  style={styles.tinyLogo}
              source={require('../assets/taquin.png')} />
              <Text style={styles.titleGames}>Taquin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMorpion}
              onPress={() => this.props.navigation.navigate('Morpion')}
              >
              <Image  style={styles.tinyLogo}
              source={require('../assets/morpion.png')} />

              <Text style={styles.titleGames}>Morpion</Text>
      
            </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.title}>Casino </Text>
          <View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.boxTouchButton}
              onPress={() => this.props.navigation.navigate('SlotMachine')}
              >
              <Image  style={{height:60,width:140}}
              source={require('../assets/slotsmachine.png')} />
              <Text  style={styles.titleGames}>
                Slots
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxTouchButton}
              onPress={() => this.props.navigation.navigate('BlackJack')}
              >
              <Image  style={{height:60,width:140}}
              source={require('../assets/slotsmachine.png')} />
              <Text  style={styles.titleGames}>
                BlackJack
              </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.boxMorpion}
            //  onPress={() => this.props.navigation.navigate('Morpion')}
              >
              <Image  style={styles.tinyLogo}
              source={require('../assets/favicon.png')} />
              <Text style={styles.titleGames}>Test</Text>
            </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,

  },
  sub_container: {
    flex: 1,
    backgroundColor: 'rgba(52, 73, 94, 1)',

  },
  block:{
    height:180,
 
  },
  title:{
    fontSize:28,
    marginLeft:10,
    color:'white',
    marginTop:20,
    marginBottom:0
    
  },
  box_container: {
    flex:1,
    flexDirection:'row',
  },
  tinyLogo: {
    width: 70,
    height: 70,
    opacity:1
  },
  boxMorpion: {
    width:150,
    backgroundColor: 'rgba(   236, 240, 241    , 1)',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    borderColor:'rgba(   236, 240, 241   , 0.4)',
    alignItems:'center',
    justifyContent:'center',
  },
  boxTaquin: {
    width:150,
    backgroundColor:'rgba(    236, 240, 241    , 1)',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    borderColor:'rgba(    236, 240, 241   , 0.6)',
    alignItems:'center',
    justifyContent:'center',


  },
  boxTouchButton: {
    width:150,
    height:200,
    backgroundColor:'rgba(  236, 240, 241   , 1)',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    borderColor:'rgba(   236, 240, 241   , 0.4)',
    alignItems:'center',
    justifyContent:'center',
    shadowOffset:{width:9,height:10},
    
  },
  boxFlappyBird: {
    flex:1,
    backgroundColor:'#06c1e7',
    flexDirection:'row',
    margin:15,
    borderRadius:20,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
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
  },
  titleGames: {
    marginTop:10,
    fontSize:26,
    color: 'rgba(52, 73, 94, 1)', 
  }
})


export default HomeGames