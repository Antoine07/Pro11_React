import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStudentById } from '../actions/actions-types';

import styles from '../Styles';

const AbscenceScreen = () => {
  const navigation = useNavigation();
  const {params : { id }} = useRoute();
  const { student } = useSelector(state => state.school );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getStudentById(id) );
  }, [id]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>Abscence</Text>
    </SafeAreaView>
  );
}

export default AbscenceScreen;