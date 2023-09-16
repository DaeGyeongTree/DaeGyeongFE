import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FoodTypeItem from './FoodTypeItem';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: content;
	justify-content: center;
`;

const FoodTypeList = ({ posts }) => {
	return (
		<Container>
			{posts.map(post => {
				return <FoodTypeItem name={post.ingredientCategory.name} />;
			})}
		</Container>
	);
};

export default FoodTypeList;
