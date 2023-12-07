import { CardType } from "../type";
import { food,restaurant1,restaurant2 } from "../assets/images";


export const themes = ["light", "dark"];
// MenuData.ts

export interface MenuItem {
  label: string;
  path: string;
}

export const menuData: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Payment", path: "/payment" },
  { label: "Stores", path: "/stores" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog/News", path: "/blog" },
];

export const mockFoodData: CardType[] = [
  {
    id: 1,
    url: food,
    title: "",
    description: "",
  },
  {
    id: 2,
    url: food,
    title: "",
    description: "",
  },
  {
    id: 3,
    url: food,
    title: "",
    description: "",
  },
  {
    id: 4,
    url: food,
    title: "",
    description: "",
  },
  {
    id: 5,
    url: food,
    title: "",
    description: "",
  },
  {
    id: 6,
    url: food,
    title: "",
    description: "",
  },
];
export const mockRestaurantData: CardType[] = [
  {
    id: 1,
    url: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 2,
    url: restaurant2,
    title: "",
    description: "",
  },
  {
    id: 3,
    url: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 4,
    url: restaurant2,
    title: "",
    description: "",
  },
  {
    id: 5,
    url: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 6,
    url: restaurant2,
    title: "",
    description: "",
  },
];
