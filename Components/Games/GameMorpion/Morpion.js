// ../Components/Games.Sudoku.js

import React from 'react'
import { StyleSheet,Text, Modal, TouchableHighlight, View, Image, Alert } from 'react-native'
import Square from './Square.js'


class Morpion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        turn: false,
        board: [[null,null,null],[null,null,null],[null,null,null]],
        countTurn: 0,
        modalVisible: false,
        winner: null
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible});
  }


winner(){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    for(let j = 0; j<3; j++){
    if (this.state.board[j][a] && this.state.board[j][a] === this.state.board[j][b] && this.state.board[j][a] === this.state.board[j][c]) {
    //if(this.state.board[0][0]==lines[0][0] || this.state.board[1]==lines[1] || this.state.board[2]==lines[2]){
      
      return true
    }
    else if (this.state.board[0][j] && this.state.board[0][j] === this.state.board[1][j] && this.state.board[0][j] === this.state.board[2][j]) {
      //if(this.state.board[0][0]==lines[0][0] || this.state.board[1]==lines[1] || this.state.board[2]==lines[2]){
        
        return true
      }
    else if (this.state.board[0][0] && this.state.board[0][0] === this.state.board[1][1] && this.state.board[0][0] === this.state.board[2][2]) {
      //if(this.state.board[0][0]==lines[0][0] || this.state.board[1]==lines[1] || this.state.board[2]==lines[2]){
        
        return true
      }
    else if (this.state.board[0][2] && this.state.board[0][2] === this.state.board[1][1] && this.state.board[0][2] === this.state.board[2][0]) {
      //if(this.state.board[0][0]==lines[0][0] || this.state.board[1]==lines[1] || this.state.board[2]==lines[2]){
        
        return true
      }
    }
  }
}


  toggleTurn = () => {
   
    let win = this.winner()
    // console.log('board')
    // console.log(this.state.board[0])
    

    if(!win){
    this.setState(state => ({ turn: !state.turn, countTurn: state.countTurn+1 }));
    if(this.state.countTurn==8){
      this.setState({ winner: false})
      this.setModalVisible(true);
    }
    }else{
      this.state.turn ? this.setState({ winner: 'O'}) :   this.setState({ winner: 'X'});
    
      this.setModalVisible(true);
      
    }

  }

  __displayWinner(){
    if(!this.state.winner){
      return(
        <Text style={styles.modalText}> Egalité !</Text>
      )
    }else{
      return(
      <Text style={styles.modalText}> {this.state.winner} a gagné !</Text>
      )
    }
  }

  refreshBoard = (Data) => {
    this.setState({ board: Data });

  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.main}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {this.__displayWinner()}

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Fermer ici</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      <View style={styles.main_container}>
        <View style={styles.box_container}>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='0' y='0'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='1' y='0'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='2' y='0'/>
        </View>
        <View style={styles.box_container}>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='0' y='1'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='1' y='1'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='2' y='1'/>
        </View>
        <View style={styles.box_container}>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='0' y='2'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='1' y='2'/>
          <Square  turn={this.toggleTurn} player={this.state.turn} board={this.state.board} boardReview={this.refreshBoard} x='2' y='2'/>
        </View>
        
      </View>
      <Text style={styles.text}>Au tour de : {this.state.turn ? 'O' : 'X'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#505050'
  },
  main_container: {
    marginTop:60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  box_container: {
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal:80,
    elevation: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:50
  },
  ButtonInside: {
    textAlign: 'center',
    fontSize:45,
    color:'blue'
  },
  text: {
    fontSize: 40,
    textAlign:'center',
    marginTop:60,
    color:'white'
  }
})


export default Morpion