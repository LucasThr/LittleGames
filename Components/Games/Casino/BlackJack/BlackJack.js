// ../Components/Games/TouchButton.js

import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet,Text,Button, Animated,ImageBackground,Pressable, TouchableOpacity, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { Audio } from 'expo-av';


const BlackJack = (props) => {

  const [arrayCard, setArrayCard] = useState([{
    1: 'A♥', 2:'2♥', 3:'3♥', 4:'4♥', 5:'5♥', 6:'6♥', 7:'7♥', 8:'8♥', 9:'9♥', 10:'10♥', 11:'J♥', 12:'Q♥', 13:'K♥',
    14:'A♦',15:'2♦',16:'3♦',17:'4♦',18:'5♦',19:'6♦',20:'7♦',21:'8♦',22:'9♦', 23:'10♦', 24:'J♦', 25:'Q♦', 26:'K♦',
    27:'A♣',28:'2♣',29:'3♣',30:'4♣',31:'5♣',32:'6♣',33:'7♣',34:'8♣',35:'9♣', 36:'10♣', 37:'J♣', 38:'Q♣', 39:'K♣',
    40:'A♠',41:'2♠',42:'3♠',43:'4♠',44:'5♠',45:'6♠',46:'7♠',47:'8♠',48:'9♠', 49:'10♠', 50:'J♠', 51:'Q♠', 52:'K♠'

  }]);
  const arrayValueCard =[{
     1:11,  2:2 , 3:3 , 4:4 , 5:5 , 6:6,  7:7,   8:8,   9:9, 10:10 ,11:10, 12:10, 13:10,
    14:11, 15:2, 16:3, 17:4, 18:5, 19:6, 20:7, 21: 8, 22: 9, 23:10, 24:10, 25:10, 26:10,
    27:11, 28:2, 29:3, 30:4, 31:5, 32:6, 33:7, 34: 8, 35: 9, 36:10, 37:10, 38:10, 39:10,
    40:11, 41:2, 42:3, 43:4, 44:5, 45:6, 46:7, 47: 8, 48: 9, 49:10, 50:10, 51:10, 52:10
  }];
  const [arrayCardShow, setArrayCardShow] = useState([]);
  const [cardBank1, setCardBank1] = useState(0);
  const [cardBank2, setCardBank2] = useState(0);
  const [cardBank3, setCardBank3] = useState(0);
  const [cardBank4, setCardBank4] = useState(0);
  const [cardBank5, setCardBank5] = useState(0);
  const [card3, setCard3] = useState(0);
  const [card5, setCard5] = useState(0);
  const [card4, setCard4] = useState(0);
  const [card6, setCard6] = useState(0);
  const [card7, setCard7] = useState(0);
  const [card8, setCard8] = useState(0);
  const [gameState, setGameState] = useState(0)
  const [cardPlayer, setCardPlayer] = useState(0);
  const [cardBank, setCardBank] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [mise, setMise] = useState(0);
  const [winnerText, setWinnerText] = useState("");
  const [coins, setCoins] = useState(50);
  const [isDouble, setIsDouble] = useState(false);
  const cardFallBank1 = useRef(new Animated.Value(0)).current;
  const cardFallBank2 = useRef(new Animated.Value(0)).current;
  const cardFallBank3 = useRef(new Animated.Value(0)).current;
  const cardFallBank4 = useRef(new Animated.Value(0)).current;
  const cardFallBank5 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer1 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer2 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer3 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer4 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer5 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer6 = useRef(new Animated.Value(0)).current;
  const cardFallPlayer7 = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../../../../assets/cardBlackjack.mp3')
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync(); }

    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    useEffect(() => {
      if(!isDouble){
        if(cardPlayer>21){
          setGameState(100)
          setTimeout(function(){  
              setWinnerText('Perdu')
          },500)
        } 
        if(cardPlayer==21 && gameState<3){
          setGameState(100)
          setTimeout(function(){  
            setWinnerText('BlackJack');
            setCoins(coins => coins + mise*4)
          },500)
        }
      }
    },[cardPlayer])

    const randoms = () => {
      let random = Math.floor(Math.random() * 52) + 1;
      if(arrayCardShow.includes(random)){
      let randomVerify = false
        while (!randomVerify){
          random = Math.floor(Math.random() * 52) + 1;
          if(!arrayCardShow.includes(random)){ randomVerify = true;break;}
        }
      }
      setArrayCardShow(oldArray => [...oldArray, random]);
      let newTotal = cardPlayer + arrayValueCard[0][random]
      //On verifie si il y a un As pour passer sa valeur à 1 lorque le total est supérieur à 21
      if(newTotal > 21){
        if(random==1 || random == 14 || random == 27 || random == 40){
          newTotal=newTotal-10
        }
      }
      setCardPlayer(newTotal)

      return [random,newTotal];
    }

    const double = () =>{
      if(card5==0 && gameState==2){
        setCoins(coins => coins - mise)
        let random = randoms()
        setTimeout(function(){
          setCard5(random[0]);
          fadeOut(cardFallPlayer3);
          playSound()
        },300)
        setIsDouble(true)
        console.log(arrayValueCard[0][random[0]])
        stay(arrayValueCard[0][random[0]],true)
      }
    }

    const hit = () =>{
      if(gameState!=100){
        if(card5==0 && gameState==2){
          setGameState(3)
          let random = randoms()
          setTimeout(function(){
            setCard5(random[0]);
            fadeOut(cardFallPlayer3);
            if(random[1]<=21){
              setGameState(4)
              

            }
            playSound()
          },300)
        }else if(card6==0 && gameState==4){
          let random = randoms()
          setTimeout(function(){
          setCard6(random[0]);
          fadeOut(cardFallPlayer4);
          if(random[1]<=21){
            setGameState(5)
          }
            playSound()
          },300)
        }else if(card7==0 && gameState==5){
          let random = randoms()
          setTimeout(function(){
            setCard7(random[0]);
            fadeOut(cardFallPlayer5);
            if(random[1]<=21){
              setGameState(6)
            }
            playSound()
          },300)
        } else if(card8==0 && gameState==6){
          let random = randoms()
          setTimeout(function(){
            setCard8(random[0]);
            fadeOut(cardFallPlayer6);
            if(random[1]<=21){
              setGameState(7)
            }
            playSound()
          },300)
        } 
      }
    }

    const stay = (cardPlay,doubleVerify) =>{
      
      if(gameState!=100){
        if(doubleVerify){
          setGameState(100)
          console.log('double')
          console.log(cardPlay)
          var newTotalPlayer = cardPlay + cardPlayer;
          console.log(newTotalPlayer)
          console.log('|||')
        }else{
          var newTotalPlayer = 0;
          console.log('PAS DOUBLE')
        }
        let random = Math.floor(Math.random() * 52) + 1;
        setTimeout(function(){
          setCardBank2(random);
          fadeOut(cardFallBank2);
          playSound()
        },400) 
        let newTotalBank = cardBank + arrayValueCard[0][random]
        let finish = false;
        if(newTotalBank<=16){
          let random = Math.floor(Math.random() * 52) + 1;
          setTimeout(function(){
            setCardBank3(random);
            fadeOut(cardFallBank3);
            playSound()
          },800)
          newTotalBank = newTotalBank + arrayValueCard[0][random] 
        }else{finish=true;}
        if(newTotalBank<=16){
          let random = Math.floor(Math.random() * 52) + 1;
          setTimeout(function(){
            setCardBank4(random);
            fadeOut(cardFallBank4);
            playSound()
          },1200) 
          newTotalBank = newTotalBank + arrayValueCard[0][random] 
        }else{finish=true;}
        if(newTotalBank<=16){
          let random = Math.floor(Math.random() * 52) + 1;
          setTimeout(function(){
            setCardBank5(random);
            fadeOut(cardFallBank5);
            playSound()
          },1500) 
          newTotalBank = newTotalBank + arrayValueCard[0][random] 
        }else{finish=true;}
        
        checkResult(newTotalBank,newTotalPlayer,doubleVerify)
      }
    }


    const checkResult = (newTotalBank,newTotalPlayer,doubleVerify) => {
        let double = doubleVerify ? 2 : 1;
        console.log(double)
        if(newTotalPlayer>21){
          setGameState(100)
          setTimeout(function(){        
            setWinnerText('Perdu');
            setGameState(100)
          },1800)
        }else if(newTotalBank>21){
          setGameState(100)
          setTimeout(function(){        
            setWinnerText('Gagné');
            setCoins(coins => coins + (mise*2)*double)
            setGameState(100)
          },1800) 
        }else if(newTotalBank==newTotalPlayer || newTotalBank==cardPlayer){
          setGameState(100)
          setTimeout(function(){        
            setWinnerText('Egalité');
            setCoins(coins => coins + mise)
            setGameState(100)
          },1800) 
        }else if(newTotalBank<cardPlayer || newTotalBank<newTotalPlayer){
            setGameState(100)
            setTimeout(function(){        
              setWinnerText('Gagné');
              setCoins(coins => coins + (mise*2)*double)
              setGameState(100)
          },1800)
        }else if(newTotalBank>newTotalPlayer && newTotalBank>cardPlayer){
            console.log(newTotalBank)
            console.log(cardPlayer)
            console.log(newTotalPlayer)
            setGameState(100)
            setTimeout(function(){        
              setWinnerText('Perdu');
              setGameState(100)
            },1800)   
        }else{
          console.log(newTotalBank)
          console.log(cardPlayer)
          console.log(cardBank)
          console.log(arrayCardShow)
          console.log(newTotalPlayer)
          console.log(double)

          setTimeout(function(){        
            setWinnerText('Erreur')
            setGameState(100)
          },1800) 
        }
    }


    const settingMise = (add) => {
      if(add==0){
        setMise(0)
      }else{
        setMise(mise + add)
      }
    }
 
   
    const changeCard1 = () => {
      let random = Math.floor(Math.random() * 52) + 1;
      setTimeout(function(){ 
        setCard3(random);
        setArrayCardShow(oldArray => [...oldArray, random]);
        fadeOut(cardFallPlayer1)
        playSound()
      }
        ,100) 
      return random
    }

    const changeCard2 = (rand) => {
      let random = Math.floor(Math.random() * 52) + 1;
      let randomVerify = false
      if(rand == random){
        while (!randomVerify){
          random = Math.floor(Math.random() * 52) + 1;
          if(rand != random){ randomVerify = true;break;}
        }
      }
      setTimeout(function(){ 
        setCardBank1(random);
        setArrayCardShow(oldArray => [...oldArray, random]);
        fadeOut(cardFallBank1)
        playSound()
      }
      ,700) 
      return random;
    }

    const changeCard3 = (rand,rand2) => {
      let random = Math.floor(Math.random() * 52) + 1;
      let randomVerify = false
      if(rand == random || rand2 == random){
        while (!randomVerify){
          random = Math.floor(Math.random() * 52) + 1;
          if(rand != random && rand2 != random){ randomVerify = true;break;}
        }
      }
      setTimeout(function(){ 
        setCard4(random);
        setArrayCardShow(oldArray => [...oldArray, random]);
        fadeOut(cardFallPlayer2)
        playSound()
        
      }
      ,1300) 
      return random;
    }

    const startGame = () => {
      setIsStart(true)
      setCoins(coins => coins - mise)
      setGameState(1)
      setGameState(2)

      let a = changeCard1() //Affiche la premiere carte du joueur
      let b= changeCard2(a) //Afficher la premiere carte du croupier
      let c= changeCard3(b,a) //Affiche la seconde carte du joueur
      let totalValue= arrayValueCard[0][a] + arrayValueCard[0][c];
      setCardPlayer(totalValue)
      setCardBank(arrayValueCard[0][b])
    }

    const restart = () => {
      setArrayCardShow([]);
      setCardBank1(0)
      setCardBank2(0)
      setCardBank3(0)
      setCardBank4(0)
      setCardBank5(0)
      setCard3(0)
      setCard5(0)
      setCard4(0)
      setCard6(0)
      setCard7(0)
      setGameState(0)
      setCardPlayer(0)
      setCardBank(0)
      setIsStart(false)
      setMise(0)
      setWinnerText('')
      setIsDouble(false)
    }


    const fadeOut = (cardToFall) => {
      // Will change fadeAnim value to 0 in 5 seconds
      Animated.timing(cardToFall, {
        useNativeDriver:true,
        toValue: 50,
        duration: 500
      }).start();
    };

    return (
      <View style={[styles.main_container,{backgroundColor:'#2d523c'}]}>
        <View style={{flex:1}}>
          <View style={styles.headerScore}>
            <Text style={styles.score}>
               Coins : {coins}
            </Text>
            <Text style={styles.score}>
                Mise : {mise}
            </Text>
          </View>
          <View style={styles.viewMachine}>
   
            <View style={{flex:1,flexDirection:'row', }}>
              {cardBank1 != 0 ?
                <Animated.View style={[styles.card,{transform: [{translateY: cardFallBank1}]}]}>
                    <Text style={styles.cardInside}>{cardBank1 == 0 ? "?" : arrayCard[0][cardBank1]}</Text>
                    <Text style={styles.cardInsideBottom}>{cardBank1 == 0 ? "?" : arrayCard[0][cardBank1]}</Text>
                </Animated.View>
                :
                <View></View>
              }
                {cardBank2 != 0 ?
                <Animated.View style={[styles.card,{transform: [{translateY: cardFallBank2}]}]}>
                    <Text style={styles.cardInside}>{cardBank2 == 0 ? "?" : arrayCard[0][cardBank2]}</Text>
                    <Text style={styles.cardInsideBottom}>{cardBank2 == 0 ? "?" : arrayCard[0][cardBank2]}</Text>
                </Animated.View>     
                :
                <View></View>
              }
                {cardBank3 != 0 ?
                  <Animated.View style={[styles.card,{transform: [{translateY: cardFallBank3}]}]}>
                      <Text style={styles.cardInside}>{cardBank3 == 0 ? "?" : arrayCard[0][cardBank3]}</Text>
                      <Text style={styles.cardInsideBottom}>{cardBank3 == 0 ? "?" : arrayCard[0][cardBank3]}</Text>
                  </Animated.View>
                  :
                  <View></View>
                }
                {cardBank4 != 0 ?
                  <Animated.View style={[styles.card,{transform: [{translateY: cardFallBank4}]}]}>
                      <Text style={styles.cardInside}>{cardBank4 == 0 ? "?" : arrayCard[0][cardBank4]}</Text>
                      <Text style={styles.cardInsideBottom}>{cardBank4 == 0 ? "?" : arrayCard[0][cardBank4]}</Text>
                  </Animated.View>
                  :
                  <View></View>
                }
                {cardBank5 != 0 ?
                  <Animated.View style={[styles.card,{transform: [{translateY: cardFallBank5}]}]}>
                      <Text style={styles.cardInside}>{cardBank5 == 0 ? "?" : arrayCard[0][cardBank5]}</Text>
                      <Text style={styles.cardInsideBottom}>{cardBank5 == 0 ? "?" : arrayCard[0][cardBank5]}</Text>
                  </Animated.View>
                  :
                  <View></View>
                }
            </View>
            <View style={{height:60,top:70, justifyContent:'flex-end',alignItems:'center'}}>
              
              <Text style={winnerText != "" ? {fontSize:40, backgroundColor:'rgba(34, 166, 156, 0.5)',paddingVertical:10,textAlign:'center',width:200,paddingHorizontal:0,borderRadius:10, color:'lime',fontWeight:'bold'} : ""}>
                {winnerText} 
              </Text>
              {winnerText != "" ?
              <Pressable style={{backgroundColor:'teal',borderRadius:10,padding:20, color:'pink',top:140,zIndex:30}}
              onPress={() => restart()}>
              <Text style={{fontSize:30,color:'white'}}>Rejouer</Text>
              </Pressable>
              : 
                <View>
                </View>}
                {gameState==0 ? <View>
                  <Text style={{fontSize:30,color:'white'}}>Votre Mise : {mise}</Text>
                  <View style={{}}>      
                    <Pressable
                    onPress={() => startGame()}
                    >
                    <Text style={{
                      paddingHorizontal:30,
                      paddingVertical:10,
                      backgroundColor:'lime',
                      borderRadius:10,
                      color:'black',
                      fontSize:38,
                      textAlign:'center',
                      marginTop:30
                      }}>Start</Text>
                    </Pressable> 
                  </View>
                  </View> : <View></View>}
            </View>
            <View style={{flex:2,flexDirection:'row'}}>

            {card3 != 0 ?
                <Animated.View style={[styles.card,{transform: [{translateY: cardFallPlayer1}]}]}>
                    <Text style={styles.cardInside}>{card3 == 0 ? "?" : arrayCard[0][card3]}</Text>
                    <Text style={styles.cardInsideBottom}>{card3 == 0 ? "?" : arrayCard[0][card3]}</Text>
                </Animated.View>
                :
                <View></View>
            }
            {card4 != 0 ?
                <Animated.View style={[styles.cardLeft,{transform: [{translateY: cardFallPlayer2}]}]}>
                    <Text style={styles.cardInside}>{card4 == 0 ? "?" : arrayCard[0][card4]}</Text>
                    <Text style={styles.cardInsideBottom}>{card4 == 0 ? "?" : arrayCard[0][card4]}</Text>

                </Animated.View>
                :
                <View></View>
            }
            {card5 != 0 ?
                <Animated.View style={[styles.cardLeft5,{transform: [{translateY: cardFallPlayer3}]}]}>
                    <Text style={styles.cardInside}>{card5 == 0 ? "?" : arrayCard[0][card5]}</Text>
                    <Text style={styles.cardInsideBottom}>{card5 == 0 ? "?" : arrayCard[0][card5]}</Text>
                </Animated.View>
                :
                <View></View>
            }
            {card6 != 0 ?
                <Animated.View style={[styles.cardLeft6,{transform: [{translateY: cardFallPlayer4}]}]}>
                    <Text style={styles.cardInside}>{card6 == 0 ? "?" : arrayCard[0][card6]}</Text>
                    <Text style={styles.cardInsideBottom}>{card6 == 0 ? "?" : arrayCard[0][card6]}</Text>
                </Animated.View>
                :
                <View></View>
            }
            {card7 != 0 ?
                <Animated.View style={[styles.cardLeft7,{transform: [{translateY: cardFallPlayer5}]}]}>
                    <Text style={styles.cardInside}>{card7 == 0 ? "?" : arrayCard[0][card7]}</Text>
                    <Text style={styles.cardInsideBottom}>{card7 == 0 ? "?" : arrayCard[0][card7]}</Text>
                </Animated.View>
                :
                <View></View>
            }
            {card8 != 0 ?
                <Animated.View style={[styles.cardLeft8,{transform: [{translateY: cardFallPlayer6}]}]}>
                    <Text style={styles.cardInside}>{card8 == 0 ? "?" : arrayCard[0][card8]}</Text>
                    <Text style={styles.cardInsideBottom}>{card8 == 0 ? "?" : arrayCard[0][card8]}</Text>
                </Animated.View>
                :
                <View></View>
            }
            </View>
          </View>
          
          {isStart ? 
            <View style={styles.bottomView}>
              <View style={styles.bottomDivided}>
            
                  <Pressable
                  style={[styles.bottomText,{backgroundColor:'green'}]}
                  onPress={() => hit()}
                  >
                  <Text style={{fontSize:20,color:'black',fontWeight:'bold',textAlign:'center',width:60}}>Hit</Text>
                  </Pressable> 
                  
 
              </View>
              <View style={styles.bottomDivided}>
                  <Pressable
                  style={[styles.bottomText,{backgroundColor:'#cd0c0c'}]}
                  onPress={() => stay()}
                  >
                  <Text style={{fontSize:19,color:'black',fontWeight:'bold',width:60,textAlign:'center'}}>Stand</Text>
                  </Pressable>
              </View>
              <View style={styles.bottomDivided}>
                  <Pressable
                  style={[styles.bottomText,{backgroundColor:'#0e6ebe'}]}
                  onPress={() => double()}
                  >
                  <Text style={{fontSize:19,color:'black',fontWeight:'bold',width:70,textAlign:'center'}}>Double</Text>
                  </Pressable>
              </View>
            </View>
          :        
          
          <View style={styles.bottomView}>
            
            <View style={styles.bottomDivided}>
                <Pressable
                onPress={() => settingMise(2)}
                >
                <View style={[styles.bottomTextCircle,{backgroundColor:'#dbe3e3'}]}>
                  <Text style={styles.bottomText1}>2</Text>
                </View>
                </Pressable>
                
            </View>
            <View style={[styles.bottomDivided]}>
                <Pressable
                onPress={() => settingMise(5)}
                >
                <View style={[styles.bottomTextCircle,{backgroundColor:'#dbe3e3'}]}>
                  <Text style={styles.bottomText2}>5</Text>
                </View>
                </Pressable>
                
            </View>
            <View style={styles.bottomDivided}>
                <Pressable
                onPress={() => settingMise(10)}
                >
                <View style={[styles.bottomTextCircle,{backgroundColor:'#dbe3e3'}]}>
                  <Text style={styles.bottomText3}>10</Text>
                </View>
                </Pressable>
                
            </View>
            <View style={styles.bottomDivided}>
                <Pressable
                onPress={() => settingMise(25)}
                >
                <View style={[styles.bottomTextCircle,{backgroundColor:'#dbe3e3'}]}>
                  <Text style={styles.bottomText4}>25</Text>
                </View>
                </Pressable>
            </View>
            <View style={styles.bottomDivided}>
                <Pressable
                onPress={() => settingMise(0)}
                >
                <Text style={styles.bottomText5}>X</Text>
                </Pressable>
            </View>
          </View>
        }
          
        </View>
       
      </View>
    )
  }


