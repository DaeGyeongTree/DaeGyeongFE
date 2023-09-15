import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { FaXmark } from 'react-icons/fa6';
const Container = styled.div`
	width: 50rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 20%;
	top: 25%;
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
const ImgBtnDiv = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	width: 40%;
	height: 22rem;
`;
const Img = styled.img`
	width: 40%;
	height: 22rem;
	border-radius: 10px;
`;
const TextAreaDiv = styled.div`
	margin: 1rem 0;
	display: flex;
	gap: 1rem;
`;
const InputFile = styled.input`
	display: none;
`;
const TextWrite = styled.textarea`
	border-radius: 10px;
	width: 50%;
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
	const [ImgSrc, setImgSrc] = useState('');
	const ref = useRef();

	const HandleUpload = useCallback(() => {
		ref.current.click();
	}, []);
	const onUploadImg = useCallback(e => {
		if (!e.target.files === undefined) return;
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			setImgSrc(previewImgUrl);
		};
	}, []);
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
				<InputFile type="file" multiple accept="image/*" ref={ref} onChange={e => onUploadImg(e)} />
				{ImgSrc ? <Img src={ImgSrc} /> : <ImgBtnDiv label="이미지 업로드" onClick={HandleUpload} />}
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
