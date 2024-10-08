import styled from 'styled-components';

export function Button({ text, icon, key, width, border, backgroundColor }) {
	return (
		<>
			<StyledButton
				style={{
					border: `${border}`,
					backgroundColor: `${backgroundColor}`,
				}}
				key={key && key}
				width={width}
				$backgroundColor={text === 'Resume'}
			>
				{icon} <span>{text}</span>
			</StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	padding: 15px 18px;
	width: ${(props) => props.width};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	gap: 10px;
	background-color: ${(props) => (props.$backgroundColor ? '#783FF3' : '#fff')};
	color: ${(props) => (props.$backgroundColor ? 'white' : '#070707')};
	border: none;
	border-radius: 15px;
	cursor: pointer;
	transition: 0.3s all ease-in-out;
	&:hover {
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}
`;
