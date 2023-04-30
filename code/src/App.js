import Category from './Components/Category';
import SearchBar from './Components/SearchBar';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<SearchBar />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
