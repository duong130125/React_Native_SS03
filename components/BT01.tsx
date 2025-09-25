import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Lê Minh Hoàng</Text>
      <Text style={styles.job}>Lập trình viên React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    borderRadius: 15,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "blue",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  job: {
    fontSize: 16,
    fontStyle: "italic",
    color: "gray",
  },
});
