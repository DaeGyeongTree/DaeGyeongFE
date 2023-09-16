import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLayout = styled.div`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	margin-bottom: 1.8rem;
`;
const ButtonBox = styled.div`
	flex: 1;
`;
const ButtonItem = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
const OnButton = styled.button`
	background-color: #92abf3;
	border: none;
	color: white;
	font-size: 1.2rem;
	border-radius: 20px;
	padding: 0.7rem;
`;
const OffButton = styled.button`
	background-color: transparent;
	border: none;
	color: #bdbdbd;
	border-radius: 20px;
	padding: 0.7rem;

	font-size: 1rem;
	border: 1px solid #bdbdbd;
`;

const FoodTypeItem = ({ type }) => {
	return (
		<ButtonLayout>
			<ButtonItem>
				<ButtonBox>
					<OnButton>{type}</OnButton>
				</ButtonBox>
			</ButtonItem>
		</ButtonLayout>
	);
};

export default FoodTypeItem;
