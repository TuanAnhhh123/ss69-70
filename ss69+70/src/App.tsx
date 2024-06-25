import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import "./App.css"
export default function App() {
  return (
    <div className="container">
      <Product></Product>
      <Cart></Cart>
    </div>
  )
}