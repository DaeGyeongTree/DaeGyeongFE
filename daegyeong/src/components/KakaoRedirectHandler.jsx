import React, { useEffect } from 'react';
import axios from 'axios';

const KakaoRedirectHandler = () => {
	useEffect(() => {
		let params = new URL(document.location.toString()).searchParams;
		let code = params.get('code'); // 인가코드 받는 부분
		let grant_type = 'authorization_code';
		let client_id = 'd327db44707a21596651c9d4def1507a';

		axios
			.post(
				`https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://localhost:3000
        &code=${code}`,
				{
					headers: {
						'Content-type': 'application/json',
					},
				},
			)
			.then(res => {
				console.log('성공');
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<p>카카오 로그인 완료</p>
		</div>
	);
};

export default KakaoRedirectHandler;
