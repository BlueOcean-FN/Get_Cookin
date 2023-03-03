import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Recipes go here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;