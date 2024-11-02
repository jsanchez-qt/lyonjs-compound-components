import { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";

export type DescriptionProps = PropsWithChildren;

export function Description({ children }: DescriptionProps) {
  return (
    <Text style={styles.description} numberOfLines={2}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: "#D4D4D4",
  },
});
