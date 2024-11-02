import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

export type BodyProps = PropsWithChildren;

export function Body({ children }: BodyProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 4,
  },
});
