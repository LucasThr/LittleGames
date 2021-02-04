// ../Components/Chat/Chat.js

import React, { useEffect, useState, useRef } from 'react'
import { useHeaderHeight } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,ScrollView, Text,Icon, TouchableOpacity, Keyboard, KeyboardAvoidingView, TextInput, View, Image, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AdMobRewarded } from 'expo-ads-admob';

const PubJetons = (props) => {
  const [loadedAd, setLoadedAd] = useState(false);
  const [reward,setReward] = useState(0);
  const [isLoading,setIsLoading] = useState(false);

  const jetons = useSelector(state => state.jetons)
  const dispatch = useDispatch()
  
  const modifyJetons = (val) => {
    dispatch({ type: 'UPDATE_JETONS', payload: val })
  }
 const videoIsClose = () => {
  console.log('Rewarded set to player')
  var jetonsRewarded = jetons + 30
  modifyJetons(jetonsRewarded)
 }

  useEffect(async () => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    await AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
        // setReward(reward => reward + 80),
        // setIsLoading(false),
        console.log('REWARDED'),
        AdMobRewarded.removeAllListeners()

    );
    await AdMobRewarded.addEventListener("rewardedVideoDidLoad", () =>
        console.log("Video did load")
    );
    await AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () =>
        console.log("Failed to load")
    );
    await AdMobRewarded.addEventListener("rewardedVideoDidOpen", () =>
        console.log("Video did open")
    );
    await AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
            console.log("video did close")
            videoIsClose()

        }
    );
    await AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", () =>
        console.log("Video did leave application")
    );
    await AdMobRewarded.addEventListener("rewardedVideoDidStart", () =>
        console.log("Video did start")
    );
}, [startAd,AdMobRewarded])

   const startAd = async ()  => {
     console.log('L')
     try {
     await AdMobRewarded.requestAdAsync();
    
     await AdMobRewarded.showAdAsync();
     }catch{
       console.log('error')
       await AdMobRewarded.showAdAsync();
       

     }
  }

    return (
    <View style={styles.container}>
  
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:30,alignContent:'center'}}>
        <Text style={{fontSize:40,height:50,textAlign:'center',marginTop:7,color:'#e6faff'}}>
          Vos jetons : 
        </Text>
        <Text style={{fontSize:40,height:50,textAlign:'center',marginTop:7,marginLeft:5,color:'#18e79e'}}>
         {jetons}
        </Text>
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Pressable
      onPress={() => startAd()}
      style={{width:380,height:90,alignItems:'center',justifyContent:'center',backgroundColor:'#db3e3e',borderRadius:18,marginTop:-60}}>
        <Text style={{fontSize:36,height:50,textAlign:'center',color:'white'}}>Regarder une pub</Text>
      </Pressable>
      </View>
    </View>

   )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#505050',

  },
  block:{
    height:180,
  },
  viewChat:{
    flex:1
  },
  viewInput:{
  flexDirection:'row',
    height:80
  },
  input:{
    height: 60,
    borderWidth: 2,
    marginLeft:15,
    marginTop:10,
    paddingLeft:20,
    width:300,
    borderRadius:25,
    backgroundColor:'white',
    color:'green'

    
  },
  emit:{
    height: 60,

    justifyContent:"center",
    alignItems:'center',
    width:60,
    borderWidth: 2,
    marginLeft:15,
    marginTop:10,
    paddingLeft:6,
    borderRadius:100,
    backgroundColor:'lightblue',

  },
  chat:{
    height: 60,
    borderWidth: 2,
    marginRight:20,
    marginLeft:5,
    marginTop:5,
    paddingLeft:10,
    borderRadius:12,
    backgroundColor:'white',
    color:'green',

  },
  box_container: {
    flex:1,
    flexDirection:'row',
  }
})


export default PubJetons