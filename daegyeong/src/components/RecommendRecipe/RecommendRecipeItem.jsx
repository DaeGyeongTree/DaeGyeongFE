import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid #d9d9d9;
	border-radius: 10px;
	margin-bottom: 2rem;
	padding: 1.2rem;
`;

const RecommendRecipeListItem = ({ title, content, tag }) => {
	return (
		<Container>
			<div>헤더</div>

			<h3>{title}</h3>
			<p>{content}</p>
			<button>{tag}</button>
		</Container>
	);
};

export default RecommendRecipeListItem;
