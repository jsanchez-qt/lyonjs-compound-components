import { MeetupCard } from "@/components/meetups/meetup-card/index";
import { meetups } from "@/services/meetups";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function TabIndexScreen() {
  const highlightedMeetups = meetups.filter((meetup) => meetup.highlighted);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>LyonJS</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Hype !</Text>
          <View style={styles.highlightedList}>
            {highlightedMeetups.map((meetup) => (
              <View key={meetup.id} style={styles.highlightedCard}>
                {/* <OldMeetupCard meetup={meetup} showButton /> */}
                <MeetupCard>
                  {/* <MeetupCard.Header source={meetup.thumbnail} /> */}
                  <MeetupCard.BodyHighlighted>
                    <MeetupCard.Title style={{ color: "black" }}>
                      {meetup.title}
                    </MeetupCard.Title>
                    <MeetupCard.PartyPopper />
                  </MeetupCard.BodyHighlighted>
                </MeetupCard>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>
            Tous les événements ({meetups.length})
          </Text>
          <View style={styles.list}>
            {meetups.map((meetup) => (
              <MeetupCard key={meetup.id}>
                <MeetupCard.Header source={meetup.thumbnail} />
                <MeetupCard.Body>
                  <MeetupCard.Title>{meetup.title}</MeetupCard.Title>
                  <MeetupCard.Description>
                    {meetup.description}
                  </MeetupCard.Description>
                </MeetupCard.Body>
              </MeetupCard>
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
  highlightedList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  highlightedCard: {
    flexShrink: 0,
    width: width / 2 - 24, // 24 = 20 padding + 4 gap
  },
});
