export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 85000,
    category: "Tiểu thuyết",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    description: "Câu chuyện về hành trình theo đuổi ước mơ và khám phá ý nghĩa cuộc sống.",
  },
  {
    id: "2",
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 90000,
    category: "Kỹ năng",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "Cuốn sách trình bày các nguyên tắc giao tiếp và ứng xử trong cuộc sống.",
  },
  {
    id: "3",
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    price: 75000,
    category: "Kỹ năng",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    description: "Những chia sẻ gần gũi về học tập, trải nghiệm và lựa chọn của người trẻ.",
  },
  {
    id: "4",
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 120000,
    category: "Thiếu nhi",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
    description: "Một câu chuyện phiêu lưu trong thế giới phép thuật dành cho mọi lứa tuổi.",
  },
];

export function findBookById(bookId: string) {
  return books.find((book) => book.id === bookId);
}

export function formatPrice(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}
