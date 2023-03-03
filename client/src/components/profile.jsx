import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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

export default Profile;