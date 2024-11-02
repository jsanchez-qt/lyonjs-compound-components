import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { members as defaultMembers } from "@/services/members";
import { MembersProvider } from "@/components/members/members-provider";

export default function TabMembersScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>Membres</Text>
        <MembersProvider members={defaultMembers}>
          <MembersProvider.Form />
          <MembersProvider.Stats />
          <MembersProvider.List />
        </MembersProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subContainer: {
    gap: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    gap: 8,
  },
});
