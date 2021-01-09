
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';


export function DrawerContent(props) {




    return(
        <View style={{flex:1}}>
          <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Menu
                </Text>
            </View>
            <View style={{marginTop:10}}>
            <DrawerItemList {...props} />
            </View>

    </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginVertical: 10,
      textAlign:'center',
      fontWeight: 'bold',
      color:'#c4c4c4'

    },
    header: {
      justifyContent:'center',
      backgroundColor:'#303030',
      borderBottomWidth: 2,
      borderBottomColor:'#4f4e4e',
      lineHeight: 14,
      height:78
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });