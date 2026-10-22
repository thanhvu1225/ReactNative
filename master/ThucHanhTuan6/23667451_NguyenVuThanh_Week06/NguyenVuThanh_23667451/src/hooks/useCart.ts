import {
  addItem,
  removeItem,
  selectCartDetails,
  selectTotalPrice,
  selectTotalQuantity,
  updateQuantity,
} from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartDetails);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalPrice = useAppSelector(selectTotalPrice);

  return {
    items,
    totalQuantity,
    totalPrice,
    add: (bookId: string) => dispatch(addItem(bookId)),
    remove: (bookId: string) => dispatch(removeItem(bookId)),
    setQuantity: (bookId: string, quantity: number) =>
      dispatch(updateQuantity({ bookId, quantity })),
  };
}
