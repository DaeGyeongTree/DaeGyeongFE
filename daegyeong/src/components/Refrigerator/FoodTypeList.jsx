import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FoodTypeItem from './FoodTypeItem';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: content;
	width: 624px;
`;

const FoodTypeList = ({ lists }) => {
	const [clicked, setClicked] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [flag, setFlag] = useState(1);

	const handleClicked = id => {
		let newClicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		newClicked[id - 1] = 1;

		setClicked([...newClicked]);
		setFlag(id);
	};

	return (
		<Container>
			<Layout>
				{lists.map(list => {
					return (
						<FoodTypeItem handleClicked={handleClicked} id={list.id} name={list.name} flag={flag} />
					);
				})}
			</Layout>
		</Container>
	);
};

export default FoodTypeList;
