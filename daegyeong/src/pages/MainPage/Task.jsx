import React from 'react';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const TaskParentDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 230px;
	background-color: #eff3fd;

	& > h2 {
		padding-left: 24px;
	}
`;

const TaskItemBox = styled.div`
	justify-content: flex-start;
	padding: 8px 24px 24px 24px;
	white-space: nowrap;
	overflow-x: auto;
`;

const Task = () => {
	const TaskList = [
		{
			task: '배달음식 시키지 않기',
			hashTag: ['배달', '배달비', '배달줄이기'],
		},
		{
			task: '디저트 음식 먹지 않기',
			hashTag: ['군것질', '식비줄이기'],
		},
		{
			task: '남아있는 재료로 요리 만들기',
			hashTag: ['절약', '식비줄이기'],
		},
		{
			task: '오늘의 예산 설정하기',
			hashTag: ['절약', '식비줄이기'],
		},
		{
			task: '이번달 소비 내역 확인하기',
			hashTag: ['절약'],
		},
	];

	return (
		<TaskParentDiv>
			<h2>오늘의 태스크</h2>
			<TaskItemBox>
				{TaskList.map((ele, i) => {
					return <TaskItem props={ele} key={i} />;
				})}
			</TaskItemBox>
		</TaskParentDiv>
	);
};

export default Task;
