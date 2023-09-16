import React from 'react';
import styled from 'styled-components';
import { FaCloudArrowUp, FaRegHeart, FaArrowUpRightFromSquare } from 'react-icons/fa6';
const Container = styled.div`
	border: 0.1rem solid #e0e0e0;
	padding: 24px;
	border-radius: 10px;
	display: grid;
	grid-template: repeat(1, 1fr) / repeat(1, 1fr);
	gap: 0.7rem;
`;
const HeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
const HeaderSub = styled.div`
	display: flex;
	gap: 1rem;
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
const ContentDiv = styled.div`
	color: #757575;
`;
const Level = styled.div`
	background: #e7ecfc;
	color: #3563e9;
	padding: 0.5rem;
	border-radius: 10px;
	text-align: center;
	width: 5rem;
	font-weight: bold;
`;
const ItemBox = () => {
	return (
		<Container>
			<HeaderDiv>
				<MainIconDiv>
					<FaCloudArrowUp className="cloud" />
				</MainIconDiv>
				<HeaderSub>
					<div>
						<FaRegHeart />
					</div>
					<div>
						<FaArrowUpRightFromSquare />
					</div>
				</HeaderSub>
			</HeaderDiv>
			<div>
				<h1>초간단 떡만두국 만들기</h1>
			</div>
			<ContentDiv>
				【초간단】떡만두국 만들기, 휴일 간편한 한그릇 요리, 초간단으로 떡만두국을 만들어 보아요!
				스푼은 밥수저 기준입니다 ...
			</ContentDiv>
			<div>
				<Level>난이도 하</Level>
			</div>
		</Container>
	);
};

export default ItemBox;
