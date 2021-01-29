// ../Components/Games/TouchButton.js

import React from 'react'
import { StyleSheet,Text,Button, ImageBackground,Pressable, TouchableOpacity, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TouchButton = (props) => {

  const [left, setLeft] = React.useState(158);
  const [top, setTop] = React.useState(150);
  const [counter, setCounter] = React.useState(0);
  const [time, setTime] = React.useState(10);
  const [seconds, setSeconds] = React.useState(0);
  const [timer, setTimer] = React.useState('10');
  const [isOn, setIsOn] = React.useState(false);
  const [bestScore, setBestScore] = React.useState('0');
  const [newScore, setNewScore] = React.useState(0);

  const [isFinish, setIsFinish] = React.useState(false);
  var chrono;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('RecordTouchButton')
      if(value !== null) {
        setBestScore(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

React.useEffect(() => {

  if(isOn) {
    chrono =  setInterval(  ()  => {

      if(time==0){
        setIsOn(false)
        setIsFinish(true)
      }else{
        setTime(time - 1)
        console.log(time)
      }
    },1000)
   
    
    return () => {
      clearInterval(chrono)
    }
  }
 } ,[time])

 const storeData = async (value) => {
  try {
    console.log(value)
    await AsyncStorage.setItem('RecordTouchButton', value)
  } catch (e) {
    console.log('error catch')
  }
}

 React.useEffect(() => {
  if(bestScore<counter) {
    setBestScore(counter)
    setNewScore(counter + 1)
    storeData("" + newScore)
  }
 } ,[counter])

  const startTimer = () => {
    var RandomNumberTop = Math.floor(Math.random() * 474) + 1 ;
    var RandomNumberLeft = Math.floor(Math.random() * 310) + 1 ;
    setCounter(counter + 1)
    setTop(RandomNumberTop)
    setLeft(RandomNumberLeft)
    //chrono = setInterval(incrementCounter, 1000)
  }

  const modifyButton = () => {
    var RandomNumberTop = Math.floor(Math.random() * 474) + 1 ;
    var RandomNumberLeft = Math.floor(Math.random() * 310) + 1 ;
    if(!isOn){
      console.log('start')
      setIsOn(true)
      setTime(time - 1)
      startTimer()
    } 
    if(isOn){
    setCounter(counter + 1)
    setTop(RandomNumberTop)
    setLeft(RandomNumberLeft)
    }
  }

  const restartGame = () => {
    setIsOn(false)
    setTime(10)
    setCounter(0)
    setLeft(158)
    setTop(150)
    setTimer('10')
    setIsFinish(false)
  }

  const TouchableOpacityRender = () => {
    
    if(!isFinish){
     
    return(
      <Pressable 
      style={{  

        width:100,
        elevation:20,
        height:100,
        borderRadius:50,
        top:top,
        left:left,
        alignItems:'center',
        justifyContent:'center'
      }}
        onPressIn = {() => modifyButton()}>
        <Image
        style={{width:225,height:225,shadowColor:'black',shadowOpacity:1,shadowRadius:20,shadowOffset: { height: 2, width: 2 }}}
        source={require('../../../assets/balle.png')}/>
      </Pressable>
    )
  }else{
    
    return(
      <View>
      <Text style={{textAlign:'center', textAlignVertical:'center',top:130,fontSize:40}}>
        Your Score : 
      </Text>
      <Text style={{textAlign:'center', textAlignVertical:'center',top:138,fontSize:100}}>
        {counter}
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
        restartGame()
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

    return (
      
      <View style={styles.main_container}>
        <View style={{backgroundColor:'#242424'}}>
          <View style={styles.headerScore}>
            <Text style={styles.score}>
               Record : {bestScore}
            </Text>
            <Text style={styles.score}>
                Time : {time} 
            </Text>
          </View>
        <Text style={styles.counter}>
            {counter}
        </Text>
   
        </View>
        <ImageBackground source={require('../../../assets/greenfond.webp')} style={styles.image}>
          <TouchableOpacityRender/>
        </ImageBackground>
      </View>
    )
  }


const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    headerScore:{
      flexDirection:'row',
      marginTop:10,
      justifyContent:'space-around'
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
    counter:{
      height:80,
      textAlign:'center',
      fontSize:60,
      color:'white',
      fontWeight:'bold',
      borderBottomWidth:1
  
    },
    textScore:{

    },
    score:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      fontSize:20,
      color:'#b2babb',
    
    },
    image:{
      flex:1,
    }
  })
  

  export default TouchButton;