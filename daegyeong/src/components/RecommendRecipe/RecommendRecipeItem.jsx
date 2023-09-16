import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCloudArrowUp, FaRegHeart, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Container = styled.div`
	border: 1px solid #d9d9d9;
	border-radius: 10px;
	margin-bottom: 2rem;
	padding: 1.2rem;
`;
const Title = styled.h1`
	margin: 0.4rem 0 1.2rem 0;
`;
const Paragraph = styled.p`
	color: #757575;
`;
const Button = styled.div`
	background: #e7ecfc;
	color: #3563e9;
	padding: 0.5rem;
	border-radius: 10px;
	text-align: center;
	width: 5rem;
	font-weight: bold;
`;
const RecommendRecipeListItem = ({ title, content, tag }) => {
	const navigate = useNavigate();
	const navigateToDetails = () => {
		navigate('/details');
	};
	return (
		<Container>
			<div onClick={navigateToDetails}>
				<Title>{title}</Title>
				<Paragraph>{content}</Paragraph>
			</div>
			<Button>{tag}</Button>
		</Container>
	);
};

export default RecommendRecipeListItem;
