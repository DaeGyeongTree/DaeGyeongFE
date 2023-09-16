import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	margin-bottom: 1.5rem;
`;
const FoodBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 260px;
	height: 140px;
	background-color: white;
	border-radius: 12px;
	padding: 1rem;
`;

const Title = styled.h1`
	margin: 0.7rem 0 1.3rem 0;
`;
const Paragraph = styled.p`
	color: #757575;
	margin: 0 0 0.5rem 0;
`;

const FoodListItem = ({ props }) => {
	return (
		<Container>
			<FoodBox>
				<Title>{props.name}</Title>
				<Paragraph>유통기한: {props.period}</Paragraph>
				<Paragraph>남은 재고: {props.number}개</Paragraph>
			</FoodBox>
		</Container>
	);
};

export default FoodListItem;
