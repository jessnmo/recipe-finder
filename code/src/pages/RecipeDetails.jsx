import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function RecipeDetails() {
	const [recipeDetails, setRecipeDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instruction');
	const params = useParams();

	useEffect(() => {
		fetchRecipes(params.name);
	}, [params.name]);

	const fetchRecipes = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}` //when we click each recipes in (so far) popular and vegetarian options we can see the ID display in the url, this is the '/recipe/:name' that we created in the Page. that's why we're using params.name to extract that number
		);
		const recipeData = await data.json();
		setRecipeDetails(recipeData);
		console.log(recipeData);
	};

	return (
		<DetailWrapper>
			<div>
				<h2>{recipeDetails.title}</h2>
				<img src={recipeDetails.image} alt={recipeDetails.title} />
			</div>
			<Info>
				<Button
					className={activeTab === 'instruction' ? 'active' : ''}
					onClick={() => {
						setActiveTab('instruction');
						console.log('Instruction active');
					}}
				>
					Instruction
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => {
						setActiveTab('ingredients');
						console.log('Ingredient active');
					}}
				>
					Ingredients
				</Button>
				{activeTab === 'instruction' && (
					<div style={{ marginTop: '2rem' }}>
						<p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
						<p
							dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
						/>
					</div>
				)}

				{activeTab === 'ingredients' && (
					<ul>
						{recipeDetails.extendedIngredients.map((item) => {
							return <li key={item.id}>{item.original}</li>;
						})}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

export default RecipeDetails;

const DetailWrapper = styled.div`
	display: flex;
	margin-top: 5rem;
	margin-bottom: 3rem;
	justify-content: space-around;

	p {
		margin-bottom: 1rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	border: 2px solid black;
	color: #313131;
	background: whitesmoke;
	margin-right: 2rem;
	font-weight: 600;
	&.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: whitesmoke;
	}
`;

const Info = styled.div`
	margin-left: 8rem;
`;
