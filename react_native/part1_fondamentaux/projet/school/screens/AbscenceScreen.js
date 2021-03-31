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
import { decrementAttendance, getStudentById, incrementAttendance } from '../actions/actions-types';

import styles from '../Styles';

const AbscenceScreen = () => {
  const navigation = useNavigation();
  const { params: { id } } = useRoute();
  const { student } = useSelector(state => state.school);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [id]);

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch(incrementAttendance({ id, sens: 1 }))}
        >
          <Text style={styles.buttonText}>Incrémente abscence (+1) </Text>
        </TouchableOpacity>
        { student.attendance > 0 && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => dispatch(decrementAttendance({ id, sens: -1 }))}
          >
            <Text style={styles.buttonText}>Incrémente abscence (-1) </Text>
          </TouchableOpacity>
        )}
        <Text >Abscence de :  nombre d'abscence(s) : {student && student.attendance} </Text>
      </SafeAreaView>
    );

}

export default AbscenceScreen;