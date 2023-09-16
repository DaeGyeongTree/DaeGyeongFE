import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ButtonLayout = styled.div`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	margin-bottom: 1.8rem;
`;
const ButtonBox = styled.div`
	display: flex;
`;
const ButtonItem = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
const OnButton = styled.button`
	background-color: #3563e9;
	border: none;
	color: white;
	font-size: 1.2rem;
	font-style: bold;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 0.7rem;
`;
const OffButton = styled.button`
	background-color: transparent;
	border: none;
	color: #bdbdbd;
	font-size: 1.2rem;
	font-style: bold;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 0.7rem;
`;

const ButtonList = () => {
	const [clicked, setCliked] = useState(true);
	const handleClicked = () => {
		setCliked(!clicked);
	};

	return (
		<ButtonLayout>
			<ButtonBox>
				<ButtonItem>
					{clicked ? (
						<OnButton onClick={handleClicked}>품목</OnButton>
					) : (
						<OffButton onClick={handleClicked}>품목</OffButton>
					)}
				</ButtonItem>
				<ButtonItem>
					{clicked ? (
						<OffButton onClick={handleClicked}>보관방법</OffButton>
					) : (
						<OnButton onClick={handleClicked}>보관방법</OnButton>
					)}
				</ButtonItem>
			</ButtonBox>
		</ButtonLayout>
	);
};

export default ButtonList;
