import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CardTwo } from '../style/GlobalStyle';
import { Link } from 'react-router-dom';

function SearchResults() {
	const [searchResult, setSearchResult] = useState([]);
	let params = useParams();

	useEffect(() => {
		getSearchResults(params.search);
	}, [params.search]); // the search here, similar to what you see on Cuisine page is exactly what we put in Route (/searched/:search. and /cuisine/:type)

	const getSearchResults = async (searchItem) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchItem}}`
		);
		const recipes = await data.json();
		setSearchResult(recipes.results);
	};

	return (
		<Grid>
			{searchResult.map((item) => {
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

export default SearchResults;
