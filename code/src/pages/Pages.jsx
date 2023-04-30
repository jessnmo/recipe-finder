import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';

function Pages() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:search" element={<SearchResults />} />
		</Routes>
	);
}

export default Pages;
