import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
<<<<<<< HEAD
=======

>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'api/ebac_sports'
=======
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Produto[], void>({
      query: () => 'produtos'
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
    })
  })
})

<<<<<<< HEAD
export const { useGetProdutosQuery } = api
=======
export const { useGetjogosQuery } = api
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52

export default api
