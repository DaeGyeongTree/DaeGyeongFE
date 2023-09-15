import React from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { FaXmark } from 'react-icons/fa6';
const Container = styled.div`
	width: 30rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 26%;
	top: 20%;
	padding: 32px 40px;
`;
const ModalTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 2.4rem;
`;
const ModalIntro = styled.div``;
const TextAreaDiv = styled.div`
	margin: 1rem 0;
`;
const TextWrite = styled.textarea`
	border-radius: 10px;
	width: 93%;
	height: 20rem;
	padding: 1rem;
	font-size: 16px;
`;
const SubmitDiv = styled.div`
	width: 100%;
	background-color: #3563e9;
	height: 57px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	cursor: pointer;
`;
const Modal = ({ show, onCloseModal }) => {
	const [WriteData, setData] = useInput('');

	return (
		<Container>
			<ModalTitle>
				<Title>Welcome !</Title>
				<FaXmark onClick={onCloseModal} />
			</ModalTitle>
			<ModalIntro>
				<h2>레시피를 입력해보세요</h2>
				<span>나만의 간편 레시피를 공유해보세요:)</span>
			</ModalIntro>
			<TextAreaDiv>
				<TextWrite
					value={WriteData}
					onChange={setData}
					placeholder="나만의 간편 레시피를 공유해보세요:)"
				/>
			</TextAreaDiv>
			<SubmitDiv onClick={onCloseModal}>등록하기</SubmitDiv>
		</Container>
	);
};

export default Modal;
