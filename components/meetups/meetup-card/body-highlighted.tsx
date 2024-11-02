import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

export type BodyHighlightedProps = PropsWithChildren;

export function BodyHighlighted({ children }: BodyHighlightedProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFD94F",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
