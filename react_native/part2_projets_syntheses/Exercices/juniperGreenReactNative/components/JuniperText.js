
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JuniperText = props => {
    return (
      <Text style={styles.paragraph}>
        {props.children}
      </Text>
    );
  }

const styles = StyleSheet.create({
    paragraph: {
      paddingHorizontal: 20,
      fontSize: 20,
      marginBottom : 5
    }
  
  });

  export default JuniperText;