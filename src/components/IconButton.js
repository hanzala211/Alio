import styled from 'styled-components';
export function IconButton({
	i,
	item,
	text = null,
	backgroundColor,
	width,
	borderRadius,
	marginTop = null,
	border,
	marginLeft,
}) {
	return (
		<>
			<StyledIconButton
				key={i}
				style={{
					backgroundColor: `${backgroundColor}`,
					width: `${width}`,
					borderRadius: `${borderRadius}`,
					marginTop: `${marginTop ? marginTop : ''}`,
					border: `${border}`,
				}}
				marginLeft={marginLeft}
			>
				{item} {text && <span>{text}</span>}
			</StyledIconButton>
		</>
	);
}
const StyledIconButton = styled.a`
	background-color: #f8fafb;
	font-size: 16px;
	padding: 10px;
	margin-right: 10px;
	cursor: pointer;
	border-radius: 50%;
	width: 27px;
	height: 27px;
	transition: 0.3s all ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: ${(props) =>
		props.marginLeft === 'marginLeft' ? '100px' : '0'};
	&:hover {
		background-color: white;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}
	span {
		margin-left: 10px;
	}
`;
