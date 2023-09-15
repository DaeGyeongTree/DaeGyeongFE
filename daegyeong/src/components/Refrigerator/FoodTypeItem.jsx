import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemBox = styled.div`
	padding: 0px 5px 5px 0px;
	flex: 1;
`;
const IngredientItem = styled(Link)`
	text-decoration: none;
`;

const FoodTypeItem = ({ type }) => {
	return (
		<ItemBox>
			<IngredientItem to={`/refrigerator/${type}`}>{type}</IngredientItem>
		</ItemBox>
	);
};

export default FoodTypeItem;
