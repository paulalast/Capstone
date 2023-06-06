import "./index.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path='/' Component={Photos}></Route>
				<Route path='/cart' Component={Cart}></Route>
			</Routes>
		</div>
	)
}

export default App
