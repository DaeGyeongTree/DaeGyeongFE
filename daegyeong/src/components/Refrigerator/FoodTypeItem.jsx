import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonBox = styled.div`
	flex: 1;
	margin: 0.5rem;
`;
const OnButton = styled.button`
	background-color: #92abf3;
	border: none;
	color: white;
	font-size: 1.2rem;
	border-radius: 20px;
	padding: 0.7rem 1.5rem;
`;
const OffButton = styled.button`
	background-color: transparent;
	border: 1px solid #bdbdbd;
	color: #bdbdbd;
	border-radius: 20px;
	font-size: 1.2rem;
	padding: 0.7rem 1.5rem;
`;

const FoodTypeItem = ({ name }) => {
	const [clicked, setCliked] = useState(true);
	const handleClicked = () => {
		setCliked(!clicked);
	};

	return (
		<div>
			<ButtonBox>
				{clicked ? (
					<OnButton onClick={handleClicked}>{name}</OnButton>
				) : (
					<OffButton onClick={handleClicked}>{name}</OffButton>
				)}
			</ButtonBox>
		</div>
	);
};

export default FoodTypeItem;
