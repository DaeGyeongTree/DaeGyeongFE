import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';
import useInput from 'hooks/useInput';
import { axiosGetQuery } from 'utils/AxiosUtils';

const Container = styled.div`
	width: 40rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 25%;
	top: 3%;
	padding: 20px 20px;
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
	margin-top: 1rem;
`;

const MenuDiv = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
	border-bottom: 1px solid #e6e6e6;
	flex-wrap: wrap;
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
const CheckIn = styled.div`
	border-radius: 10px;
	padding: 0.5rem;
	background-color: #92abf3;
`;

const ChoiceName = styled.input`
	background-color: #e6e6e6;
	border: none;
	padding: 0.7rem;
	border-radius: 10px;
	width: 20rem;
`;
const AddName = styled.input`
	border: 1px solid black;
	padding: 0.7rem;
	border-radius: 10px;
	background-color: white;
	width: 20rem;
`;
const FlexDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 16px;
	margin-bottom: 1rem;
`;
const ChoiceInput = styled.input``;
const FoodListModal = ({ show, onCloseModal }) => {
	const [Ingredient, setIngredient] = useState([]);
	const [CategoryNum, setCategoryNum] = useState('1');
	const [MenuIngre, setMenuIngre] = useState([]);
	const [CheckList, setCheckList] = useState([]);
	const [Checked, setChecked] = useState(false);
	const [CheckId, setCheckId] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [page, setpage] = useState(false);
	const CategoryMenu = useCallback(async () => {
		const menu = await axiosGetQuery(`/ingredients?category=${CategoryNum}`);
		setMenuIngre(menu);
		setLoading(true);
	}, [CategoryNum]);
	const RecipeGet = async () => {
		const rse = await axiosGetQuery('/ingredients/category');
		setIngredient(rse);
	};
	const OnClickMenu = useCallback(async e => {
		setCategoryNum(e);
	}, []);
	const HandleChecked = useCallback(
		async (e, id) => {
			setChecked(prev => !prev);
			setCheckList([...CheckList, e]);
			setCheckId([...CheckId, id]);
			console.log(CheckList);
		},
		[CheckList],
	);
	const HandleDel = useCallback(
		(e, id) => {
			setChecked(prev => !prev);
			CheckList.splice(CheckList.indexOf(e), 1);
			CheckId.splice(CheckId.indexOf(id), 1);
		},
		[CheckList],
	);
	const HandlePage = () => {
		setpage(true);
	};
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
				<IntroText>
					<h2>식재료의 정보를 등록해보세요</h2>
					<p>나만의 냉장고에서 식재료를 관리해요:)</p>
				</IntroText>
			</ModalIntro>
			{!page ? (
				<>
					<MenuDiv>
						{Ingredient.map(e => {
							return <span onClick={() => OnClickMenu(e.id)}>{e.name} </span>;
						})}
					</MenuDiv>
					{isLoading ? (
						<MenuContainer>
							{MenuIngre.map(e => {
								return (
									<div>
										{!CheckList.includes(e.name) ? (
											<div>
												<ChoiceMenu onClick={() => HandleChecked(e.name, e.id)}>
													{e.name}
												</ChoiceMenu>
											</div>
										) : (
											<CheckIn onClick={() => HandleDel(e.name, e.id)}>{e.name}</CheckIn>
										)}
									</div>
								);
							})}
						</MenuContainer>
					) : (
						''
					)}
					<SubmitDiv onClick={HandlePage}>등록하기</SubmitDiv>
				</>
			) : (
				<FoodListModal2 />
			)}
		</Container>
	);
};

export default FoodListModal;

const FoodListModal2 = () => {
	const [data1, setdata1] = useInput('');
	const [data2, setdata2] = useInput('');
	const [data3, setdata3] = useInput('');
	const [data4, setdata4] = useInput('');
	return (
		<div>
			<FlexDiv>
				식자제명 <ChoiceName value={data1} onChange={setdata1} />
			</FlexDiv>
			<FlexDiv>
				구매일자 <AddName value={data2} onChange={setdata2} />
			</FlexDiv>
			<FlexDiv>
				유통기한 <AddName value={data3} onChange={setdata3} />
			</FlexDiv>
			<FlexDiv>
				재고 <AddName value={data4} onChange={setdata4} />
			</FlexDiv>
			<SubmitDiv>등록하기</SubmitDiv>
		</div>
	);
};
