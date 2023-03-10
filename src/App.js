import { Switch, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
