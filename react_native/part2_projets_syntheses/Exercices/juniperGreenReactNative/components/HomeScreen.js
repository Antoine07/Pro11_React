import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { initGame } from '../actions/action-type';
import { connect } from 'react-redux';

import JuniperText from './JuniperText';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    onPress = () => {
        if( this.props.juniper.valid.length === 0 )
            this.props.initGame();

        this.props.navigation.navigate('Game');
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <JuniperText>Bienvenu voici le jeu Juniper Green.
                    </JuniperText>
                    { this.props.status === "start" && <JuniperText>Le jeu est lancé ...</JuniperText>}
                    </View>
                    <Button
                        title="Les règles du jeu"
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text>Jouer</Text>
                    </TouchableHighlight>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch'
    },
    header: {
        padding: 20,
        height: 100
    },
    content: {
        height: 200
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
});


const mapStateToProps = (state) => {
    return {
      ...state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      initGame: () => dispatch(initGame()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);;
