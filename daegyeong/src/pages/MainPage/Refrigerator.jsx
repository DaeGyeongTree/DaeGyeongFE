import React from 'react';
import { useState, useEffect } from 'react';
import FoodList from 'components/Refrigerator/FoodList';
import FoodTypeList from '../../components/Refrigerator/FoodTypeList';
import styled from 'styled-components';
import axios from 'axios';
import { axiosGetQuery } from 'utils/AxiosUtils';
import { click } from '@testing-library/user-event/dist/click';
import ButtonList from 'components/Refrigerator/ButtonList';

const Container = styled.div`
	background-color: #eff3fd;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const FoodTypeListBox = styled.div`
	display: flex;
	justify-content: center;
`;

const Refrigerator = () => {
	const [posts, setPosts] = useState([]);

	const id = 1;
	const fetchData = async () => {
		const res = await axiosGetQuery(`ingredients?category=${id}`);
		setPosts(res);
		console.log(res);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Container>
			<ButtonList />
			<FoodTypeListBox>
				<FoodTypeList posts={posts} />
			</FoodTypeListBox>
			<FoodList />
		</Container>
	);
};

export default Refrigerator;
