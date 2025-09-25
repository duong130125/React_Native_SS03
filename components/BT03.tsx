import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Send } from "lucide-react-native";

export default function InstagramPost() {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=47" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>thuy_anh26</Text>
      </View>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/b8/86/b2/b886b20ce517adae1f8b2fb5bad00fe6.jpg",
        }}
        style={styles.postImage}
      />

      <View style={styles.actionBar}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Heart
            size={28}
            color={liked ? "red" : "black"}
            fill={liked ? "red" : "none"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <MessageCircle size={28} color="black" style={styles.icon} />
        <Send size={28} color="black" style={styles.icon} />
      </View>

      <Text style={styles.description}>
        <Text style={styles.username}>thuy_anh26 </Text>
        Một buổi chiều yên bình bên bờ biển. 🌊☀️
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postImage: {
    width: 285,
    height: 250,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  actionBar: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 15,
  },
  description: {
    paddingHorizontal: 10,
    paddingBottom: 12,
    fontSize: 14,
    color: "#333",
  },
});
