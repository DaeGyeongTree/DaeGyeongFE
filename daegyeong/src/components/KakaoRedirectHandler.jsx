import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectHandler = () => {
	const navigation = useNavigate();

	const KaKaoOauth = useCallback(async () => {
		let params = new URL(window.location.href).searchParams;
		let code = params.get('code'); // 인가코드 받는 부분

		await axios.get(`http://223.130.138.60:8080/auth/login/callback&code=${code}`).then(res => {
			localStorage.setItem('token', res.data.token);
			axios
				.get(`http://localhost:3000`, {
					headers: {
						Authorization: 'Bearer ' + res.data.token,
					},
				})
				.then(response => {
					navigation('/');
				});
		});

		// await axios
		// 	.post(
		// 		`https://kauth.kakao.com/oauth/token?
		//     grant_type=${grant_type}
		//     &client_id=${client_id}
		//     &redirect_uri=
		//     http://localhost:3000
		//     &code=${code}`,
		// 		{
		// 			headers: {
		// 				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
		// 			},
		// 		},
		// 	)
		// 	.then(res => {
		// 		console.log('성공');
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	});

	useEffect(() => {
		KaKaoOauth();
	}, []);

	return (
		<div>
			<p>카카오 로그인 완료</p>
		</div>
	);
};

export default KakaoRedirectHandler;
