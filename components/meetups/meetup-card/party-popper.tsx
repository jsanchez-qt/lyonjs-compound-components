import { confetti } from "@/services/confetti";
import { PartyPopperIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export function PartyPopper() {
  return (
    <TouchableOpacity hitSlop={20} onPress={confetti.play}>
      <PartyPopperIcon size={24} color="black" />
    </TouchableOpacity>
  );
}
