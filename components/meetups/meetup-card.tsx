import { Text, View, StyleSheet } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { MeetupModel } from "@/services/meetups";

export type MeetupCardProps = { meetup: MeetupModel };

export function MeetupCard({ meetup }: MeetupCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={meetup.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {meetup.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {meetup.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#202020",
    borderRadius: 8,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  textContainer: {
    padding: 12,
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#D4D4D4",
  },
  description: {
    fontSize: 14,
    color: "#D4D4D4",
  },
});
