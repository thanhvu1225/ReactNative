export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthSession = {
  token: string;
  user: User;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  description: string;
  color: string;
};

export type Review = {
  id: string;
  bookId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Screen =
  | { name: 'home' }
  | { name: 'auth'; redirectTo: 'home' | 'checkout' }
  | { name: 'checkout' }
  | { name: 'bookDetail'; bookId: string };
