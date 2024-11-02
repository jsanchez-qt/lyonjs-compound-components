import { StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image";

export type HeaderProps = {
  source: ImageSource;
};

export function Header({ source }: HeaderProps) {
  return <Image style={styles.thumbnail} source={source} />;
}

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
});
