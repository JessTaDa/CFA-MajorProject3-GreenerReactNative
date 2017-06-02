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
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


export default class cuppa extends Component {

onScannedBarcode (e) {
console.log(e);
post to axios
// if scanned, show success screen and button to exit success screen
constructor:
scansuccess: false
if scanSuccess = true? : show success scrreen : show camera

}



  render() {
    return (
      <View>
        {/* <Camera /> */}

{this.state.scannedSuccess ? (

<Text>Wooo</Text>
) : (


        <QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>
      )}

      </View>
    )
  }
}



AppRegistry.registerComponent('cuppa', () => cuppa);
