import { CardType, QuestionData, TestimonialType } from "../type";
import { food, restaurant1, restaurant2 } from "../assets/images";

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

export const mockQuestions: QuestionData[] = [
  {
    title: "How does Bitcoin work?",
    description:
      "Bitcoin is a decentralized digital currency that allows for secure and instant transactions. It operates on a technology called blockchain, which ensures transparency and eliminates the need for intermediaries like banks.",
  },
  {
    title: "How can I buy Bitcoin?",
    description:
      "There are several ways to buy Bitcoin, including through cryptocurrency exchanges, peer-to-peer platforms, and Bitcoin ATMs. You can also receive Bitcoin as payment for goods and services.",
  },
  {
    title: "Is Bitcoin safe to use?",
    description:
      "Bitcoin transactions are secured using cryptographic technology, making them highly secure. However, it's important to take precautions such as using a secure wallet and keeping your private keys safe.",
  },
  {
    title: "Can I use Bitcoin for online shopping?",
    description:
      "Yes, many online stores accept Bitcoin as a form of payment. Look for the Bitcoin logo or check the store's payment options to see if they accept Bitcoin.",
  },
  {
    title: "What are the advantages of using Bitcoin?",
    description:
      "Using Bitcoin offers several advantages, including lower transaction fees, faster international transfers, and increased privacy compared to traditional payment methods.",
  },
];

export const mockTestimonialsData: TestimonialType[] = [
  {
    id: 1,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Alice Johnson",
    quote:
      "“Using Lightning Wallet has made my transactions faster and more secure. It's a game-changer!”",
    // createdBy: 'Alice',
  },
  {
    id: 2,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Bob Smith",
    quote:
      "“I love how easy it is to make payments with Lightning Wallet. It’s convenient and efficient!”",
    // createdBy: 'Bob',
  },
  {
    id: 3,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Charlie Davis",
    quote:
      "“Lightning Wallet has simplified my crypto transactions. The speed and security are unmatched.”",
    // createdBy: 'Charlie',
  },
  {
    id: 4,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "David Brown",
    quote:
      "“I’ve had a great experience with Lightning Wallet. It’s reliable and user-friendly.”",
    // createdBy: 'David',
  },
  {
    id: 5,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Emma Smith",
    quote:
      "“As a frequent crypto user, Lightning Wallet has become my go-to for quick and secure transactions.”",
    // createdBy: 'Emma',
  },
];
