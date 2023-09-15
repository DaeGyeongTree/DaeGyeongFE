import React from 'react';
import Refrigerator from './Refrigerator';
import styled from 'styled-components';
import Main from 'components/Main';
import RecommendRecipe from './RecommendRecipe';

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
	margin: 5rem 0;
	text-align: center;
	font-size: 3.2rem;
	font-weight: bold;
`;
const Row = styled.div`
	display: flex;
	justify-content: center;
`;
const RefrigeratorBox = styled.div`
	flex: 6;
`;
const RecommendBox = styled.div`
	flex: 4;
`;
const MainPage = () => {
	return (
		<Container>
			<MainLayout>
				<Main />
			</MainLayout>

			<RefrigeratorLayout>
				<Title>냉장고에 있는 재료로 레시피 추천</Title>
				<Row>
					<RefrigeratorBox>
						<Refrigerator />
					</RefrigeratorBox>
					<RecommendBox>
						<RecommendRecipe />
					</RecommendBox>
				</Row>
			</RefrigeratorLayout>
		</Container>
	);
};

export default MainPage;
