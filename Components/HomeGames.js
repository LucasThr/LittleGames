// ../Components/HomeGames.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image, ImageBackground, Pressable } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'




class HomeGames extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/homeBackground.jpg')} style={styles.imageBackground}>
          
          <ScrollView
          style={styles.sub_container}
              showsVerticalScrollIndicator={false}>
            <Pressable style={styles.pressableBox}
              onPress={() => this.props.navigation.navigate('BlackJack')}>
                {({ pressed }) => (
              <ImageBackground source={require('../assets/blackJackAccueil.jpg')} style={[pressed ? [styles.imageBox,{top:2}] : styles.imageBox]} imageStyle={{ borderRadius: 6}}>
                <View style={styles.subTitlePressable}>
                  <Text style={styles.textBox}>
                    BlackJack
                  </Text>
                </View>
              </ImageBackground>
                )}
            </Pressable>

            <Pressable style={styles.pressableBox}
              onPress={() => this.props.navigation.navigate('Machine à Sous')}>
                {({ pressed }) => (
              <ImageBackground source={require('../assets/SlotMachineAccueil.png')} style={[pressed ? [styles.imageBox,{top:2}] : styles.imageBox]} imageStyle={{ borderRadius: 6}}>
                <View style={styles.subTitlePressable}>
                  <Text style={styles.textBox}>
                    Machine à Sous
                  </Text>
                </View>
              </ImageBackground>
                )}
            </Pressable>

            <Pressable style={styles.pressableBox}
                onPress={() => this.props.navigation.navigate('Fast Ball')}
                >
                 {({ pressed }) => (
              <ImageBackground source={require('../assets/greenfond.webp')} style={[pressed ? [styles.imageBox,{top:2}] : styles.imageBox]} imageStyle={{ borderRadius: 6}}>
                <View style={styles.subTitlePressable}>
                  <Text style={styles.textBox}>
                    Fast Ball
                  </Text>
                </View>
              </ImageBackground>
                )}
            </Pressable>

            <Pressable style={styles.pressableBox}
                onPress={() => this.props.navigation.navigate('Taquin')}
                >
                 {({ pressed }) => (
              <ImageBackground source={require('../assets/TaquinAccueil.webp')} style={[pressed ? [styles.imageBox,{top:2}] : styles.imageBox]} imageStyle={{ borderRadius: 6}}>
                <View style={styles.subTitlePressable}>
                  <Text style={styles.textBox}>
                    Taquin
                  </Text>
                </View>
              </ImageBackground>
                )}
            </Pressable>

            <Pressable style={styles.pressableBox}
                onPress={() => this.props.navigation.navigate('Morpion')}
                >
                 {({ pressed }) => (
              <ImageBackground source={require('../assets/morpionAccueil.jpg')} style={[pressed ? [styles.imageBox,{top:2}] : styles.imageBox]} imageStyle={{ borderRadius: 6}}>
                <View style={styles.subTitlePressable}>
                  <Text style={styles.textBox}>
                    Morpion
                  </Text>
                </View>
              </ImageBackground>
                )}
            </Pressable>

            </ScrollView>
            {/* <Text style={styles.title}>Games</Text>
            <View>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.boxTouchButton}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('TouchBall')}
                >
                <Image  style={{width:150,height:70,}}
                source={require('../assets/balle.png')} />
                <Text  style={styles.titleGames}>
                  Touch Ball
                </Text>
        
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTaquin}
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Taquin')}
                  >
                <Image  style={styles.tinyLogo}
                source={require('../assets/taquin.png')} />
                <Text style={styles.titleGames}>Taquin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxMorpion}
                activeOpacity={0.8}
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
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('SlotMachine')}
                >
                <Image  style={{height:60,width:140}}
                source={require('../assets/slotsmachine.png')} />
                <Text  style={styles.titleGames}>
                  Slots
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxTouchButton}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('BlackJack')}
                >
                <Image  style={{height:100,width:93}}
                source={require('../assets/blackjack.png')} />
                <Text  style={styles.titleGames}>
                  BlackJack
                </Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.boxMorpion}
                activeOpacity={0.8}
              //  onPress={() => this.props.navigation.navigate('Morpion')}
                >
                <Image  style={styles.tinyLogo}
                source={require('../assets/favicon.png')} />
                <Text style={styles.titleGames}>Test</Text>
              </TouchableOpacity>

              </ScrollView>
            </View> */}
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  imageBackground:{
    flex:1,
    resizeMode:'cover'
  },
  sub_container: {
    flex: 1,
    backgroundColor: 'rgba(52, 73, 94, 0.5)',
  },
  block:{
    height:180,
  },
  imageBox:{
    flex:1,
    justifyContent:'flex-end'

  },
  pressableBox:{
    height:180,
    margin:20,
    borderRadius:20,
    elevation:10,
  },
  subTitlePressable:{
    backgroundColor:'rgba(   1, 1, 1    , 0.4)',
    height:60,
    justifyContent:'center',
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6
  },
  textBox:{
    fontSize:20,
    color:'white',
    marginLeft:10
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