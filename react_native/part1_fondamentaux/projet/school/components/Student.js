import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from '../Styles';

const Student = ({ navigation, id, name, attendance, lessons, mention }) => {

    return (
        <>
            <View
                style={[
                    styles.item,
                    { flex: 1, flexDirection: 'row' },
                    { backgroundColor: '#6e3b6e' }
                ]}
            >
                <View style={{ width: 110 }}>
                    <Image
                        source={{ uri: `https://picsum.photos/id/${id}/100/100` }}
                        style={{ width: 100, height: 100, marginRight: 10 }}
                    />
                </View>
                <View style={{ width: 200 }}>
                    <Text>{name}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Nombre d'abscence(s) {attendance}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Nombre de cours {lessons ? lessons.length : 0}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }} >Moyenne </Text>
                    <Text>Mention : aucune pour l'instant</Text>
                </View>
            </View>
        </>
    );
}

export default Student;