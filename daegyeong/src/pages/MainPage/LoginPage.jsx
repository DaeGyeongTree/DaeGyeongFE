import React, { useState } from 'react';
import useInput from 'hooks/useInput';

const LoginPage = () => {
	const [value, setValue] = useInput('');

	return (
		<div>
			<p>로그인 페이지</p>
		</div>
	);
};

export default LoginPage;
