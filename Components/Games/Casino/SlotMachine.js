// ../Components/Games/TouchButton.js

import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet,Text,Button, Animated,ImageBackground,Pressable, TouchableOpacity, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { connect, useDispatch, useSelector } from 'react-redux'

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
  const [notEnoughCoins, setNotEnoughCoins] = React.useState(false);
  const fontSizeGain = useRef(new Animated.Value(1)).current
  let chrono;
  let num2;
  let num3;
  let active;

  const jetons = useSelector(state => state.jetons)
  const dispatch = useDispatch()
 
  const modifyJetons = (val) => {
    console.log('DISPATCH')
    dispatch({ type: 'UPDATE_JETONS', payload: val })
  }


  const getData = async () => {
    setCoins(jetons)
    setSaveCoins(jetons)
  }

  useEffect(() => {
    console.log('||||||||||||')
    getData()
  }, [])

 

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
        modifyJetons(newCoins)
        console.log('50 | gain : +' + gain)
    }else if(number1 == number2 || number1 == number3 || number2 == number3){
      setCoins(coins => coins +20)
      setGain(20)
      var newCoins = coins + 20
      modifyJetons(newCoins)
      
      console.log('3 | gain : +' + gain)
    }else{
      setGain(0)
      modifyJetons(coins)
      console.log('0 | gain : +' + gain)
    }
    // console.log(coins + 'store')
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




const randomNumber = () =>{
  if(isActive){

  }else{
    if((jetons-3)<0){
      setNotEnoughCoins(true)
      }else{
      setNotEnoughCoins(false)
      modifyJetons(coins -3)
      setCoins(coins => coins - 3)
      setIsActive(true)
      setIsNumber1(false)
      setIsNumber2(false)
      setIsNumber3(false)
    }
  }
}



    return (
     // [styles.slot, isNumber3 ? styles.backgroundSlotTrue ? styles.backgroundSlotTrue]
      <View style={styles.main_container}>
        <View style={{flex:1,backgroundColor:'#242424'}}>
          <View style={styles.headerScore}>
            <Text style={styles.score}>
               Coins : {jetons}
            </Text>
            <Text style={styles.score}>
                Mise : 3 
            </Text>
          </View>
          <View style={styles.viewMachine}>
          {!notEnoughCoins && 

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

            </View>}
                    
            {notEnoughCoins && 
                   <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{marginBottom:60,color:'white',fontSize:24,textAlign:'center'}}>
                       Vous n'avez pas assez de pièces.
                     </Text>
                     <Pressable 
                       onPress={() => props.navigation.navigate('Jetons')}
                       style={{justifyContent:'center',alignItems:'center',backgroundColor:'#f0e95d',width:250,marginTop:5,borderRadius:10,height:80}}>
                       <Text style={{color:'#e73a42',fontSize:26,textAlign:'justify'}}>
                         Regarder une pub
 
                       </Text>
                     </Pressable>
                   </View>}
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