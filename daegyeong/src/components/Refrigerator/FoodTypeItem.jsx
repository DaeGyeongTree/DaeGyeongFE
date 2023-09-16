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
	border: 1px solid #92abf3;
	color: white;
	font-size: 1rem;
	border-radius: 20px;
	padding: 0.5rem 1.4rem;
`;
const OffButton = styled.button`
	background-color: transparent;
	border: 1px solid #bdbdbd;
	color: #bdbdbd;
	border-radius: 20px;
	font-size: 1rem;
	padding: 0.5rem 1.4rem;
`;

const FoodTypeItem = ({ handleClicked, id, name, flag }) => {
	return (
		<div>
			<ButtonBox>
				{id === flag ? (
					<OnButton onClick={() => handleClicked(id)}>{name}</OnButton>
				) : (
					<OffButton onClick={() => handleClicked(id)}>{name}</OffButton>
				)}
			</ButtonBox>
		</div>
	);
};

export default FoodTypeItem;
