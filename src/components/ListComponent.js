import styled from 'styled-components';

export function ListComponent({ text, icon }) {
	return (
		<StyledList>
			<p>{text}</p>
			{icon}
		</StyledList>
	);
}

const StyledList = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px;
	box-sizing: border-box;
	width: 100%;
	background-color: #fff;
	cursor: pointer;
	border-radius: 20px;
	transition: 0.3s all linear;
	p {
		font-size: 15px;
		font-weight: 600;
	}
	&:hover {
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}
`;
