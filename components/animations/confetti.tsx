import { confetti } from "@/services/confetti";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

export function Confetti() {
  return (
    <LottieView
      ref={confetti.setRef}
      source={require("@/assets/animations/confetti.json")}
      autoPlay={false}
      loop={false}
      style={styles.lottie}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: "none",
    zIndex: 1000,
  },
});
