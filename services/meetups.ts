import { ImageSource } from "expo-image";

export type MeetupModel = {
  id: string;
  title: string;
  description: string;
  thumbnail: ImageSource;
  highlighted?: boolean;
};

export const meetups: Array<MeetupModel> = [
  {
    id: "0aa4e5be-73cf-47fc-af28-51eb557575e7",
    title: "Pattern",
    description:
      "En tant que développeurs, nous savons que les projets évoluent constamment : les besoins changent, les designs se métamorphosent et les spécifications initiales peuvent rapidement devenir obsolètes.",
    thumbnail: require("@/assets/images/meetups/lion-1.png"),
    highlighted: true,
  },

  {
    id: "a57566b6-75b2-471a-a8fc-137ce532402e",
    title: "Remix",
    description:
      "Remix est un framework web moderne qui permet de créer des applications performantes et évolutives.",
    thumbnail: require("@/assets/images/meetups/lion-2.png"),
    highlighted: true,
  },
  {
    id: "60bcabc1-5378-4b25-8d7e-964e38e914bd",
    title: "Next.js",
    description:
      "Next.js est un framework open-source basé sur React qui permet de créer des applications web performantes et optimisées pour les moteurs de recherche.",
    thumbnail: require("@/assets/images/meetups/lion-3.png"),
  },
  {
    id: "a059ebc5-e277-46e3-b9cf-89056655136b",
    title: "React Hooks",
    description:
      "Les hooks sont une fonctionnalité de React qui vous permet de manipuler l'état et le cycle de vie des composants.",
    thumbnail: require("@/assets/images/meetups/lion-4.png"),
  },
  {
    id: "64640b19-5b7c-4705-abc0-b3fb70796d5e",
    title: "React Router",
    description:
      "React Router est une bibliothèque qui permet de gérer la navigation dans une application React.",
    thumbnail: require("@/assets/images/meetups/lion-5.png"),
  },
  {
    id: "7f7a911f-82f6-4878-b1dc-9d6c6ebf5d27",
    title: "React Native",
    description:
      "React Native est un framework open-source développé par Facebook. Il permet de créer des applications mobiles multi-plateformes en utilisant uniquement du JavaScript.",
    thumbnail: require("@/assets/images/meetups/lion-6.png"),
  },
];
