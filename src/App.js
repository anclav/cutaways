import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Appbar } from 'react-native-paper';
import MyAppBar from './components/MyAppBar'

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <MyAppBar />
    );
  }
}