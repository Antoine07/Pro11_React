import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput, TouchableHighlight, FlatList } from 'react-native';
import { addNumber, addMemory, setMessage, reset, player, computer } from '../actions/action-type';
import { connect } from 'react-redux';

import JuniperText from './JuniperText';
import Score from './Score';

class Game extends Component {

  static navigationOptions = {
    title: 'Game',
  };

  onPress = () => {

    if ( this.props.juniper.number === '' ) {

      this.props.setMessage("Champ vide, vous devez saisir un nombre entier")

      return;
    }

    this.props.player(this.props.juniper.number);
  }

  onReset = () => {
    this.props.reset();
    this.props.navigation.navigate('Home')
  }

  // les props ou state changent => on exécute cette fonction
  // dans les hooks le hook useEffect agit de la même manière attention à watcher les props que l'on souhaite
  // suivre dans les valeurs qui changent
  componentDidUpdate(prevProps) {
    if (prevProps.juniper.computer != this.props.juniper.computer) {
      //this.props.computer();
      console.log("Memory score !!!");

      // historique du jeu 
      this.props.addMemory({ 
        choicePlayer : this.props.juniper.player, 
        choiceComputer : this.props.juniper.computer,
        player : this.props.juniper.flag_player
      })
    }
  }

  render() {

    const { juniper, score, navigation } = this.props;

    if (juniper.valid.length === 0) {

      return (
        <Score score={score} navigation = {navigation} />
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <JuniperText >Game Juniper</JuniperText>
          <Button
            title="Revenir la page principale"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
            title="Les règles du jeu"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Reset Game"
            onPress={() => this.onReset()}
          />
        </View>
        <JuniperText>{juniper.message}</JuniperText>
        <JuniperText>Computer : {juniper.computer} </JuniperText>
        <View style={styles.content}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.props.addNumber(text)}
            keyboardType='number-pad'
            value={juniper.number}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
          >
            <JuniperText>Valider</JuniperText>
          </TouchableHighlight>
        </View>
        <View style={styles.choices}>
          <>
            <View style={styles.itemChoice}>
              <JuniperText> Valeurs possibles </JuniperText>
              <FlatList
                data={[
                  ...juniper.valid
                ]}
                renderItem={({ item }) => <JuniperText style={styles.number}>{item}</JuniperText>}
                keyExtractor={() => Math.random() + ""}
              />
              <JuniperText> Vos choix </JuniperText>
              <FlatList
                data={[
                  ...score.choicePlayer
                ]}
                renderItem={({ item }) => <JuniperText style={styles.number}>{item}</JuniperText>}
                keyExtractor={() => Math.random() + ""}
              />
            </View>
            <View style={styles.itemChoice}>
              <JuniperText> Choix computer </JuniperText>
              <FlatList
                data={[
                  ...score.choiceComputer
                ]}
                renderItem={({ item }) => <JuniperText style={styles.number}>{item}</JuniperText>}
                keyExtractor={() => Math.random() + ""}
              />
            </View>
          </>
        </View>
      </View >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: (number) => dispatch(addNumber(number)),
    setMessage: (message) => dispatch(setMessage(message)),
    addMemory: (memory) => dispatch(addMemory(memory)),
    reset: () => dispatch(reset()),
    player: (choice) => dispatch(player(choice)),
    computer: () => dispatch(computer()),

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
    height: 150
  },
  content: {
    height: 100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  choices: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  itemChoice: {
    width: '50%' // is 50% of container width
  },
  number: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);