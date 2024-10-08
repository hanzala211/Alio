import styled from 'styled-components';

export function Card({
	headingText,
	mainText,
	transparentText,
	commonText,
	icon,
	dateText,
	backgroundImage,
	anchorText,
	backgroundColor,
	gridRow,
	gridColumn,
	secondText,
	color,
	width,
}) {
	return (
		<StyledCard
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			gridRow={gridRow}
			gridColumn={gridColumn}
			style={{
				color: `${color}`,
				width: `${width}`,
			}}
		>
			{icon && <div>{icon}</div>}
			{headingText && <h1>{headingText}</h1>}
			{secondText && <h2>{secondText}</h2>}
			{mainText && <h3>{mainText}</h3>}
			{commonText && <p>{commonText}</p>}
			{transparentText && <p className="transparent">{transparentText}</p>}
			{dateText && <p className="dateText transparent">{dateText}</p>}
			{anchorText && (
				<a style={{ color: `${color}` }} className="anchorText" href="_">
					{anchorText}
				</a>
			)}
		</StyledCard>
	);
}
const StyledCard = styled.div`
	background-image: url(${(props) =>
		props.backgroundImage ? props.backgroundImage : ''});
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'white'};
	grid-row: ${(props) => (props.gridRow ? props.gridRow : '')};
	grid-column: ${(props) => (props.gridColumn ? props.gridColumn : '')};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	line-height: 1.3;
	text-align: left;
	padding: 25px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 100% 0;
	border-radius: 34px;
	width: 290px;
	box-sizing: border-box;
	.transparent {
		color: #070707;
		margin-top: 8px;
	}
	h1 {
		font-size: 55px;
		margin-top: 5px;
	}
	h2 {
		font-size: 25px;
	}
	h3 {
		font-size: 17px;
	}
	.dateText {
		margin-top: 45px;
	}
	.anchorText {
		margin-top: 43px;
		color: black;
		font-weight: 700;
		font-size: 16px;
	}
	@media (max-width: 630px) {
		width: 100%;
		grid-column: auto;
		grid-row: auto;
	}
`;
