import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from "./contexts/ProductContext";
import data from './data';
import CartContext from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	return (
		<div className="App">
		<ProductContext.Provider value={{addItem, products}}>
		<CartContext.Provider value={cart}>
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
		</ProductContext.Provider>
		</div>
	);
}

export default App;
