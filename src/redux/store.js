import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import {persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import themeSliceReducer from './themeSlice'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedThemeReducer = persistReducer(persistConfig, themeSliceReducer)
 

export const store = configureStore({
  reducer: {
   theme: persistedThemeReducer
    },
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const  persistor = persistStore(store)