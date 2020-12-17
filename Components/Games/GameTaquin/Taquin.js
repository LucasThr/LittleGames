// ../Components/Games/Taquin.js

import React from "react";
import { StyleSheet, Button, Alert, Modal ,Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native'
import Square from './Square.js'



class Taquin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: [
          1,2,3,4,5,6,7,8,9,10,11,0
      ],
      boardResult: [
        1,2,3,4,5,6,7,8,9,10,11,0
      ],
      modalVisible: false
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    this.setState({board: tab})
}


// tab = randomize(tab);

  changeBoard = (Data) => {
    this.setState({board: Data})
    let verify = true
    for (var a = 0; a < this.state.board.length; ++a) {
      if (this.state.board[a] != this.state.boardResult[a]) {
        verify = false
      }
    }
    if(verify){
      this.setModalVisible(true);
    }
  }

  
  render() {
    const { modalVisible } = this.state;
    return (
      
      <View style={styles.container}>
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
              <Text style={styles.modalText}>Félicitations !</Text>

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
            <Square id={this.state.board[0]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[4]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[8]}  boardFunction={this.changeBoard} board={this.state.board}/>
          </View>
          <View style={styles.box_container}>
            <Square id={this.state.board[1]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[5]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[9]} boardFunction={this.changeBoard} board={this.state.board}/>
          </View>
          <View style={styles.box_container}>
            <Square id={this.state.board[2]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[6]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[10]} boardFunction={this.changeBoard} board={this.state.board}/>
          </View>
          <View style={styles.box_container}>
            <Square id={this.state.board[3]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[7]}  boardFunction={this.changeBoard} board={this.state.board}/>
            <Square id={this.state.board[11]}  boardFunction={this.changeBoard} board={this.state.board}/>
          </View>
     </View>
      <View style={styles.container_box}>
        <TouchableOpacity   
          onPress={() => this.randomize(this.state.board)}
   
          style={styles.button}>
            <Text style={styles.buttonText}>Jouer</Text>
          </TouchableOpacity>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#505050'
    
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
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  titleGames: {
    textAlign: 'center',
    fontSize:45,
    color:'white'
  },
  container_box:{
    alignItems:'center',
    marginBottom:50,
  },
  button: {
    height:80,
    width:200,
    backgroundColor:'#06e79f',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  buttonText:{
    fontSize:42
  }
})


export default Taquin