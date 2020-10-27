
import { Router } from "@reach/router"
import './app.scss'
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import ProductList from './pages/productList';
import { CartList } from './pages/cartList';
import { ProdcutStateProvider } from './Provider/ProductProvider'

function App() {
  return (
    <ProdcutStateProvider>
      <Router>
        <Login path="/" />
        <SignUp path="/signup" />
        <ProductList path="/products" />
        <CartList path="/cart" />
      </Router>
    </ProdcutStateProvider>
  );
}

export default App;
