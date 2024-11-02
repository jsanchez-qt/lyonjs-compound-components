import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { MeetupModel } from "@/services/meetups";
import { PartyPopperIcon } from "lucide-react-native";
import { confetti } from "@/services/confetti";

export type MeetupCardProps = { meetup: MeetupModel; showButton?: boolean };

export function MeetupCard({ meetup, showButton = false }: MeetupCardProps) {
  return (
    <View
      style={[
        styles.container,
        meetup.highlighted && { backgroundColor: "#EFD94F" },
      ]}
    >
      <Image style={styles.thumbnail} source={meetup.thumbnail} />
      <View style={styles.textContainer}>
        {showButton ? (
          <View style={styles.textButtonContainer}>
            <Text
              style={[styles.title, meetup.highlighted && { color: "black" }]}
              numberOfLines={1}
            >
              {meetup.title}
            </Text>
            <TouchableOpacity hitSlop={20} onPress={confetti.play}>
              <PartyPopperIcon size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text
              style={[styles.title, meetup.highlighted && { color: "black" }]}
              numberOfLines={1}
            >
              {meetup.title}
            </Text>
            <Text
              style={[
                styles.description,
                meetup.highlighted && { color: "black" },
              ]}
              numberOfLines={2}
            >
              {meetup.description}
            </Text>
          </>
        )}
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
  textButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
