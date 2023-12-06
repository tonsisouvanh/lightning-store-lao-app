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
