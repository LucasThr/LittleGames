// ../Components/Chat/Chat.js

import React from 'react'
import { useHeaderHeight } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,ScrollView, Text,Icon, TouchableOpacity, Keyboard, KeyboardAvoidingView, TextInput, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
// import {} from "socket.io";

// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const socket = io('http://localhost:1337')
// const port = 3000;

//Keyboard.addListener('keyboardWillChangeFrame', this._onKeyboardChange)

class HomeGames extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           chatMessage: "",
           chatMessages: ['Hello !']
        };
     }


    //  componentDidMount() {
    //     this.socket = io("http://192.168.1.83:19000");
    //      this.socket.on("chat message", msg => {
    //            this.setState({ chatMessages: [...this.state.chatMessages, msg]   
    //       });
    //    });
    //  }

     submitChatMessage() {
        // this.socket.emit('chat message', this.state.chatMessage);
        if(this.state.chatMessage !==''){
          this.setState({ chatMessages: [...this.state.chatMessages, this.state.chatMessage]});
        
          this.setState({chatMessage: ''});
        }
        
      }

  render() {

    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text style={styles.chat}>{chatMessage}</Text>
    ));
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null }
   
        style={styles.container}
      >
     
      
        <ScrollView style={styles.viewChat}
        ref={ref => {this.scrollView = ref}}
         onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
          
        {chatMessages}
        </ScrollView
        >
       
        <View style={styles.viewInput}>
        
        <TextInput
          style={styles.input}
          placeholder="Votre Message"
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}
        />
        <TouchableOpacity style={styles.emit}
        onPress={() => this.submitChatMessage() }>
          <Ionicons name="send-sharp" size={30} color="black" />
        
        </TouchableOpacity>
        </View> 
    </KeyboardAvoidingView>

   )
  }

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


export default HomeGames