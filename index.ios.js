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

// import Camera from 'react-native-camera';
// import Camera_comp from './components/camera/Camera_comp'
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import Camera from 'react-native-camera';

// import QRCodeScanner from './components/qr_code/QR_code'

import QRCodeScanner from 'react-native-qrcode-scanner';


export default class cuppa extends Component {
  render() {
    return (
      <View>
        {/* <Camera /> */}
        <QRCodeScanner reactivate={true} onRead={(e) => {console.log(e)}}/>
      </View>
    )
  }
}



AppRegistry.registerComponent('cuppa', () => cuppa);
