import { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useMembers } from "./use-members";

export function Stats() {
  const { members } = useMembers();

  const averageAge = useMemo(
    () =>
      Math.floor(
        members.reduce((acc, member) => acc + member.age, 0) / members.length,
      ),
    [members],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {members.length} membres et {averageAge} ans de moyenne d'âge
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
  },
});
