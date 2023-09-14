import React, { useState } from 'react';
import useInput from 'hooks/useInput';
import styled from 'styled-components';

const LoginParentDiv = styled.div`
	text-align: center;
`;

const LoginButton = styled.button`
	border: none;
	cursor: pointer;
	backgroun-color: transparent;
`;

const LoginPage = () => {
	const [id, setId] = useInput('');
	const [pw, setPw] = useInput('');

	const REST_API_KEY = 'd327db44707a21596651c9d4def1507a';
	const REDIRECT_URI = 'http://localhost:3000/login/oauth';
	const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const handleLogin = () => {
		window.location.href = link;
	};

	return (
		<LoginParentDiv>
			<input placeholder="ID" onChange={setId} value={id} name="id" />
			<input placeholder="Password" onChange={setPw} value={pw} name="pw" />
			<LoginButton type="button" onClick={handleLogin}>
				<img
					src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
					width="222"
					alt="Login"
				/>
			</LoginButton>
		</LoginParentDiv>
	);
};

export default LoginPage;
