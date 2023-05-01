import { useState, useEffect } from 'react';
import { Grid, CardTwo } from '../style/GlobalStyle';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type]); //when url changes, we want to run the useEffect again. type we got it from the api

	const getCuisine = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	return (
		<Grid>
			{cuisine &&
				cuisine.map((item) => {
					return (
						<CardTwo key={item.id}>
							<Link to={'/recipe/' + item.id}>
								<img src={item.image} alt={item.title} />
								<h4>{item.title}</h4>
							</Link>
						</CardTwo>
					);
				})}
		</Grid>
	);
}

export default Cuisine;
