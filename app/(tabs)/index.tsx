import { MeetupCard } from "@/components/meetups/meetup-card";
import { meetups } from "@/services/meetups";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TabIndexScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>LyonJS</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>
            Tous les événements ({meetups.length})
          </Text>
          <View style={styles.list}>
            {meetups.map((meetup) => (
              <MeetupCard key={meetup.id} meetup={meetup} />
            ))}
          </View>
        </View>
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
