import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import RecommendRecipeListItem from './RecommendRecipeItem';

const RecommendRecipeList = ({ posts }) => {
	return (
		<>
			<div>
				{posts.map(post => {
					return (
						<RecommendRecipeListItem title={post.title} content={post.content} tag={post.tag} />
					);
				})}
			</div>
		</>
	);
};

export default RecommendRecipeList;
