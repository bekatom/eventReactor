/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';


class eventReactor extends Component {
  render() {
    return (
      <View style={styles.global.mainContainer}>
      <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
        />
        <View style={styles.navbar.appearance}>
            <View style={styles.navbar.button}></View>
            <Text style={[styles.navbar.title, componentStyles.titleItalic]}> Event Reactor </Text> 
            <Text style={styles.navbar.button}> Search </Text> 
        </View> 
        <View style={styles.global.content}>
          <Text>
             Lorem Ipsum site amet, content, Lorem Ipsum site amet, content  Lorem Ipsum site amet, content 
          </Text>
        </View>
      </View>
    );
  }
}

import styles from './styles';
var componentStyles = StyleSheet.create({
  titleItalic: {
    fontStyle : 'italic',
    fontWeight: 'normal',
  }
})


AppRegistry.registerComponent('eventReactor', () => eventReactor);
