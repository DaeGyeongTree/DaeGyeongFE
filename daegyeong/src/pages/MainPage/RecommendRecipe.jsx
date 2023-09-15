import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import RecommendRecipeList from '../../components/RecommendRecipe/RecommendRecipeList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const Title = styled.h1`
	display: inline;
	border-bottom: 2px solid black;
	margin: 0;
	padding-bottom: 0.7rem;
	font-size: 2rem;
	font-style: bold;
`;
const ListBox = styled.div`
	margin-top: 1rem;
`;
const RecommendRecipe = () => {
	const [posts, setPosts] = useState([
		{
			title: '감자계란 샐러드',
			content:
				'감자계란샐러드 만들기 간단한 감자계란샐러드 만드는 법입니다. 그냥 먹어도 좋지만 빵사이에 넣어 먹으면 든든한 샌드위치가 ...',
			tag: '가성비',
		},
		{
			title: '감자 달걀국',
			content:
				'감자는 껍질을 벗겨 먹기 좋은 크기로 잘라주세요. 냄비에 다시마멸치육수와 감자를 넣어 8~10분 정도 끓여주세요. 감자가 ...',
			tag: '가성비',
		},
	]);

	return (
		<Container>
			<div>
				<Title>레시피 추천</Title>
			</div>
			<ListBox>
				<RecommendRecipeList posts={posts} />
			</ListBox>
		</Container>
	);
};

export default RecommendRecipe;
