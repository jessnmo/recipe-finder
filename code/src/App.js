import Category from './Components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
