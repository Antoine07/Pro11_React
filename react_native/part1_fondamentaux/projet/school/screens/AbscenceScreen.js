import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../Styles';

const AbscenceScreen = ({ navigation, route }) => {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>Abscence</Text>
    </SafeAreaView>
  );
}

export default AbscenceScreen;