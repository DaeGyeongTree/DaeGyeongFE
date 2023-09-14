import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1280px;
`;
const HeaderDiv = styled.div``;

const SectionDiv = styled.section`
	padding: 4rem 4rem;
`;
const layout = () => {
	return (
		<Container>
			<HeaderDiv>
				<Header />
			</HeaderDiv>
			<SectionDiv>
				<Outlet />
			</SectionDiv>
		</Container>
	);
};

export default layout;
