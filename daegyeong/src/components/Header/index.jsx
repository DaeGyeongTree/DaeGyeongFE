import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa6';
const Container = styled.div`
	padding: 0 5rem;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.05rem solid grey;
`;

const Header = () => {
	return (
		<Container>
			<div>로고</div>
			<div>
				<FaBars />
			</div>
		</Container>
	);
};

export default Header;
