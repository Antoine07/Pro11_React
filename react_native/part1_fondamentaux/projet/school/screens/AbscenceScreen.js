import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { decrementAttendance, getStudentById, incrementAttendance, selectMention, setMention } from '../actions/actions-types';

import styles from '../Styles';

const AbscenceScreen = () => {
  const navigation = useNavigation();
  const { params: { id } } = useRoute();
  const { student, behaviours } = useSelector(state => state.school);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [id]);

  if (student)
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
        <View style={{ marginTop: 50 }}>
          <Text style={{ alignSelf: 'center', fontSize: 20 }} >Mention</Text>
          <Picker
            style={{ height: 10, alignSelf: 'center', opacity: 1, marginBottom: 10, width: 250, marginTop: 0 }}
            selectedValue={selectMention({behaviours, id})}
            onValueChange={(itemValue, itemIndex) =>
              dispatch( setMention({mention : itemValue, id }) )
            }>
            <Picker.Item label="aucune" value="aucune" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="D" value="D" />
          </Picker>
        </View>
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <Text>No student</Text>
    </SafeAreaView>
  )

}

export default AbscenceScreen;