export const NAV_ITEMS = ["HOME", "FILMS", "PHOTOS", "STORY", "CONTACT"] as const;
export type TabType = typeof NAV_ITEMS[number];

export const FILMS_CATEGORIES = [
  { id: "wedding", title: "Wedding" },
  { id: "corporate", title: "Corporate Interviews" },
  { id: "documentary", title: "Documentary" },
  { id: "travel", title: "Travel" }
];

export const PHOTOS_CATEGORIES = [
  { id: "city", title: "City Portrait" },
  { id: "family", title: "Family" },
  { id: "doljanchi", title: "Doljanchi" }
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/mattjoofilm",
  email: "mailto:your-email@example.com",
};