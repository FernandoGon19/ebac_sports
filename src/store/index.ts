import { configureStore } from '@reduxjs/toolkit'

<<<<<<< HEAD
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'
=======
import carrinho from './reducers/carrinho'
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52

import api from '../services/api'

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
=======
    carrinho: carrinho,
    [api.reducerPath]: api.reducer
  }, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware)
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
})

export type RootReducer = ReturnType<typeof store.getState>
