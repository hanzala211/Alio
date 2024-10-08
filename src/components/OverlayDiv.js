import styled from 'styled-components';
import { IconButton } from './IconButton';

export function OverlayDiv({
	text,
	date,
	img,
	flexDirection,
	icon,
	buttonText,
	marginTop = null,
	background,
	height,
	headingMargin,
	alignItems,
	width,
	backgroundColor,
	border,
	paragraphWidth,
	color,
	buttonTop,
	headingFont,
	iconMargin,
	headingLeft,
	fontColor,
	buttonIcon,
	buttonLeft,
	changeHeight,
}) {
	return (
		<StyledOverlay
			style={{
				flexDirection: `${flexDirection}`,
				marginTop: `${marginTop}`,
				background: `${background}`,
				alignItems: `${alignItems}`,
				color: `${color}`,
			}}
			marginLeft={buttonLeft}
			width={paragraphWidth}
			height={height}
			changeHeight={changeHeight}
		>
			{date && (
				<div className="custom">
					<span>{date}</span> August
				</div>
			)}
			{img && <img src={img} alt="_" />}
			<div style={{ textAlign: 'left', display: 'grid' }}>
				<h1
					style={{
						marginTop: `${headingMargin}`,
						fontSize: `${headingFont}`,
						marginLeft: `${headingLeft}`,
					}}
				>
					Name of your event
				</h1>
				<div style={{ display: 'flex', alignItems: 'flex-end' }}>
					{icon && <i style={{ margin: `${iconMargin}` }}>{icon}</i>}
					{text && <p style={{ color: `${fontColor}` }}>{text}</p>}
				</div>
			</div>
			<div>
				<IconButton
					item={buttonIcon}
					backgroundColor={backgroundColor}
					text={buttonText}
					width={width}
					borderRadius="13px"
					marginTop={buttonTop}
					border={border}
					marginLeft={buttonLeft}
				/>
			</div>
		</StyledOverlay>
	);
}

const StyledOverlay = styled.div`
	display: flex;
	width: 100%;
	height: ${(props) => props.height};
	background-size: cover;
	margin-bottom: 35px;
	border-radius: 35px;
	position: relative;
	padding-left: 23px;
	box-sizing: border-box;
	.custom {
		background-color: #783ff3;
		width: 58px;
		height: 65px;
		position: absolute;
		right: 20px;
		top: 20px;
		padding: 10px 11px;
		border-radius: 20px;
	}
	.custom > span {
		font-size: 32px;
		font-weight: 700;
	}
	div > h1 {
		font-weight: 600;
	}
	div > p {
		margin-top: 7px;
		line-height: 1.4;
		text-align: left;
		width: ${(props) => props.width};
	}
	img {
		object-fit: cover;
		border-radius: 16px;
		width: 70px;
		height: 70px;
	}
	@media (max-width: 768px) {
		height: ${(props) => props.changeHeight};
		p {
			font-size: 15px;
			max-width: 90%;
		}
		div > a {
			margin-left: ${(props) =>
				props.marginLeft === 'marginLeft' ? '80px' : '0'};
		}
	}

	@media (max-width: 480px) {
		div > p {
			line-height: 1.5;
			width: 100%;
		}
		div > a {
			margin-left: ${(props) =>
				props.marginLeft === 'marginLeft' ? '0px' : '0'};
		}
	}
`;
