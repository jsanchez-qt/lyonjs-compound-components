import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { members as defaultMembers } from "@/services/members";
import { useState } from "react";
import { MemberList } from "@/components/members/member-list";
import { MemberStats } from "@/components/members/member-stats";
import { randomUUID } from "expo-crypto";
import { MemberForm } from "@/components/members/member-form";

export default function TabMembersScreen() {
  const [members, setMembers] = useState(defaultMembers);

  const addMember = (member: { name: string; age: number }) => {
    setMembers((prev) => [{ id: randomUUID(), ...member }, ...prev]);
  };

  const removeMember = (memberId: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== memberId));
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>Membres</Text>
        <MemberForm onSubmit={addMember} />
        <MemberStats members={members} />
        <MemberList members={members} onPressRemove={removeMember} />
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
