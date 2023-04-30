import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	const [input, setInput] = useState('');
	const nav = useNavigate();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		nav('/searched/' + input);
	};

	return (
		<FormStyle onSubmit={onSubmitHandler}>
			<div>
				<FaSearch />
				<input
					onChange={(e) => setInput(e.target.value)} //when we start typing
					type="text"
					value={input}
				/>
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	margin: 0rem 10rem;

	div {
		width: 100%;
		position: relative; // we want the category icons to stay on top of this
	}
	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: whitesmoke;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: whitesmoke;
	}
`;

export default SearchBar;
