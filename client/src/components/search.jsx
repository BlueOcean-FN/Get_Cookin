import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;