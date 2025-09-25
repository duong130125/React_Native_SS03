import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Trang chủ</Text>
    </View>
  );
};

const BT05 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Nội dung của ứng dụng ở đây...</Text>
        <Text style={styles.text}>
          Header ở trên sẽ tự động thay đổi theo nền tảng.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        backgroundColor: "#2196F3",
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        textAlign: "center",
        color: "#000",
      },
      android: {
        textAlign: "left",
        color: "#fff",
      },
    }),
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
});

export default BT05;
