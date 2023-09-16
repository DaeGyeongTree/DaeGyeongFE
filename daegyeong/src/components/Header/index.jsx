import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { FaSistrix } from 'react-icons/fa6';
const Container = styled.div`
	width: 100%;
	padding: 0 5rem;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.05rem solid grey;
`;
const HeaderSide = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
`;
const LinkBtn = styled(Link)`
	text-decoration: none;

	&:link {
		color: black;
	}

	&:visited {
		color: black;
	}
`;
const SerachInput = styled.input`
	border: 0;
	border-bottom: 1px solid #9e9e9e;
	padding : 0.5rem 1.5rem;
	text-size :16px;
	&::-webkit-input-placeholder{
		background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png) ;
		background-size: contain;
		background-position:  1px center;
		background-repeat: no-repeat;
		text-indent: 20px;
`;

const LoginBtn = styled.button`
	border: 0;
	border-radius: 5px;
	color: white;
	background-color: #3563e9;
	padding: 0.5rem 1.5rem;
`;
const LogoutBtn = styled.button`
	border: 1px solid #3563e9;
	color: #3563e9;
	background: white;
	padding: 0.5rem 1.5rem;
	border-radius: 5px;
`;
const Header = () => {
	const url = window.location.pathname.split('/')[1];
	const [Login, Logout] = useState(false);
	const [Searchdata, setSearchdata] = useInput('');
	const navigate = useNavigate();
	const HandleLogin = useCallback(() => {
		navigate('/login');
	}, [navigate]);
	return (
		<Container>
			<div>로고</div>
			<div>
				{Login && url === 'recipe' ? ( //로그인 상태 && 레시피 페이지
					<HeaderSide>
						<SerachInput
							value={Searchdata}
							onChange={setSearchdata}
							placeholder={`${FaSistrix} Search...`}
						/>
						<LogoutBtn>Logout</LogoutBtn>
					</HeaderSide>
				) : !Login && url === 'recipe' ? ( //비로그인 상태 && 레시피 페이지
					<HeaderSide>
						<SerachInput value={Searchdata} onChange={setSearchdata} placeholder={'Search...'} />
						<LoginBtn onClick={HandleLogin}>Login</LoginBtn>
					</HeaderSide>
				) : !Login && url !== 'recipe' ? ( //비로그인 상태 && 레시피 페이지 아님
					<HeaderSide>
						<LinkBtn to="/recipe">recipe</LinkBtn>
						<LoginBtn onClick={HandleLogin}>Login</LoginBtn>
					</HeaderSide>
				) : (
					<HeaderSide>
						<LinkBtn to="/recipe">recipe</LinkBtn>
						<LogoutBtn>Logout</LogoutBtn>
					</HeaderSide>
				)}
			</div>
		</Container>
	);
};

export default Header;
