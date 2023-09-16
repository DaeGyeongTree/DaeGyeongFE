import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #eff3fd;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1280px;
	height: 735px;
`;
const Col = styled.div`
	text-align: center;
	width: 974px;
	height: 450px;
`;
const Title = styled.h1`
	margin: 0;
	font-size: 3.2rem;
	font-weight: bold;
`;
const Paragraph = styled.p`
	font-size: 2rem;
`;
const Button = styled.button`
	color: white;
	background-color: #3563e9;
	border: none;
	border-radius: 5px;
	font-size: 2rem;
	padding: 1.1rem 2rem;
`;
const Main = () => {
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate('/login');
	};

	return (
		<Container>
			<Col>
				<Title>식비를 효율적으로 관리하도록, Logoipsum</Title>
				<Paragraph>
					Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus
					amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor,
				</Paragraph>
				<Button onClick={navigateToLogin}>Get Started</Button>
			</Col>
		</Container>
	);
};

export default Main;
