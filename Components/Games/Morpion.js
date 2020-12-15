// ../Components/Games.Sudoku.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import Square from './Square.js'


class Morpion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        turn: false,
        board: [[null,null,null],[null,null,null],[null,null,null]],
        countTurn: 0
    }
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
      alert('Egalité')
    }
    }else{
      this.state.turn ? alert("O a gagné") : alert("X a gagné");
    }

  };

  refreshBoard = (Data) => {
    this.setState({ board: Data });
  }

  render() {
    return (
      <View>
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
      <Text style={styles.text}>Turn to : {this.state.turn ? 'O' : 'X'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop:60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  box_container: {
  },
  box: {
    margin:15,
    borderRadius:20,
    height:100,
    width:100,
    borderWidth:1,
    textAlign:'center',
    justifyContent:'center'

  },
  ButtonInside: {
    textAlign: 'center',
    fontSize:45,
    color:'blue'
  },
  text: {
    fontSize: 30,
    textAlign:'center',
    marginTop:19
  }
})


export default Morpion