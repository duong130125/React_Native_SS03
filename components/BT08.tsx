import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import GlobalStyles, {
  COLORS,
  FONT_SIZES,
  SPACING,
  CONTAINER_STYLES,
} from "../styles/GlobalStyles";

const NewsScreen = () => {
  const { width } = useWindowDimensions();

  const titleSize = width < 360 ? FONT_SIZES.h1 : FONT_SIZES.h1 + 2;
  const contentSize = width < 360 ? FONT_SIZES.medium : FONT_SIZES.large;

  return (
    <ScrollView style={CONTAINER_STYLES.page}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
        }}
        style={styles.coverImage}
        resizeMode="cover"
      />

      <Text style={[styles.title, { fontSize: titleSize }]}>
        React Native: Xây dựng ứng dụng di động đa nền tảng
      </Text>

      <View style={styles.authorRow}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.authorName}>Sơn Nguyễn</Text>
          <Text style={styles.date}>Đăng ngày: 07/09/2025</Text>
        </View>
      </View>

      <Text style={[styles.content, { fontSize: contentSize }]}>
        React Native đã cách mạng hóa lĩnh vực phát triển ứng dụng di động bằng
        cách cho phép các nhà phát triển xây dựng các ứng dụng gốc cho cả iOS và
        Android từ một cơ sở mã duy nhất. Được phát triển bởi Facebook,
        framework này sử dụng thư viện React, một trong những thư viện
        JavaScript phổ biến nhất để xây dựng giao diện người dùng.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: 200,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.h1,
    fontWeight: "bold",
    marginBottom: SPACING.md,
    color: COLORS.text,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(29, 26, 26, 0.1)",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: SPACING.sm,
  },
  authorName: {
    fontSize: FONT_SIZES.large,
    fontWeight: "600",
    color: COLORS.text,
  },
  date: {
    fontSize: FONT_SIZES.small,
    color: COLORS.subText,
  },
  content: {
    fontSize: FONT_SIZES.medium,
    lineHeight: 22,
    textAlign: "justify",
    color: COLORS.text,
  },
});

export default NewsScreen;
