import { Book } from './types';

export const books: Book[] = [
  {
    id: '1',
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    category: 'Tiểu thuyết',
    price: 79000,
    description: 'Câu chuyện về hành trình theo đuổi ước mơ, lắng nghe trái tim và khám phá kho báu thật sự của mỗi người.',
    color: '#C9823E',
  },
  {
    id: '2',
    title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    author: 'Rosie Nguyễn',
    category: 'Kỹ năng sống',
    price: 86000,
    description: 'Những chia sẻ gần gũi về học tập, trải nghiệm và cách sống chủ động trong những năm tháng tuổi trẻ.',
    color: '#39866D',
  },
  {
    id: '3',
    title: 'Cây Cam Ngọt Của Tôi',
    author: 'José Mauro de Vasconcelos',
    category: 'Tiểu thuyết',
    price: 108000,
    description: 'Một câu chuyện trong trẻo và xúc động về tuổi thơ, tình yêu thương và quá trình trưởng thành.',
    color: '#CE6547',
  },
  {
    id: '4',
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    category: 'Kỹ năng sống',
    price: 92000,
    description: 'Các nguyên tắc thực tế giúp giao tiếp hiệu quả, thấu hiểu con người và xây dựng mối quan hệ tích cực.',
    color: '#3D5FA9',
  },
  {
    id: '5',
    title: 'Hoàng Tử Bé',
    author: 'Antoine de Saint-Exupéry',
    category: 'Tiểu thuyết',
    price: 65000,
    description: 'Tác phẩm nhỏ bé nhưng sâu sắc về tình bạn, tình yêu và những điều quan trọng chỉ trái tim mới nhìn thấy.',
    color: '#7657A8',
  },
];

export const formatPrice = (price: number) => `${price.toLocaleString('vi-VN')} đ`;
