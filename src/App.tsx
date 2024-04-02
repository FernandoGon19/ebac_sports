import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { store } from './store'

import { GlobalStyle } from './styles'
import carrinho, { adicionar } from './store/reducers/carrinho'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
<<<<<<< HEAD
=======
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])


  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
<<<<<<< HEAD
        <Header />
        <Produtos />
=======
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionar}
        />
>>>>>>> f8f2f25b8839d23e723945f87fe1b808053d0d52
      </div>
    </Provider>
  )
}

export default App
