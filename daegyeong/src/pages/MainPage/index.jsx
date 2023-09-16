import React from 'react';
import Refrigerator from './Refrigerator';
import styled from 'styled-components';
import Main from 'components/Main';
import RecommendRecipe from './RecommendRecipe';
import Task from './Task';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const MainLayout = styled.div`
	display: flex;
	justify-content: center;
`;
const RefrigeratorLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Title = styled.h1`
	margin: 4rem 0;
	text-align: center;
	font-size: 3.2rem;
	font-weight: bold;
`;
const Row = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 3rem;
`;
const RowLayout = styled.div`
display: flex;
flex-direction: row:
`;
const RefrigeratorBox = styled.div`
	flex: 6;
	margin: 1rem 1.2rem;
`;
const SubTitle = styled.h1`
	display: inline;
	border-bottom: 2px solid black;
	margin: 0;
	padding-bottom: 0.7rem;
	font-size: 2rem;
	font-style: bold;
`;
const RefrigeratorList = styled.div`
	margin-top: 2rem;
`;
const RecommendBox = styled.div`
	flex: 4;
	margin: 1rem 1.2rem;
`;
const MainPage = () => {
	const user = 'wndus';

	return (
		<Container>
			<MainLayout>
				<Main />
			</MainLayout>

			<RefrigeratorLayout>
				<Title>냉장고에 있는 재료로 레시피 추천</Title>
				<Task />
				<Row>
					<RowLayout>
						<RefrigeratorBox>
							<div>
								<SubTitle>{user}님의 냉장고</SubTitle>
							</div>
							<RefrigeratorList>
								<Refrigerator />
							</RefrigeratorList>
						</RefrigeratorBox>
						<RecommendBox>
							<RecommendRecipe />
						</RecommendBox>
					</RowLayout>
				</Row>
			</RefrigeratorLayout>
		</Container>
	);
};

export default MainPage;
