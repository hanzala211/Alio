import styled from 'styled-components';

export function ArticleButton({ text }) {
	return <StyledArticleButton>{text}</StyledArticleButton>;
}

const StyledArticleButton = styled.button`
	width: 100%;
	margin-top: 25px;
	padding: 15px;
	font-size: 16px;
	font-weight: 600;
	background-color: white;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	transition: 0.3s all linear;
	&:hover {
		color: white;
		background-color: black;
	}
`;
