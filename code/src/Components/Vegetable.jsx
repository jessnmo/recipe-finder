import { useEffect, useState } from 'react';
import { Wrapper, Gradient, CardOne } from '../style/GlobalStyle';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Vegetable() {
	const [vegetable, setVegetable] = useState([]);

	useEffect(() => {
		getVegetable();
	}, []);

	const getVegetable = async () => {
		const checkVegetable = localStorage.getItem('vegetable');
		if (checkVegetable) {
			setVegetable(JSON.parse(checkVegetable));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem('vegetable', JSON.stringify(data.recipes));
			setVegetable(data.recipes);
		}
	};

	return (
		<div>
			<Wrapper>
				<h2>Vegetarian Options</h2>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						drag: 'free',
						gap: '5rem',
					}}
				>
					{vegetable.map((veggieOption) => {
						return (
							<SplideSlide key={veggieOption.id}>
								<CardOne>
									<p>{veggieOption.title}</p>
									<img src={veggieOption.image} alt={veggieOption.title} />
									<Gradient />
								</CardOne>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

export default Vegetable;
