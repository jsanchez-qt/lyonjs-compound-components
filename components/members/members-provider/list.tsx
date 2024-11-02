import { Image } from "expo-image";
import { Trash2Icon } from "lucide-react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useMembers } from "./use-members";

export function List() {
  const { members, removeMember } = useMembers();

  return (
    <View style={styles.list}>
      {members.map((member) => (
        <View key={member.id} style={styles.listItem}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://avatar.iran.liara.run/public" }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{member.name}, </Text>
            <Text style={styles.age}>{member.age} ans</Text>
          </View>
          <TouchableOpacity
            hitSlop={20}
            onPress={() => removeMember(member.id)}
          >
            <Trash2Icon color="#EB5757" width={20} height={20} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  list: {
    gap: 4,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202020",
    gap: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 32,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  age: {
    color: "#D4D4D4",
    fontSize: 14,
  },
});
