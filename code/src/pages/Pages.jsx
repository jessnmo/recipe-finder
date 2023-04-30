import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import Cuisine from './Cuisine';

function Pages() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
		</Routes>
	);
}

export default Pages;
