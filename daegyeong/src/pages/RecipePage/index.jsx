import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ItemBox from 'components/ItemBox';
import Modal from 'components/Modal';
const Container = styled.div`
	display: flex;
	flex-direction: column;
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
	grid-template: repeat(2, 1fr) / repeat(3, 380px);
	gap: 2rem;
	justify-content: center;
`;
const ModalDiv = styled.div`
	diplay: flex;
	margin-right: 1rem;
	text-align: right;
	padding: 1rem;
`;
const ModalBtn = styled.button`
	font-size: 16px;
	background-color: transparent;
	border: 0;
	border-bottom: 1px solid black;
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
			<ModalDiv>
				<ModalBtn onClick={HandleModal}>레시피 추가</ModalBtn>
			</ModalDiv>
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
