import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function FlexboxDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Lần 1: Column */}
      <Text style={styles.title}>Lần 1: Sắp xếp dọc (column)</Text>
      <View
        style={[
          styles.wrapper,
          { flexDirection: "column", alignItems: "center" },
        ]}
      >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
      </View>

      {/* Lần 2: Row */}
      <Text style={styles.title}>Lần 2: Sắp xếp ngang (row)</Text>
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          },
        ]}
      >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
      </View>

      {/* Lần 3: Wrap */}
      <Text style={styles.title}>Lần 3: Sắp xếp dạng lưới (wrap)</Text>
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          },
        ]}
      >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box5} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 16,
  },
  box1: {
    width: 100,
    height: 40,
    backgroundColor: "#ea1919ff",
    margin: 5,
    borderRadius: 5,
  },
  box2: {
    width: 80,
    height: 50,
    backgroundColor: "#F97316",
    margin: 5,
    borderRadius: 5,
  },
  box3: {
    width: 120,
    height: 60,
    backgroundColor: "#22C55E",
    margin: 5,
    borderRadius: 5,
  },
  box4: {
    width: 90,
    height: 30,
    backgroundColor: "#3B82F6",
    margin: 5,
    borderRadius: 5,
  },
  box5: {
    width: 110,
    height: 55,
    backgroundColor: "#9d0dcdff",
    margin: 5,
    borderRadius: 5,
  },
});
