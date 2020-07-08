import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from "./contexts/ProductContext";
import data from './data';

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
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</ProductContext.Provider>
		</div>
	);
}

export default App;
