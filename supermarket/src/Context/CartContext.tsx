import React, { createContext, useState, ReactNode } from 'react'; // Import ReactNode
import { getProduct } from '../services/Products';
import { ProductType } from '../types/ProductType';

// Define types for the context and item
type CartItem = {
  id: number;
  qtd: number;
  product: ProductType;
  totalPrice: number;
};

type CartContextType = {
  items: CartItem[];
  getItemsCount: () => number;
  addItemToCart: (id: number) => void;
  getTotalPrice: () => number;
};

// Create the context
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider(props: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItemToCart(id: number) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qtd: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            item.qtd++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qtd, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider value={{ items, getItemsCount, addItemToCart, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
}
