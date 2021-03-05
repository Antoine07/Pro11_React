import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, FlatList } from 'react-native';

import { connect } from 'react-redux';

import { addAmount, calculTokens, resetTokens } from '../actions/action-type';

class Denomination extends Component {

  showDenomination = () => {

    return this.props.tokens.map((token, i) => (
      <Text key={i}>Dénomination : {token.denomination} unit : {token.unit}</Text>
    ));
  }

  render() {


    return (
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType='number-pad'
          onChangeText={(amount) => this.props.addAmount(amount)}
          value={this.props.amount}
        />
        <View>
          <Button
            onPress={() => {
              this.props.calculTokens()

            }}
            title="Dénomination"
          />
        </View>
        <View>
          <Button
            onPress={() => {
              this.props.resetTokens()
            }}
            title="Reset"
          />
        </View>
        {this.props.tokens.map((token, i) => (
          <Text key={i}>Dénomination : {token.denomination} unit : {token.unit}</Text>
        ))}
      </View>
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
    calculTokens: () => dispatch(calculTokens()),
    addAmount: (amount) => dispatch(addAmount(amount)),
    resetTokens: () => dispatch(resetTokens())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 100
  },
  input: {
    height: 40
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Denomination)
