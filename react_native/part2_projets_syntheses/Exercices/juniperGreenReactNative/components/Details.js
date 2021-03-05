import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import JuniperText from './JuniperText';

class Details extends Component {

  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <JuniperText >Règles du jeu Juniper Green</JuniperText>
          <Button
          title="Revenir la page principale"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
        <View style={styles.content}>
          <JuniperText>
           1. Vous jouez contre le Computer !
          </JuniperText>
          <JuniperText>
           2. L'objectif du jeu : vous allez choisir des multiples ou diviseurs d'un nombre donné.
          </JuniperText>
          <JuniperText>3. Le principe du jeu :</JuniperText>
          <JuniperText>Au départ le Computer choisit un nombre N compris entre 1 et 100.</JuniperText>
          <JuniperText>Le joueur suivant choisi un nombre multiple ou diviseur de N. On ne peut pas reprendre un nombre déjà choisi.</JuniperText>
          <JuniperText>On continue la partie tant qu'on peut choisir un nombre dans la liste des nombres possibles restant.</JuniperText>
          <JuniperText>Le joueur qui perd est celui qui ne peut plus proposer un multiple ou diviseur.</JuniperText>
        </View>
      </View>
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
    height: 350
  }
});

export default Details;
