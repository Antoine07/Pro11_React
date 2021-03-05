import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import JuniperText from './JuniperText';
import { connect } from 'react-redux';

class Score extends Component {

  static navigationOptions = {
    title: 'Score',
  };

  render() {

    const score = this.props.score;
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <JuniperText >Règles du jeu Juniper Green</JuniperText>
          <Button
            title="Revenir la page principale"
            onPress={() => navigation.navigate('Home') }
          />
        </View>
        <View style={styles.content}>
          <Text>Score bilan </Text>
          <Text>Le gagnant est : {score.player ? "vous" : "computer"}</Text>
          <Text>Step :{score.step}</Text>
          <>
            <View style={styles.itemChoice}>
              <JuniperText> Valeurs possibles </JuniperText>
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
});


const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Score);
