import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import FoodListItem from './FoodListItem';
import FoodListModal from '../Modal/FoodListModal/index';

const FoodListDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: flex-start;
`;

const PlusBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 45%;
	height: 150px;
	margin: 3% 2%;
	background-color: white;
	border-radius: 12px;

	& > p {
		text-align: center;
		font-size: 36px;
	}
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
	]);
	const [onModal, clsoeModal] = useState(false);
	let arr = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
	const HandleModal = useCallback(() => {
		clsoeModal(prev => !prev);
	}, []);

	return (
		<>
			<FoodListDiv>
				{onModal ? <FoodListModal show={onModal} onCloseModal={HandleModal} /> : ''}
				{list.map((ele, i) => {
					return <FoodListItem props={ele} key={i} />;
				})}
				<PlusBox onClick={HandleModal}>
					<p>+</p>
				</PlusBox>
			</FoodListDiv>
		</>
	);
};

export default FoodList;
