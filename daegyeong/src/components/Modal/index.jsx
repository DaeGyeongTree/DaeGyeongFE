import React from 'react';
import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';
const Container = styled.div`
	width: 50rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 20%;
	top: 10%;
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

const Modal = ({ show, onCloseModal }) => {
	return (
		<Container>
			<ModalTitle>
				<Title>Welcome !</Title>
				<FaXmark onClick={onCloseModal} />
			</ModalTitle>
		</Container>
	);
};

export default Modal;
