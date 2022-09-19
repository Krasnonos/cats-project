import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSliceReducer from './themeSlice';
import breedSliceReducer from './breedSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeSliceReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    breed: breedSliceReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
