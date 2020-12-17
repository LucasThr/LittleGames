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
                return(<Ionicons name={'ios-ellipse-outline'} size={70} color={'#27d980'}/>)
            }

        }
  }

    sendData = () => {
        this.props.turn();
    }

    changeBoard = () => {
        this.props.boardReview(this.state.boardChange)
    }

__styleBox(x,y){
    if((x==0 && y==0) || (x==1 && y==0) ||  (x==0 && y==1) || (x==1 && y==1)){
        return(styles.boxHori)
    }
    else if((x==2 && y==0) || (x==2 && y==1)){
        return(styles.boxVerti)
    }
    else if((x==1 && y==2) || (x==0 && y==2)){
        return(styles.boxLast)
    }
    else{
        return(styles.box)
    }
}

  render() {
    return (
        <TouchableOpacity 
          style={this.__styleBox(this.props.x,this.props.y)}
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
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',

  },
  boxHori:{
    height:100,
    width:100,
    borderRightWidth:3,
    borderBottomWidth:3,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#acacac',
  },
  boxVerti:{
    height:100,
    width:100,
    borderRightWidth:3,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#acacac',
  },
  boxLast:{
    height:100,
    width:100,
    borderBottomWidth:3,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#acacac',
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