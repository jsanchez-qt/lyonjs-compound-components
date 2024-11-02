import { PropsWithChildren } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

export type TitleProps = PropsWithChildren<{ style?: StyleProp<TextStyle> }>;

export function Title({ children, style }: TitleProps) {
  return (
    <Text style={[styles.title, style]} numberOfLines={1}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#D4D4D4",
  },
});
