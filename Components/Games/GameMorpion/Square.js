// ../Components/Games.Sudoku.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            turn: null,
            boardChange: this.props.board
        }
      }
    
      
  __actionButton(){
    if(this.state.checked==false){
        this.setState({
            checked:true,
            turn: this.props.player
        })
        //this.props.boardChange=this.props.board.slice()
        if(this.props.player==true){
            this.setState({
                boardChange: this.props.board[this.props.x][this.props.y]=1,
            })
            
        }else if(this.props.player==false){
            this.setState({
                boardChange: this.props.board[this.props.x][this.props.y]=2,
            })
        }
        this.changeBoard()
        this.sendData()
    }else{
        alert('Choississez une autre case')
    }
}
        
  __displayButton(){
        //On vérifie si la case est joué
        if(this.state.turn==null){
            //Si elle est vide on retourne un text vide
            return(
                <Text></Text>
            )
        }else{
            //Si elle est fausse on mets une croix sinon un rond
            if(this.state.turn==false){
                return(<Ionicons name={'ios-close-outline'} size={100} color={'red'}/>)
            }
            else{ 
                return(<Ionicons name={'ios-ellipse-outline'} size={70} color={'green'}/>)
            }

        }
  }

    sendData = () => {
        this.props.turn();
    }

    changeBoard = () => {
        this.props.boardReview(this.state.boardChange)
    }

  render() {
    return (
        <TouchableOpacity 
          style={styles.box}
          onPress={() => this.__actionButton(this.props.board)
        }
        >
            {this.__displayButton()}
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  box: {
    margin:15,
    borderRadius:20,
    height:100,
    width:100,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'

  },
  ButtonInsideO: {
    textAlign: 'center',
    fontSize:45,
    color:'blue'
  },
  ButtonInsideX: {
    textAlign: 'center',
    fontSize:45,
    color:'red'
  }
})


export default Square