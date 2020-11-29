import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
      const savedProducts = await AsyncStorage.getItem(
        '@GoMarketplace:products',
      );

      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      // TODO ADD A NEW ITEM TO THE CART

      const checkProductExists = products.find(
        productItem => productItem.id === product.id,
      );

      if (checkProductExists) {
        const oldProducts = products.filter(
          productItem => productItem.id !== checkProductExists.id,
        );

        setProducts([
          ...oldProducts,
          {
            id: checkProductExists.id,
            title: checkProductExists.title,
            price: checkProductExists.price,
            image_url: checkProductExists.image_url,
            quantity: checkProductExists.quantity + 1,
          },
        ]);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(products),
        );

        return;
      }

      setProducts([
        ...products,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image_url: product.image_url,
          quantity: 1,
        },
      ]);

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const product = products.find(productItem => productItem.id === id);

      if (product) {
        const oldProducts = products.filter(
          productItem => productItem.id !== product.id,
        );

        setProducts([
          ...oldProducts,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image_url: product.image_url,
            quantity: product.quantity + 1,
          },
        ]);

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(products),
        );
      }
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const product = products.find(productItem => productItem.id === id);

      if (product) {
        const oldProducts = products.filter(
          productItem => productItem.id !== product.id,
        );

        if (product.quantity > 1) {
          setProducts([
            ...oldProducts,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              image_url: product.image_url,
              quantity: product.quantity - 1,
            },
          ]);
        } else {
          setProducts(oldProducts);
        }

        await AsyncStorage.setItem(
          '@GoMarketplace:products',
          JSON.stringify(products),
        );
      }
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
