// ../Components/Games/TouchButton.js

import React from 'react'
import { StyleSheet,Text,Button, ImageBackground,TouchableWithoutFeedback, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

class TouchButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      left: 158,
      top:150,
      counter:0,
      time:10,
      timer:'10',
      isOn:false
    }
  }

   __storeData = async (value) => {
    try {
      await AsyncStorage.setItem('BestScoreTouchBall', value)
    } catch (e) {
      // saving error
    }
  }

  __getData = async () => {
    try {
      const value = await AsyncStorage.getItem('BestScoreTouchBall')
      console.log(value)
      if(value !== null) {
        this.setState({ bestScore: 0 })
      }else{
        this.setState({ bestScore: 0 })
      }
    } catch(e) {
      console.log('Error')
    }
  }
  
  
  incrementCounter = () => {
    const { time } = this.state;
    if(time==0){
      this.setState({ isOn:false })
    }else{
      this.setState({ time: time - 1 });
      if(time>10){
        var newTime = 2
        this.setState({ timer: this.state.time });
      }else{
        this.setState({ timer: '0' + this.state.time });
      }
      
      
  }
  };

  startTimer = () => {
    var RandomNumberTop = Math.floor(Math.random() * 474) + 1 ;
    var RandomNumberLeft = Math.floor(Math.random() * 310) + 1 ;
    var count = this.state.counter + 1
    this.setState({
      counter:count,top:RandomNumberTop,left:RandomNumberLeft
    })
      this.timer = setInterval(this.incrementCounter, 1000)
  }

  modifyButton = () => {
    var RandomNumberTop = Math.floor(Math.random() * 474) + 1 ;
    var RandomNumberLeft = Math.floor(Math.random() * 310) + 1 ;
    if(!this.state.isOn){
      this.setState({
        isOn: true
      })
      this.startTimer()
    } 
    if(this.state.isOn){
      var count = this.state.counter + 1
      this.setState({top:RandomNumberTop,left:RandomNumberLeft, counter:count})
    }
  }

  stopGame = () => {
    clearInterval(this.timer)
    var BestRecord = this.__getData()
    if(BestRecord < this.state.counter){
    this.__storeData(this.state.counter)
    }
    this.setState({isOn:false,time:10,counter:0, left: 158, top:150,timer:'10'})
  }

  TouchableOpacity = () => {
    // var BestRecord = this.__getData()
    // console.log(BestRecord)
    if(this.state.time != 0){
      // this.__storeData('5')
    return(
      <TouchableOpacity style={{  

        width:100,
        elevation:20,
        height:100,
        borderRadius:50,
        top:this.state.top,
        left:this.state.left,
        alignItems:'center',
        justifyContent:'center'
      }}
        onPress = {() => this.modifyButton()}>
        <Image
        style={{width:225,height:225,shadowColor:'black',shadowOpacity:1,shadowRadius:20,shadowOffset: { height: 2, width: 2 }}}
        source={require('../../../assets/balle.png')}/>
      </TouchableOpacity>
    )
  }else{
    return(
      <View>
      <Text style={{textAlign:'center', textAlignVertical:'center',top:130,fontSize:40}}>
        Your Score : 
      </Text>
      <Text style={{textAlign:'center', textAlignVertical:'center',top:138,fontSize:100}}>
        {this.state.counter}
      </Text>
      <TouchableOpacity 
       style={{
        justifyContent:'center',
        backgroundColor:'#449bca',
        marginHorizontal:100, 
        borderRadius:60, 
        top:160, 
        alignContent:'center', 
        height:60
      }}
        onPress={() => 
        this.stopGame()
        }>
        <Text  style={{
          textAlign:'center',
          textAlignVertical:'center',
          fontSize:30,
          }}>
          Try Again
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
  }

  render() {
 
    return (
      <View style={styles.main_container}>
        <View style={{backgroundColor:'#242424'}}>
        <Text style={styles.score}>
            {this.state.counter}
        </Text>
        <Text style={styles.score}>
        
        </Text>
        <Text style={styles.timer}>
            00:{this.state.timer}
        </Text>
        </View>
        <ImageBackground source={require('../../../assets/greenfond.webp')} style={styles.image}>
          {this.TouchableOpacity()}
          </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    button:{
      width:100,
      height:100,
      borderRadius:50,
      position: 'absolute',
      backgroundColor:'green',
      top:200
    },
    
    game:{
      flex:1
    },
    score:{
      height:65,
      top:0,
      textAlign:'center',
      fontSize:60,
      color:'white',
      fontWeight:'bold'
  
    },
    timer:{
      height:65,
      top:0,
      textAlign:'center',
      fontSize:40,
      color:'#d33535',
      borderBottomWidth:1
    
    },
    image:{
      flex:1,
    }
  })
  

export default TouchButton