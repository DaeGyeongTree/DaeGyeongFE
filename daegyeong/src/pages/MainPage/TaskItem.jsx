import React from 'react';
import styled from 'styled-components';

const TaskItemDiv = styled.div`
	display: inline-block;
	background-color: white;
	border: 1px solid #d2d2d2;
	border-radius: 12px;
	width: 320px;
	height: 194px;
	margin-right: 24px;

	& h3 {
		font-size: 24px;
		text-align: center;
		margin: 0 0 16px 0;
	}

	& p {
		text-align: center;
		color: #bdbdbd;
	}
`;

const TaskItemElement = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
`;

const TaskItem = ({ props }) => {
	return (
		<TaskItemDiv>
			<TaskItemElement>
				<h3>{props.task}</h3>
				<p>
					{props.hashTag.map(ele => {
						return `#${ele}`;
					})}
				</p>
			</TaskItemElement>
		</TaskItemDiv>
	);
};

export default TaskItem;
