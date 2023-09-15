import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border: 0.1rem solid #e0e0e0;
	padding: 2.4rem;
`;

const ItemBox = () => {
	return (
		<Container>
			<div>레시피</div>
		</Container>
	);
};

export default ItemBox;
