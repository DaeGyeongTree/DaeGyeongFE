import React, { useState } from 'react';
import useInput from 'hooks/useInput';
import styled from 'styled-components';

const LoginParentDiv = styled.div`
	text-align: center;
`;

const LoginButton = styled.button`
	width: 50%;
	border: none;
	cursor: pointer;
`;

const LoginPage = () => {
	const [value, setValue] = useInput('');

	const REST_API_KEY = 'd327db44707a21596651c9d4def1507a';
	const REDIRECT_URI = 'http://localhost:3000/login/oauth';
	const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const handleLogin = () => {
		window.location.href = link;
	};

	return (
		<LoginParentDiv>
			<LoginButton type="button" onClick={handleLogin}>
				<img src={`${process.env.PUBLIC_URL}/image/kakaoLogin.png`} alt="Login" />
			</LoginButton>
		</LoginParentDiv>
	);
};

export default LoginPage;
