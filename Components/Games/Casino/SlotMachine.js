// ../Components/Games/TouchButton.js

import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet,Text,Button, Animated,ImageBackground,Pressable, TouchableOpacity, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const SlotMachine = (props) => {

  const [left, setLeft] = useState(158);
  const [top, setTop] = useState(150);
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [isNumber1, setIsNumber1] = useState(false);
  const [isNumber2, setIsNumber2] = useState(false);
  const [isNumber3, setIsNumber3] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [giveGain, setGiveGain] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [coins, setCoins] = useState(50);
  const [SaveCoins, setSaveCoins] = useState(50);
  const [gain, setGain] = useState(0);
  const [mysteryNumber, setMysteryNumber] = useState(0);
  const [startGame, setStartGame] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const fontSizeGain = useRef(new Animated.Value(1)).current
  let chrono;
  let num2;
  let num3;
  let active;
  

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Coins')
      console.log(jsonValue + 'get')
      console.log('Commencement: ' + startGame)
      setSaveCoins(JSON.parse(jsonValue))
      if(startGame){
        setCoins(JSON.parse(jsonValue))
        setStartGame(false)
        if(JSON.parse(jsonValue)==null){
          setCoins(50)
        }
      }
      if(jsonValue != null){
        
        setSaveCoins(JSON.parse(jsonValue))
      }else{
        setSaveCoins(20)
        
      }
      console.log('CATCH ??')
      }
    catch(e) {
      console.log('error get')
    }
  }

  useEffect(() => {
    getData()
  }, [])

 const storeData = async (value) => {
  try {
    console.log(value +" store")
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('Coins', jsonValue)
    getData()
  } catch (e) {
    console.log('error catch')
  }
}

useEffect(() => {
  if(isActive){
      chrono =  setInterval(  ()  => {
        var random = Math.floor(Math.random() * 9) + 1
        setMysteryNumber(random)
      },90)
     
      
      return () => {
        clearInterval(chrono)
      }
    }
}, [isActive])

useEffect(() => {
  if(isActive){
    if(!giveGain){
      setTimeout(function(){setNumber1(Math.floor(Math.random() * 9) + 1);setIsNumber1(true)},900) 
      setTimeout(function(){setNumber2(Math.floor(Math.random() * 9) + 1);setIsNumber2(true)},1500) 
      setTimeout(function(){setNumber3(Math.floor(Math.random() * 9) + 1);setIsNumber3(true)},2100) 
      setTimeout(function(){setIsActive(false),setGiveGain(true)},2110)
    }
  }
}, [isActive])

useEffect(()=>{
  console.log('givegain')
  if(giveGain){
    console.log(number1 + ',' + number2 + ' ' + number3)
    setGiveGain(false)
    if(number1 == number2 && number1 == number3 & number2 == number3){
        setCoins(coins => coins +300)
        setGain(300)
        var newCoins = coins + 300
        storeData(newCoins)
        console.log('50 | gain : +' + gain)
    }else if(number1 == number2 || number1 == number3 || number2 == number3){
      setCoins(coins => coins +20)
      setGain(20)
      var newCoins = coins + 20
      storeData(newCoins)
      
      console.log('3 | gain : +' + gain)
    }else{
      setGain(0)
      storeData(coins)
      console.log('0 | gain : +' + gain)
    }
    // console.log(coins + 'store')
    // storeData(coins)
    // winGainEffect()
  }


},[giveGain])


// const winGainEffect = () => {
//   // Will change fadeAnim value to 0 in 5 seconds
//   console.log('timing')
//   Animated.timing(fontSizeGain, {
//     toValue: 0,
//     duration: 1000,
//     useNativeDriver:true
//   }).start();
// };


useEffect(() => {
  console.log('givegainData')
  //storeData(coins)
}, [giveGain])

const randomNumber = () =>{
  if(isActive){

  }else{
    setCoins(coins => coins - 3)
    setIsActive(true)
    setIsNumber1(false)
    setIsNumber2(false)
    setIsNumber3(false)

  }
}



    return (
     // [styles.slot, isNumber3 ? styles.backgroundSlotTrue ? styles.backgroundSlotTrue]
      <View style={styles.main_container}>
        <View style={{flex:1,backgroundColor:'#242424'}}>
          <View style={styles.headerScore}>
            <Text style={styles.score}>
               Coins : {coins}
            </Text>
            <Text style={styles.score}>
                Mise : 3
            </Text>
          </View>
          <View style={styles.viewMachine}>
            <View style={styles.viewSlots}>
              <View style={[styles.slot, isNumber1 ? styles.backGroundSlotFalse : styles.backgroundSlotTrue]}>
                <Animated.Text style={styles.textSlot}>{isNumber1 ? number1 : mysteryNumber}</Animated.Text>
              </View>
              <View style={[styles.slot, isNumber2 ? styles.backGroundSlotFalse : styles.backgroundSlotTrue]}>
                <Text style={ styles.textSlot } >{isNumber2 ? number2 : mysteryNumber}</Text>
              </View>
              <View style={[styles.slot, isNumber3 ? styles.backGroundSlotFalse : styles.backgroundSlotTrue]}>
                <Text style={styles.textSlot}>{isNumber3 ? number3 : mysteryNumber}</Text>
              </View>
            </View>
            <View style={styles.viewGain}>
              <Animated.Text style={{  
                fontSize:50,
                opacity: isNumber3 ? 1 : 0,
                color:'white'}}>
                  Gain : +{gain}
              </Animated.Text>
            </View>
          </View>
          <View style={styles.viewButton}>
           <Pressable style={styles.buttonSlot}
           onPressIn = {() => randomNumber()}
           >
             <Text style={styles.start}>
               Jouer
             </Text>
           </Pressable>
          </View>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    headerScore:{
      height:40,
      flexDirection:'row',
      marginVertical:10,
      justifyContent:'space-around',
      alignItems:'center'
    },    
    score:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      fontSize:20,
      color:'#b2babb',
    },
    viewMachine:{
      flex:2,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#34495e'
    },
    viewSlots:{
      flex:3,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#f1c40f',
      borderRadius:30,
      marginVertical:100,
      paddingHorizontal:15,

    },
    slot:{
      alignItems:'center',
      justifyContent:'center',
      height:100,
      width:110,
      borderWidth:3,
      borderRadius:20,
      marginHorizontal:5,
      backgroundColor:'#f9e79f'
    },
    backGroundSlotFalse:{
      backgroundColor:'white'
    },
    backGroundSlotTrue:{
      backgroundColor:'gray'
    },
    textSlot:{
      fontSize:50,
      fontWeight:'bold',
      color:'red'
    },
    buttonSlot:{
      width:200,
      height:90,
      backgroundColor:'#e74c3c',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:10
    },
    viewButton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      height:200,
      bottom:0,
      backgroundColor:'#34495e',

    },
    start:{
      fontSize:50,
      textAlign:'center',
      justifyContent:'center',
    },
    viewGain:{
      flex:1,
      justifyContent:'center'

    },
    gain:{
      fontSize:30,
      color:'white'

    },
  })
  

  export default SlotMachine;