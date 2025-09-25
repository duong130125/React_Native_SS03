import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i.toString(),
  name: `Sản phẩm ${i + 1}`,
}));

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Trang chủ</Text>
    </View>
  );
};

const ProductGrid = () => {
  const { width, height } = useWindowDimensions();

  const isTablet = Math.min(width, height) >= 600;
  const isPortrait = height >= width;

  // Xác định số cột theo yêu cầu
  let numColumns = 2;
  if (isTablet) {
    numColumns = 4;
  } else {
    numColumns = isPortrait ? 2 : 3;
  }

  const itemSize = width / numColumns - 20;
  const fontSize = itemSize / 8;

  return (
    <FlatList
      data={products}
      key={numColumns} // đảm bảo reset layout khi đổi orientation
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={[styles.item, { width: itemSize, height: itemSize }]}>
          <Text style={[styles.text, { fontSize }]}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const BT06 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ProductGrid />
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
      ios: { textAlign: "center", color: "#000" },
      android: { textAlign: "left", color: "#fff" },
    }),
  },
  container: {
    padding: 10,
    justifyContent: "center",
  },
  item: {
    margin: 8,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BT06;