const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    card:{
        height:110,
        width:70,
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:5,

    },
    cardInside:{
      paddingLeft:2,
      fontSize:18
    },  
    cardInsideBottom:{
      paddingLeft:2,
      fontSize:18,
      position:'absolute',
      bottom:0,
      right:0,
      transform:[{rotate:'180deg'}]
    },  
    cardLeft:{
        height:110,
        width:70,
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:5,
        marginLeft:-27,
        marginTop:10
    },
    cardLeft5:{
      height:110,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:20
    },
    cardLeft6:{
      height:110,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:28
    },
    cardLeft7:{
      height:110,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:36
    },
    cardLeft8:{
      height:110,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:42
    },
    headerScore:{
      height:60,
      flexDirection:'row',
      marginBottom:10,
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'black'
    },
    bottomView:{
        height:80,
        flexDirection:'row'
    },
    bottomDivided:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    bottomText:{
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'green',
        paddingHorizontal:30,
        paddingVertical:13,
        borderRadius:30,
    },
    bottomText1:{
      color:'#dbe3e3',
      textAlign:'center',
      backgroundColor:'purple',
      textAlignVertical:'center',
      textAlign:'center',
      width:50,
      height:50,
      borderRadius:50,
      fontSize:25,
      fontWeight:'bold',
      borderColor:'black',
      borderWidth:4,
      borderStyle:'dashed'
    },
    bottomTextCircle:{
      color:'gray',
      textAlign:'center',
      backgroundColor:'indigo',
      textAlignVertical:'center',
      textAlign:'center',
      width:50,
      height:50,
      borderRadius:30,
      fontWeight:'bold',
      fontSize:25,
      borderColor:'black',
    },
    bottomText2:{
      color:'#dbe3e3',
      textAlign:'center',
      backgroundColor:'indigo',
      textAlignVertical:'center',
      textAlign:'center',
      width:50,
      height:50,
      borderRadius:30,
      fontSize:25,
      fontWeight:'bold',
      borderColor:'black',
      borderWidth:4,
      borderStyle:'dashed'
    },
    bottomText3:{
      color:'#dbe3e3',
      textAlign:'center',
      backgroundColor:'blue',
      textAlignVertical:'center',
      textAlign:'center',
      width:50,
      height:50,
      fontWeight:'bold',
      borderRadius:30,
      fontSize:25,
      borderColor:'black',
      borderWidth:4,
      borderStyle:'dashed'
    },
    bottomText4:{
      color:'#dbe3e3',
      textAlign:'center',
      backgroundColor:'red',
      textAlignVertical:'center',
      textAlign:'center',
      width:50,
      height:50,
      borderRadius:30,
      fontSize:25,
      fontWeight:'bold',
      borderColor:'black',
      borderWidth:4,
      borderStyle:'dashed'
    },
    bottomText5:{
      color:'#dbe3e3',
      textAlign:'center',
      backgroundColor:'#302f2f',
      textAlignVertical:'center',
      textAlign:'center',
      width:55,
      fontWeight:'bold',
      height:55,
      borderRadius:30,
      fontSize:25,
      borderColor:'black',
 
    },
    score:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      fontSize:20,
      color:'#b2babb',
    },
    viewMachine:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
  })
  

  export default BlackJack;