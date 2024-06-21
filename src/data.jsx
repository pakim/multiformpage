import arcadeImage from "./assets/images/icon-arcade.svg"
import advancedImage from "./assets/images/icon-advanced.svg"
import proImage from "./assets/images/icon-pro.svg"

export const plans = [
  {
    name: "Arcade",
    monthly: 9,
    yearly: 90,
    image: arcadeImage,
  },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    image: advancedImage,
  },
  {
    name: "Arcade",
    monthly: 15,
    yearly: 150,
    image: proImage,
  },
];

export const addons = [
  {
    name: "Online service",
    desc: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    name: "Customizable Profile",
    desc: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];
