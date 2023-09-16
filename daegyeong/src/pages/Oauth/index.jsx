import FoodListModal from 'components/Modal/FoodListModal';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const LoginParentDiv = styled.div`
	width: 80%;
	min-width: 800px;
	margin: 4.5vh auto;
	display: flex;
	justify-content: center;
	text-align: center;
`;

const LoginLeftDiv = styled.div`
	width: 400px;
	height: 400px;
	margin: 3% 1.5% 3% 3%;
	background-color: #eff3fd;
`;

const LoginRightDiv = styled.div`
	display: flex;
	margin-top: 3%;
	gap: 16px;
	flex-direction: column;
	justify-content: center;
	width: 400px;
	height: 400px;

	& > h2 {
		text-align: left;
		margin: 0 0 0 5%;
		font-size: 32px;
		color: #212121;
	}

	& > p {
		margin: 0 0 0 5%;
		text-align: left;
		font-size: 16px;
		color: #757575;
	}
`;

const LoginButton = styled.button`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin: 0 auto;
	height: 47px;
	background-color: #fae54e;
	border: none;
	border-radius: 12px;
	cursor: pointer;

	& > p {
		font-size: 16px;
		font-weight: 700;
	}
`;

const ModalDiv = styled.div`
	diplay: flex;
	margin-right: 1rem;
	text-align: right;
	padding: 1rem;
`;
const ModalBtn = styled.button`
	font-size: 16px;
	background-color: transparent;
	border: 0;
	border-bottom: 1px solid black;
`;

const Oauth = () => {
	const REST_API_KEY = 'd5f4fb35c8723da094707fa1ce99f285';
	const REDIRECT_URI = 'http://localhost:3000/auth/login/callback';
	const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const handleLogin = () => {
		window.open(link, '_self');
	};

	const [onModal, clsoeModal] = useState(false);
	let arr = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
	const HandleModal = useCallback(() => {
		clsoeModal(prev => !prev);
	}, []);

	return (
		<LoginParentDiv>
			<LoginLeftDiv />
			<LoginRightDiv>
				<h2>
					Logoipsum과 함께,
					<br />
					효율적인 식비관리 시작
				</h2>
				<p>Logoipsum은 이러쿵 저러쿵!!</p>
				<LoginButton type="button" onClick={handleLogin}>
					<img src={`${process.env.PUBLIC_URL}/image/Kakao.png`} alt="Kakao" />
					<p>카카오 로그인</p>
				</LoginButton>
				<ModalDiv>
					<ModalBtn onClick={HandleModal}>레시피 추가</ModalBtn>
				</ModalDiv>
				{onModal ? <FoodListModal show={onModal} onCloseModal={HandleModal} /> : ''}
			</LoginRightDiv>
		</LoginParentDiv>
	);
};

export default Oauth;
