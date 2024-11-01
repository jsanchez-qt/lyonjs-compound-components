import LottieView from "lottie-react-native";

export class ConfettiService {
  private ref?: LottieView = undefined;

  setRef = (ref: LottieView | null) => {
    if (ref) this.ref = ref;
  };

  play = () => this.ref?.play();
}

export const confetti = new ConfettiService();
