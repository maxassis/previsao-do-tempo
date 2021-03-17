import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Menu from "../../components/Menu";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
});
