import React from 'react';
import styled from 'styled-components';

const ListBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	height: 140px;
	margin: 3% 2%;
	background-color: white;
	border-radius: 12px;
`;

const ListName = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > p {
		font-size: 20px;
		font-weight: 600;
		margin: 0 16px;
	}
`;

const ListState = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& p {
		margin: 4px 16px;
		color: #757575;
	}
	padding-bottom: 12px;
`;

const FoodListItem = ({ props }) => {
	return (
		<ListBox>
			<ListName>
				<p>{props.name}</p>
			</ListName>
			<ListState>
				<div>
					<p>유통기한: {props.period}</p>
				</div>
				<div>
					<p>남은 재고: {props.number}개</p>
				</div>
			</ListState>
		</ListBox>
	);
};

export default FoodListItem;
