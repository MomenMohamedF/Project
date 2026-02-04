import React, { createContext, useContext, useReducer, useEffect } from "react";

type CartItem = {
  id: string | number;
  name: string;
  price: string; // e.g. "$1,299"
  image?: string;
  quantity: number;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string | number } }
  | { type: "INCREMENT"; payload: { id: string | number } }
  | { type: "DECREMENT"; payload: { id: string | number } }
  | { type: "CLEAR" };

const initialState: State = {
  items: [],
};

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        // If already in cart, do not add again (prevent duplicates)
        return state;
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: Math.max(1, i.quantity - 1) }
              : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: State;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string | number) => void;
  increment: (id: string | number) => void;
  decrement: (id: string | number) => void;
  clear: () => void;
} | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    try {
      const raw = localStorage.getItem("cart_state");
      return raw ? JSON.parse(raw) : init;
    } catch (e) {
      return init;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_state", JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }, [state]);

  const addItem = (item: Omit<CartItem, "quantity">) =>
    dispatch({
      type: "ADD_ITEM",
      payload: { ...item, quantity: 1 } as CartItem,
    });
  const removeItem = (id: string | number) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const increment = (id: string | number) =>
    dispatch({ type: "INCREMENT", payload: { id } });
  const decrement = (id: string | number) =>
    dispatch({ type: "DECREMENT", payload: { id } });
  const clear = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, increment, decrement, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
