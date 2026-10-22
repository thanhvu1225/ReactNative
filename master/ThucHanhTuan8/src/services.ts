import { AuthSession, Review, User } from './types';

type Account = User & {
  password: string;
};

const accounts: Account[] = [
  {
    id: 'user-demo',
    name: 'NguyenVuThanh_23667451',
    email: '23667451.thanh@student.iuh.edu.vn',
    password: '123456',
  },
];

const reviews: Review[] = [
  {
    id: 'review-1',
    bookId: '1',
    userId: 'user-1',
    userName: 'Minh Anh',
    rating: 5,
    comment: 'Nội dung nhẹ nhàng nhưng truyền cảm hứng rất tốt.',
    createdAt: '2026-10-15T08:00:00.000Z',
  },
  {
    id: 'review-2',
    bookId: '1',
    userId: 'user-2',
    userName: 'Hoàng Long',
    rating: 4,
    comment: 'Sách dễ đọc, phù hợp để đọc lại nhiều lần.',
    createdAt: '2026-10-12T08:00:00.000Z',
  },
  {
    id: 'review-3',
    bookId: '2',
    userId: 'user-3',
    userName: 'Thanh Hà',
    rating: 4,
    comment: 'Nhiều chia sẻ thực tế dành cho sinh viên.',
    createdAt: '2026-10-10T08:00:00.000Z',
  },
];

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

const createSession = (account: Account): AuthSession => ({
  token: `book-token:${Date.now()}:${account.id}`,
  user: {
    id: account.id,
    name: account.name,
    email: account.email,
  },
});

export const authService = {
  async login(email: string, password: string): Promise<AuthSession> {
    await wait(400);
    const normalizedEmail = email.trim().toLowerCase();
    const account = accounts.find(
      (item) => item.email.toLowerCase() === normalizedEmail && item.password === password,
    );

    if (!account) throw new Error('Email hoặc mật khẩu không đúng');
    return createSession(account);
  },

  async register(name: string, email: string, password: string): Promise<AuthSession> {
    await wait(400);
    const normalizedEmail = email.trim().toLowerCase();

    if (accounts.some((item) => item.email.toLowerCase() === normalizedEmail)) {
      throw new Error('Email này đã được sử dụng');
    }

    const account: Account = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    accounts.push(account);
    return createSession(account);
  },

  async validateToken(token: string): Promise<boolean> {
    await wait(200);
    const [prefix, createdAt] = token.split(':');
    const tokenAge = Date.now() - Number(createdAt);
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    return prefix === 'book-token' && Number.isFinite(tokenAge) && tokenAge >= 0 && tokenAge < sevenDays;
  },
};

export const reviewService = {
  async getByBookId(bookId: string): Promise<Review[]> {
    await wait(350);
    return reviews
      .filter((item) => item.bookId === bookId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },

  async postReview(input: Omit<Review, 'id' | 'createdAt'>): Promise<Review> {
    await wait(350);
    const review: Review = {
      ...input,
      id: `review-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    reviews.push(review);
    return review;
  },
};
