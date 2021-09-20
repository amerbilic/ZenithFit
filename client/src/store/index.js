import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import directorySlice from "./Directory/directorySlice";
import articlesSlice from "./Articles/articlesSlice";
import ordersSlice from "./Orders/ordersSlice";
import loginReducer from "./Auth/loginSlice";
import userReducer from "./User/userSlice";
import adressessReducer from './Addresses/adressesSlice';
import paymentCardsReducer from './Payment-Cards/payment-cardsSlice';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: false,
    cartItems: [],
    totalQuantity: 0,
    Price: 0,
  },
  reducers: {
    toggleCart(state) {
      state.hidden = !state.hidden;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          name: newItem.name,
          id: newItem.id,
          img: newItem.img,
          price: parseInt(newItem.price),
          quantity: 1,
        });
        state.Price += +parseInt(newItem.price);
      } else {
        existingItem.quantity++;
        state.Price += existingItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.Price -= existingItem.price;
      } else {
        existingItem.quantity--;
        state.Price -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const articlesActions = articlesSlice.actions;
export const ordersActions = ordersSlice.actions;

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedCart = persistReducer(persistConfig, cartSlice.reducer);

const store = configureStore({
  reducer: {
    cart: persistedCart,
    directory: directorySlice.reducer,
    articles: articlesSlice.reducer,
    orders: ordersSlice.reducer,
    login: loginReducer,
    user: userReducer,
    addresses:adressessReducer,
    paymentCards: paymentCardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
