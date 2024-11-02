import { View, StyleSheet } from "react-native";
import { Description } from "./decription";
import { Header } from "./header";
import { PartyPopper } from "./party-popper";
import { Title } from "./title";
import { PropsWithChildren } from "react";
import { Body } from "./body";
import { BodyHighlighted } from "./body-highlighted";

export type MeetupCardProps = PropsWithChildren;

export function MeetupCard({ children }: MeetupCardProps) {
  return <View style={styles.container}>{children}</View>;
}

MeetupCard.displayName = "MeetupCard";

MeetupCard.Header = Header;
MeetupCard.Title = Title;
MeetupCard.Description = Description;
MeetupCard.PartyPopper = PartyPopper;
MeetupCard.Body = Body;
MeetupCard.BodyHighlighted = BodyHighlighted;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#202020",
    borderRadius: 8,
  },
});
