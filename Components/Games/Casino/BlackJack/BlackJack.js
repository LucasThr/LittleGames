// ../Components/Games/TouchButton.js

import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet,Text,Button, Animated,ImageBackground,Pressable, TouchableOpacity, View, Image } from 'react-native'
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


const Board = () =>{
    const [isOnGame, setIsOnGame] = useState(false);
    if(isOnGame){
        return(
            <Text>fff</Text>
        )
    }else{
        return(
            <Text>ffeff</Text>
        )
    }
}

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
  const [gameState, setGameState] = useState(0)
  const [cardPlayer, setCardPlayer] = useState(0);
  const [cardBank, setCardBank] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [mise, setMise] = useState(0);
  const [winnerText, setWinnerText] = useState("");



    useEffect(() => {
      if(cardPlayer>21){
        setTimeout(function(){  
            setWinnerText('Perdu')
        },500)
      } 
      if(cardPlayer==21 && gameState<3){
        setTimeout(function(){  
          setWinnerText('BlackJack')
        },500)
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
      setCardPlayer(newTotal)

      return random;
    }

    const hit = () =>{
     
      if(card5==0 && gameState==2){

      setGameState(3)
      let random = randoms()
      setTimeout(function(){
        setCard5(random);
        setGameState(4)
      },300)
      }else if(card6==0 && gameState==4){
        let random = randoms()
        setTimeout(function(){
          setCard6(random);
          setGameState(5)

        },300)
      }else if(card7==0 && gameState==5){
        let random = randoms()
        setTimeout(function(){setCard7(random)},300)
      } 
    }

    const stay = () =>{
      let random = Math.floor(Math.random() * 52) + 1;
      setTimeout(function(){setCardBank2(random)},300) 
      let newTotalBank = cardBank + arrayValueCard[0][random]
      let finish = false;
      if(newTotalBank<=16){
        let random = Math.floor(Math.random() * 52) + 1;
        setTimeout(function(){setCardBank3(random)},600)
        newTotalBank = newTotalBank + arrayValueCard[0][random] 
      }else{finish=true;}
      if(newTotalBank<=16){
        let random = Math.floor(Math.random() * 52) + 1;
        setTimeout(function(){setCardBank4(random)},900) 
        newTotalBank = newTotalBank + arrayValueCard[0][random] 
      }else{finish=true;}
      if(newTotalBank<=16){
        let random = Math.floor(Math.random() * 52) + 1;
        setTimeout(function(){setCardBank5(random)},1200) 
        newTotalBank = newTotalBank + arrayValueCard[0][random] 
      }else{finish=true;}

      checkResult(newTotalBank)
    }


    const checkResult = (newTotalBank) => {
        if(newTotalBank>21){
        setTimeout(function(){        
          setWinnerText('Gagné')
        },1200) 
        }else if(newTotalBank==cardPlayer){
          setTimeout(function(){        
            setWinnerText('Egalité')
          },1200) 
        }else if(newTotalBank>cardPlayer){
          setTimeout(function(){        
            setWinnerText('Perdu')
          },1200) 
        }else{
          console.log(newTotalBank)
          console.log(cardPlayer)
          console.log(cardBank)
          console.log(arrayCardShow)

          setTimeout(function(){        
            setWinnerText('Erreur')
          },1200) 
        }
    }


    const settingMise = (add) => {
      setMise(mise + add)
    }
 
   
    const changeCard1 = () => {
      let random = Math.floor(Math.random() * 52) + 1;
      setTimeout(function(){ 
        setCard3(random);
        setArrayCardShow(oldArray => [...oldArray, random]);
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
        setGameState(2);

      }
      ,1300) 
      return random;
    }

    const startGame = () => {
      setIsStart(1)
      setGameState(1)
      let a = changeCard1() //Affiche la premiere carte du joueur
      let b= changeCard2(a) //Afficher la premiere carte du croupier
      let c= changeCard3(b,a) //Affiche la seconde carte du joueur
      let totalValue= arrayValueCard[0][a] + arrayValueCard[0][c];
      setCardPlayer(totalValue)
      setCardBank(arrayValueCard[0][b])
      if(totalValue==21){
        alert('BlackJack')
      }
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
    }

    return (
      <View style={styles.main_container}>
        <View style={{flex:1,backgroundColor:'#242424'}}>
          <View style={styles.headerScore}>
            <Text style={styles.score}>
               Coins : 
            </Text>
            <Text style={styles.score}>
                score : 
            </Text>
            <Text style={styles.score}>
                Mise : {mise}
            </Text>
          </View>
          <View style={styles.viewMachine}>
   
            <View style={{flex:1,flexDirection:'row',marginTop:20}}>
                <View style={styles.card}>
                    <Text style={styles.cardInside}>{cardBank1 == 0 ? "?" : arrayCard[0][cardBank1]}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardInside}>{cardBank2 == 0 ? "?" : arrayCard[0][cardBank2]}</Text>
                </View>     
                {cardBank3 != 0 ?
                  <View style={styles.card}>
                      <Text style={styles.cardInside}>{cardBank3 == 0 ? "?" : arrayCard[0][cardBank3]}</Text>
                  </View>
                  :
                  <View></View>
                }
                {cardBank4 != 0 ?
                  <View style={styles.card}>
                      <Text style={styles.cardInside}>{cardBank4 == 0 ? "?" : arrayCard[0][cardBank4]}</Text>
                  </View>
                  :
                  <View></View>
                }
                {cardBank5 != 0 ?
                  <View style={styles.card}>
                      <Text style={styles.cardInside}>{cardBank5 == 0 ? "?" : arrayCard[0][cardBank5]}</Text>
                  </View>
                  :
                  <View></View>
                }
            </View>
            <View style={{height:60,top:70, justifyContent:'flex-end',alignItems:'center'}}>
              <Text style={{fontSize:30, color:'pink'}}>
                {winnerText}
              </Text>
              {winnerText != "" ?
              <Pressable style={{backgroundColor:'teal',borderRadius:10,padding:20, color:'pink',top:50,zIndex:20}}
              onPress={() => restart()}>
              <Text style={{fontSize:30}}>Réessayer</Text>
              </Pressable>
              : <View></View>}
            </View>
            <View style={{flex:2,flexDirection:'row'}}>

              <View style={styles.card}>
                  <Text style={styles.cardInside}>{card3 == 0 ? "?" : arrayCard[0][card3]}</Text>  
              </View>
              <View style={styles.cardLeft}>
                  <Text style={styles.cardInside}>{card4 == 0 ? "?" : arrayCard[0][card4]}</Text>
              </View>
            {card5 != 0 ?
                <View style={styles.cardLeft5}>
                    <Text style={styles.cardInside}>{card5 == 0 ? "?" : arrayCard[0][card5]}</Text>
                </View>
                :
                <View></View>
            }
            {card6 != 0 ?
                <View style={styles.cardLeft6}>
                    <Text style={styles.cardInside}>{card6 == 0 ? "?" : arrayCard[0][card6]}</Text>
                </View>
                :
                <View></View>
            }
            {card7 != 0 ?
                <View style={styles.cardLeft7}>
                    <Text style={styles.cardInside}>{card7 == 0 ? "?" : arrayCard[0][card7]}</Text>
                </View>
                :
                <View></View>
            }
            </View>
          </View>
          
          {isStart ? 
            <View style={styles.bottomView}>
              <View style={styles.bottomDivided}>
            
                  <Pressable
                  onPress={() => hit()}
                  >
                  <Text style={styles.bottomText}>Hit</Text>
                  </Pressable> 
                  
 
              </View>
              <View style={styles.bottomDivided}>
                  <Pressable
                  onPress={() => stay()}
                  >
                  <Text style={styles.bottomText}>Stand</Text>
                  </Pressable>
              </View>
            </View>
          :        
          <View style={styles.bottomView}>
          <View style={styles.bottomDivided}>      
              <Pressable
              onPress={() => startGame()}
              >
              <Text style={styles.bottomText}>Start</Text>
              </Pressable> 
          </View>
          <View style={styles.bottomDivided}>
              <Pressable
              onPress={() => settingMise(3)}
              >
              <Text style={styles.bottomText}>5</Text>
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
        height:130,
        width:70,
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:5,

    },
    cardInside:{
      paddingLeft:2
    },  
    cardLeft:{
        height:130,
        width:70,
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:5,
        marginLeft:-27,
        marginTop:10
    },
    cardLeft5:{
      height:130,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:20
    },
    cardLeft6:{
      height:130,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:28
    },
    cardLeft7:{
      height:130,
      width:70,
      backgroundColor:'white',
      borderWidth:2,
      borderRadius:5,
      marginLeft:-27,
      marginTop:36
    },
    headerScore:{
      height:40,
      flexDirection:'row',
      marginVertical:10,
      justifyContent:'space-around',
      alignItems:'center'
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
        borderWidth:2,
        textAlign:'center',
        backgroundColor:'red',
        paddingHorizontal:21,
        paddingVertical:10,
        borderRadius:30,
        borderColor:'red'
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
  

  export default BlackJack;