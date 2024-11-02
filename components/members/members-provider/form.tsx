import { UserPlus } from "lucide-react-native";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useMembers } from "./use-members";

export function Form() {
  const { addMember } = useMembers();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onPressAdd = () => {
    const ageNumber = Number(age);

    if (isNaN(ageNumber) || ageNumber < 16 || ageNumber > 122) {
      return Alert.alert(
        "Âge invalide",
        "L'âge doit être un nombre entre 16 et 122.",
      );
    }

    if (name.trim() === "") {
      return Alert.alert("Nom invalide", "Le nom ne peut pas être vide.");
    }

    addMember({ name, age: ageNumber });
    setName("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor="#646464"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Âge"
        placeholderTextColor="#646464"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity onPress={onPressAdd}>
        <UserPlus style={styles.add} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#202020",
    borderRadius: 40,
    color: "white",
  },
  add: {
    color: "#05A88A",
    marginHorizontal: 8,
  },
});
