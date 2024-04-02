import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
<<<<<<< HEAD
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const roupa = action.payload

      if (state.itens.find((shirt) => shirt.id === roupa.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(roupa)
=======
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((Produto) => Produto.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
      }
    }
  }
})

<<<<<<< HEAD
export const { adicionarAoCarrinho } = carrinhoSlice.actions
=======
export const { adicionar } = carrinhoSlice.actions
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
export default carrinhoSlice.reducer
