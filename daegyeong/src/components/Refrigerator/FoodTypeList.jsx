import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FoodTypeItem from './FoodTypeItem';

const ListCol = styled.div`
	//flex방향 column으로 하는게 아니라 wrap조절해서 다음 줄로 넘어가는 식으로
`;

const FoodTypeList = ({ posts }) => {
	return (
		<>
			<ListCol>
				{posts.map(post => {
					return <FoodTypeItem type={post.type} />;
				})}
			</ListCol>
		</>
	);
};

export default FoodTypeList;