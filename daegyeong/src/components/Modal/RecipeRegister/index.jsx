import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { FaXmark, FaImage } from 'react-icons/fa6';
import { axiosGetQuery } from 'utils/AxiosUtils';
const Container = styled.div`
	width: 70rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 5%;
	top: 5%;
	padding: 32px 40px;
`;
const ModalTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 2.4rem;
`;
const ModalIntro = styled.div``;
const ImgBtnDiv = styled.div`
	border-radius: 10px;
	width: 40%;
	height: 22rem;
	background-color: #eff3fd;
	display: flex;
	justify-content: center;
	align-items: center;
	.ImgBtn {
		width: 5rem;
		height: 5rem;
	}
`;
const Img = styled.img`
	width: 40%;
	height: 22rem;
	border-radius: 10px;
`;
const TextAreaDiv = styled.div`
	margin: 1rem 0;
	display: flex;
	gap: 1rem;
`;
const Register = styled.div`
	width: 65%;
`;
const RegisterInput = styled.input`
	width: 90%;
	padding: 1.2rem;
	border-radius: 10px;
	font-size: 16px;
	border : 1px solid #BDBDBD


	input::foucs {
		outline: none;
	}
`;
const Choice = styled.div`
	width: 35%;
	height: 20rem;
	background-color: #eff3fd;
	border-radius: 10px;
`;
const InputFile = styled.input`
	display: none;
`;
const TextWrite = styled.textarea`
	border-radius: 10px;
	width: 50%;
	height: 20rem;
	padding: 1rem;
	font-size: 16px;
`;
const MenuDiv = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
	border-bottom: 1px solid #e6e6e6;
`;
const SubmitDiv = styled.div`
	width: 100%;
	background-color: #3563e9;
	height: 57px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	cursor: pointer;
`;
const MenuContainer = styled.div`
	display: flex;
	margin-top: 10px;
	gap: 1rem;
	width: 100%;
	flex-wrap: wrap;
`;
const ChoiceMenu = styled.div`
	border: 1px solid #bdbdbd;
	border-radius: 10px;
	padding: 0.5rem;
`;
const RecipeRegister = ({ show, onCloseModal }) => {
	const [InputData, setData] = useInput('');
	const [Ingredient, setIngredient] = useState([]);
	const [CategoryNum, setCategoryNum] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [MenuIngre, setMenuIngre] = useState([]);

	const OnClickMenu = useCallback(async e => {
		setCategoryNum(e);
	}, []);

	const RecipeGet = async () => {
		const rse = await axiosGetQuery('/ingredients/category');
		setIngredient(rse);
	};
	useEffect(() => {
		RecipeGet();
	}, []);
	const CategoryMenu = useCallback(async () => {
		const menu = await axiosGetQuery(`/ingredients?category=${CategoryNum}`);
		setMenuIngre(menu);
		setLoading(true);
	}, [CategoryNum]);
	useEffect(() => {
		RecipeGet();
	}, []);

	useEffect(() => {
		CategoryMenu();
	}, [CategoryMenu]);
	return (
		<Container>
			<ModalTitle>
				<Title>Welcome !</Title>
				<FaXmark onClick={onCloseModal} />
			</ModalTitle>
			<ModalIntro>
				<h2>레시피를 입력해보세요</h2>
				<span>나만의 간편 레시피를 공유해보세요:)</span>
			</ModalIntro>
			<TextAreaDiv>
				<Register>
					<RegisterInput
						value={InputData}
						onChange={setData}
						placeholder="나만의 간편 레시피를 공유해보세요:)"
					/>
					<MenuDiv>
						{Ingredient.map(e => {
							return <span onClick={() => OnClickMenu(e.id)}>{e.name} </span>;
						})}
					</MenuDiv>
					{isLoading ? (
						<MenuContainer>
							{MenuIngre.map(e => {
								return <ChoiceMenu>{e.name}</ChoiceMenu>;
							})}
						</MenuContainer>
					) : (
						''
					)}
				</Register>
				<Choice></Choice>
			</TextAreaDiv>
			<SubmitDiv>등록하기</SubmitDiv>
		</Container>
	);
};

export default RecipeRegister;

const RecipeRegister2 = () => {
	const [WriteData, setData] = useInput('');
	const [ImgSrc, setImgSrc] = useState('');
	const ref = useRef();

	const HandleUpload = useCallback(() => {
		ref.current.click();
	}, []);
	const onUploadImg = useCallback(e => {
		if (!e.target.files === undefined) return;
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			setImgSrc(previewImgUrl);
		};
	}, []);
	return (
		<div>
			<ModalIntro>
				<h2>레시피를 입력해보세요</h2>
				<span>나만의 간편 레시피를 공유해보세요:)</span>
			</ModalIntro>
			<TextAreaDiv>
				<InputFile type="file" multiple accept="image/*" ref={ref} onChange={e => onUploadImg(e)} />
				{ImgSrc ? (
					<Img src={ImgSrc} />
				) : (
					<ImgBtnDiv label="이미지 업로드" onClick={HandleUpload}>
						<FaImage className="ImgBtn" />
					</ImgBtnDiv>
				)}
				<TextWrite
					value={WriteData}
					onChange={setData}
					placeholder="나만의 간편 레시피를 공유해보세요:)"
				/>
			</TextAreaDiv>
			<SubmitDiv>등록하기</SubmitDiv>
		</div>
	);
};
