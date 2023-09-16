import React from 'react';
import styled from 'styled-components';
import { FaUsersLine, FaClock, FaStar } from 'react-icons/fa6';
const Container = styled.div`
	background-color: #f2f2f2;
	height: 200vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	flex-direction: column;
`;
const HeaderDiv = styled.div`
	margin-top: 1rem;
	border: 1px solid #bdbdbd;
	width: 95%;
	padding-bottom: 50px;
	align-items: center;
	background-color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;
const ImgDiv = styled.div`
	background-color: #eff3fd;
	width: 30rem;
	height: 25rem;
`;
const Title = styled.h1`
	font-size: 48px;
`;
const MainIconDiv = styled.div`
	background: #e7ecfc;
	border-radius: 10px;
	padding: 0.5rem;
	.cloud {
		color: #3563e9;
		height: 25px;
		width: 25px;
	}
`;
const Detail = styled.div`
	display: flex;
	font-size: 24px;
	gap: 1rem;
`;
const MenuDiv = styled.div`
	width: 93%;
	border: 1px solid #bdbdbd;
	height: 60vh;
	background-color: white;
	padding: 1rem;
`;
const ContentDiv = styled.div`
	width: 93%;
	border: 1px solid #bdbdbd;
	height: 60vh;
	background-color: white;
	padding: 1rem;
`;
const List = styled.div`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(5, 100px);
	gap: 2rem;
`;
const GridItem = styled.div`
	border: 1px solid #bdbdbd;
	border-radius: 30px;
	padding: 0.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const DetailPage = () => {
	return (
		<Container>
			<HeaderDiv>
				<Title>초간단 떡만두국</Title>
				<div>
					<ImgDiv />
				</div>
				<Detail>
					<MainIconDiv>
						<FaUsersLine className="cloud" />
					</MainIconDiv>
					인용
					<MainIconDiv>
						<FaClock className="cloud" />
					</MainIconDiv>
					초급
					<MainIconDiv>
						<FaStar className="cloud" />
					</MainIconDiv>
					15분
				</Detail>
			</HeaderDiv>
			<MenuDiv>
				<h3>필요한 재료</h3>
				<List>
					<GridItem>떡국 떡</GridItem>
					<GridItem>떡국 떡</GridItem>
				</List>
			</MenuDiv>
			<ContentDiv>
				<h1>레시피</h1>
			</ContentDiv>
		</Container>
	);
};

export default DetailPage;
