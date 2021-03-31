import React from 'react';
import {
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';

import Student from '../components/Student';
import { useSelector, useDispatch } from 'react-redux';
import { order } from '../actions/actions-types';

import styles from '../Styles';

const StudentsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { students } = useSelector(state => state.school);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
           <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => dispatch(order())}>
                <Text style={styles.buttonText}>Order average</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.containerStudent}
                data={students}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    const { notes } = item;

                    return (
                        <Student
                            key={item.id}
                            {...item}
                            average={1}
                            navigation={navigation}
                        />
                    );
                }}
            />
        </SafeAreaView>
    )
}

export default StudentsScreen;