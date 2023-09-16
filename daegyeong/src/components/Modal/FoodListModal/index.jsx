import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';
import useInput from 'hooks/useInput';
import { axiosGetQuery } from 'utils/AxiosUtils';

const Container = styled.div`
	width: 25rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 33.3%;
	top: 10%;
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
const IntroText = styled.div`
	& > * {
		text-align: left;
		margin-top: 0;
	}
`;

const SearchBar = styled.input`
  margin-top: 3rem;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
	width: 100%;
	padding: 8px;
  &::-webkit-input-placeholder{
		background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png) ;
		background-size: contain;
		background-position:  1px center;
		background-repeat: no-repeat;
		text-indent: 20px;
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

const FoodListModal = ({ show, onCloseModal }) => {
	const [searchData, setSearchData] = useInput('');
	const [InputData, setData] = useInput('');
	const [Ingredient, setIngredient] = useState([]);
	const [CategoryNum, setCategoryNum] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [MenuIngre, setMenuIngre] = useState([]);

	const OnClickMenu = useCallback(async e => {
		setCategoryNum(e);
	}, []);

	const CategoryMenu = useCallback(async () => {
		const menu = await axiosGetQuery(`/ingredients?category=${CategoryNum}`);
		setMenuIngre(menu);
		setLoading(true);
	}, [CategoryNum]);

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
				<IntroText>
					<h2>식재료의 정보를 등록해보세요</h2>
					<p>나만의 냉장고에서 식재료를 관리해요:)</p>
				</IntroText>
			</ModalIntro>
			<SearchBar value={searchData} onChange={setSearchData} placeholder="식재료명을 넣어보세요" />

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

export default FoodListModal;
