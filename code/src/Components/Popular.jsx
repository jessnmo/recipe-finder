import { useEffect, useState } from 'react';
import { Wrapper, CardOne, Gradient } from '../style/GlobalStyle';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css';

function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const checkPopular = localStorage.getItem('popular'); //saving the result under name"popular"
		if (checkPopular) {
			setPopular(JSON.parse(checkPopular)); //if there's one exist, then we don't fetch (due to limited restrictions we don't want to request it so many time)
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
			);
			const data = await api.json();
			localStorage.setItem('popular', JSON.stringify(data.recipes));
			console.log(data);
			setPopular(data.recipes);
		}
	};

	return (
		<div>
			<Wrapper>
				<h2>Popular Recipes</h2>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						drag: 'free',
						gap: '5rem',
					}}
				>
					{popular.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<CardOne>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
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

export default Popular;
