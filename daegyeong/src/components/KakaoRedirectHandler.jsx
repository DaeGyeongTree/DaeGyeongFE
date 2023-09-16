import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectHandler = () => {
	const navigation = useNavigate();

	const KaKaoOauth = useCallback(async () => {
		let params = new URL(window.location.href).searchParams;
		let code = params.get('code'); // 인가코드 받는 부분

		// await axios.get(`http://localhost:8080/auth/login?code=${code}`).then(res => {
		// 	localStorage.setItem('token', res.data.token);
		// 	console.log(res);
		// });

		await axios
			.post(
				`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=d327db44707a21596651c9d4def1507a&redirect_uri=http://localhost:3000/auth/login/callback&code=${code}`,
				{
					headers: {
						'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
					},
				},
			)
			.then(res => {
				console.log('성공');
				axios
					.get(`http://223.130.138.60:8080/auth/login?access_token=${res.data.access_token}`)
					.then(res => {
						console.log(res.data);
						localStorage.setItem('token', res.data.access_token);
						navigation('/');
					})
					.catch(err => console.log(err));
			})
			.catch(err => {
				console.log('실패');
				console.log(err);
			});
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
