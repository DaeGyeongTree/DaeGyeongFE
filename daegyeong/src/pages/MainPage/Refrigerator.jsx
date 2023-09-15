import React from 'react';
import { useState } from 'react';
import FoodImageIcon from '../../components/Refrigerator/FoodImageIcon';
import FoodTypeList from '../../components/Refrigerator/FoodTypeList';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #f5f5f5;
`;
const Refrigerator = () => {
	// const [user, setUser] = useState("^^");
	const [posts, setPosts] = useState([
		{ type: '채소' },
		{ type: '과일' },
		{ type: '양곡' },
		{ type: '견과' },
		{ type: '육류' },
		{ type: '수산물' },
		{ type: '양념' },
		{ type: '조미료' },
		{ type: '소스' },
		{ type: '면류' },
		{ type: '음료' },
		{ type: '유제품' },
		{ type: '반찬' },
		{ type: '김치' },
		{ type: '과자' },
		{ type: '인스턴트' },
	]);

	const user = 'wndus';

	//axios setPosts()

	return (
		<Container>
			<h1>{user}님의 냉장고</h1>

			<FoodTypeList posts={posts} />
			<FoodImageIcon />
		</Container>
	);
};

export default Refrigerator;
