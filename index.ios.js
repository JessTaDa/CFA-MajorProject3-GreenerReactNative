/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Image,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Button,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


export default class cuppa extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scanSuccess: false
    }
  }

  print() {
    console.log("hello")
  }

  onScannedBarcode (e) {
    // console.log(e);
    this.setState({
      scanSuccess: true
    })
    console.log(this.state.scanSuccess)


    // post to axios
    // if scanned, show success screen and button to exit success screen
    // constructor:
    // scansuccess: false
    // if scanSuccess = true? : show success scrreen : show camera

}

  render() {
    return (
      <View>
          <Button title="hello" color="#841584" onPress={this.print}/>
          <QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>

          {/* {this.state.scannedSuccess ? (
            // <Text>Wooo Success!</Text>
            <Button color="#841584"/>
          ) : (
            <QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>
          )} */}




      {/* {this.state.scannedSuccess ? (<Text>Wooo Success!</Text>) :
        (<QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>
            )} */}

      </View>
    )
  }
}



AppRegistry.registerComponent('cuppa', () => cuppa);
