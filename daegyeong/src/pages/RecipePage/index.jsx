import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ItemBox from './ItemBox';
import Modal from 'components/Modal';
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const RecipeTitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 44px;
`;
const SubTitle = styled.span`
	font-size: 20px;
	color: #757575;
`;
const RecipeList = styled.div`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 384px);
	gap: 78px 2rem;
	justify-content: center;
`;
const RecipePage = () => {
	const [onModal, clsoeModal] = useState(false);
	let arr = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
	const HandleModal = useCallback(() => {
		clsoeModal(prev => !prev);
	}, []);
	return (
		<Container>
			<RecipeTitleDiv>
				<Title>간편레시피를 한눈에</Title>
				<SubTitle>여러 사용자들이 올린 간편 레시피를 통해 요리에 쉽게 다가가보세요</SubTitle>
			</RecipeTitleDiv>
			<button onClick={HandleModal}>모달</button>
			{onModal ? <Modal show={onModal} onCloseModal={HandleModal} /> : ''}
			<RecipeList>
				{arr.map((e, index) => {
					return <ItemBox key={index} />;
				})}
				<ItemBox />
			</RecipeList>
		</Container>
	);
};

export default RecipePage;
