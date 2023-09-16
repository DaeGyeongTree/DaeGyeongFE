import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import FoodListItem from './FoodListItem';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FoodListBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: content;
	justify-content: flex-start;
	width: 624px;
`;

const FoodList = () => {
	const [list, setList] = useState([
		{
			name: '테스트1',
			period: '2023.09.22',
			number: '3',
		},
		{
			name: '테스트2',
			period: '2023.09.22',
			number: '7',
		},
		{
			name: '테스트2',
			period: '2023.09.22',
			number: '7',
		},
		{},
	]);

	return (
		<Container>
			<FoodListBox>
				{list.map((ele, i) => {
					return <FoodListItem props={ele} key={i} />;
				})}
			</FoodListBox>
		</Container>
	);
};

export default FoodList;
