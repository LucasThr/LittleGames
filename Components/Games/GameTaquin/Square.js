// ../Components/Games/GameTaquin/Square.js

import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Square extends React.Component {

    constructor(props) {
        super(props)
          this.boardReviewNew = []
          this.index = null
          this.indexId = null
        this.state = {
            boardReview: this.props.board,
        }
      }

      
      __displayNumber(id){
          if(id==0){
              return(<Text style={styles.ButtonInside0}></Text>)
          }
          else{
            return(<Text style={styles.ButtonInside}>{id}</Text>)
        }
      }

      __actionTouch(id){
        this.index = this.props.board.indexOf(0)
        if(id==this.props.board[this.index+1] || id==this.props.board[this.index-1] || id==this.props.board[this.index+4] || id==this.props.board[this.index-4]){
            this.boardReviewNew = this.props.board;                
            this.indexId = this.boardReviewNew.indexOf(id)
            // 2. Make a shallow copy of the item you want to mutate
            let item = this.boardReviewNew[this.index];
            let itemId = this.boardReviewNew[this.indexId];
            // 3. Replace the property you're intested in
            let switchId = item
            item = itemId
            itemId=switchId
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            this.boardReviewNew[this.index] = item;
            this.boardReviewNew[this.indexId] = itemId;
          

            // 5. Set the state to our new copy
            this.setState({boardReview: this.boardReviewNew})
            //this.setState({boardReview: boardReviewNew});
            //this.state.boardReview[index]==this.state.boardReview[indexId]

            this.changeBoard(this.state.boardReview)
        }else{
          
        }
      }

      changeBoard = (data) => {
        // this.props.boardFunction(this.state.boardReview)
        this.props.boardFunction(data)
        
    }


  render() {
    const { id } = this.props
    return (
        <TouchableOpacity 
          style={styles.box}

          onPress={() => this.__actionTouch(id)}
        >
        {this.__displayNumber(id)}
    
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  box: {
    height:65,
    width:65,
    borderWidth:1,
    

  },
  ButtonInside: {
    textAlign: 'center',
    fontSize:45,
    color:'white',
    backgroundColor: 'red',
    paddingBottom:3

  },
  ButtonInside0: {
    textAlign: 'center',
    fontSize:45,
    color:'white',
    backgroundColor: '#5d5757',
    paddingBottom:3
  },

})


export default Square