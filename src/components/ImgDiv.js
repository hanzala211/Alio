import styled from 'styled-components';
export function ImgDiv(props) {
	return (
		<StyledDiv>
			<img src={props.img} alt="User" />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	padding: 7px;
	display: flex;
	align-items: center;
	border-radius: 50%;
	border: 2px solid #dee2e5;
	width: 100px;
	margin-top: 46px;
`;
