import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { FaXmark, FaImage } from 'react-icons/fa6';
import { axiosGetQuery, axiosPost } from 'utils/AxiosUtils';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
	width: 70rem;
	border: 0.1px solid grey;
	background: white;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 5%;
	top: 5%;
	padding: 20px 20px;
`;
const ModalTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 24px;
`;
const ModalIntro = styled.div``;
const ImgBtnDiv = styled.div`
	border-radius: 10px;
	width: 40%;
	height: 20rem;
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
	height: 20rem;
	border-radius: 10px;
`;
const TextAreaDiv = styled.div`
	margin: 0.5rem 0;
	display: flex;
	gap: 1rem;
`;
const Register = styled.div`
	width: 65%;
`;

const Choice = styled.div`
	width: 30%;
	height: 18rem;
	background-color: #eff3fd;
	border-radius: 10px;
	padding: 1rem;
`;
const InputFile = styled.input`
	display: none;
`;
const TextWrite = styled.textarea`
	border-radius: 10px;
	width: 50%;
	height: 18rem;
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
	width: 95%;
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
const CheckIn = styled.div`
	border-radius: 10px;
	padding: 0.5rem;
	background-color: #92abf3;
`;
const TagName = styled.div`
	background-color: #92abf3;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 0.7rem;
`;
const TagDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;
const TypeDiv = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;
const Select = styled.select`
	border : 1px solid black
	background-color: transparent;
	border-radius: 5px;
`;
const TitleInput = styled.input`
	padding: 1rem;
	border-radius: 10px;
	width: 20rem;
	margin-top: 1rem;
`;
const RecipeRegister = ({ show, onCloseModal }) => {
	const [Ingredient, setIngredient] = useState([]);
	const [CategoryNum, setCategoryNum] = useState('' || '1');
	const [isLoading, setLoading] = useState(false);
	const [MenuIngre, setMenuIngre] = useState([]);
	const [Checked, setChecked] = useState(false);
	const [CheckList, setCheckList] = useState([]);
	const [CheckId, setCheckId] = useState([]);
	const [typeData, SetTypeData] = useState('');
	const [timeData, SettimeData] = useState('');
	const [personnelData, SetpersonnelData] = useState('');
	const [Page, setPage] = useState(false);
	let type = ['하', '중', '상'];
	let time = ['10분', '20분', '30분'];
	let personnel = ['1인분', '2인분', '3인분'];
	const Type1 = () => {
		const result = [];

		type.forEach(e => {
			result.push(<option value={e}>{e}</option>);
		});
		return result;
	};
	const Type2 = () => {
		const result = [];

		time.forEach(e => {
			result.push(<option value={e}>{e}</option>);
		});
		return result;
	};
	const Type3 = () => {
		const result = [];

		personnel.forEach(e => {
			result.push(<option value={e}>{e}</option>);
		});
		return result;
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
	const HandlePage = () => {
		setPage(true);
	};
	const handleType1 = e => {
		SetTypeData(e.target.value);
	};
	const handleType2 = e => {
		SettimeData(e.target.value);
	};
	const handleType3 = e => {
		SetpersonnelData(e.target.value);
	};
	useEffect(() => {
		RecipeGet();
	}, []);

	useEffect(() => {
		CategoryMenu();
	}, [CategoryMenu]);
	useEffect(() => {}, [setCheckList]);
	return (
		<Container>
			<ModalTitle>
				<Title>Welcome !</Title>
				<FaXmark onClick={onCloseModal} />
			</ModalTitle>
			{!Page ? (
				<>
					<ModalIntro>
						<h2>레시피를 입력해보세요</h2>
						<span>나만의 간편 레시피를 공유해보세요:)</span>
					</ModalIntro>
					<TypeDiv>
						난이도 :
						<Select value={typeData} onChange={handleType1}>
							{Type1()}
						</Select>
						시간 :
						<Select value={timeData} onChange={handleType2}>
							{Type2()}
						</Select>
						인분 :
						<Select value={personnelData} onChange={handleType3}>
							{Type3()}
						</Select>
					</TypeDiv>
					<TextAreaDiv>
						<Register>
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
						</Register>
						<Choice>
							<h1>선택한 식재료</h1>
							<TagDiv>
								{CheckList.map(e => {
									return <TagName>{e}</TagName>;
								})}
							</TagDiv>
						</Choice>
					</TextAreaDiv>
					<SubmitDiv onClick={HandlePage}>선택하기</SubmitDiv>
				</>
			) : (
				<RecipeRegister2
					props={CheckId}
					level={typeData}
					time={timeData}
					personnel={personnelData}
				/>
			)}
		</Container>
	);
};

export default RecipeRegister;
//!CheckList.includes(e.name)
const RecipeRegister2 = ({ CheckId, level, time, personnel }) => {
	const navigate = useNavigate();
	const [WriteData, setData] = useInput('');
	const [ImgSrc, setImgSrc] = useState('');
	const [Title, setTitle] = useInput('');
	const ref = useRef();

	const HandleUpload = useCallback(() => {
		ref.current.click();
	}, []);
	const onUploadImg = useCallback(async e => {
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
	const PostRegister = async () => {
		const res = await axiosPost('/recipes', {
			title: Title,
			content: WriteData,
			difficulty: level,
			cooking_time: time,
			serving: personnel,
			integredient_id_list: CheckId,
		});
		if (res.status === 200) {
			alert('로그인 성공 !');
			return navigate('/');
		}
	};
	return (
		<div>
			<ModalIntro>
				<h2>레시피를 입력해보세요</h2>
				<span>나만의 간편 레시피를 공유해보세요:)</span>
			</ModalIntro>
			<div>
				<TitleInput value={Title} onChange={setTitle} placeholder="레시피 제목을 입력해주세요" />
			</div>
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
			<SubmitDiv onClick={PostRegister}>등록하기</SubmitDiv>
		</div>
	);
};
