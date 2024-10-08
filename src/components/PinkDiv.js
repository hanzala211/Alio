import styled from 'styled-components';
import { Button } from './Buttons';
export function PinkDiv({
	img,
	headingText,
	icon1,
	icon2,
	dateText,
	height,
	changeHeight,
	backgroundColor,
}) {
	return (
		<StyledDiv changeHeight={changeHeight} backgroundColor={backgroundColor}>
			<div className="textDiv">
				<img src={img} alt="_" />
				<div className="iconDiv">
					<h4>{headingText}</h4>
					<div className="dateDiv">
						{icon1 && <span>{icon1}</span>}
						{dateText && <p style={{ textAlign: 'center' }}>{dateText}</p>}
					</div>
				</div>
			</div>
			<div>
				<Button
					text="Free"
					icon={icon2}
					width="100px"
					border="1px solid black"
					backgroundColor="transparent"
				/>
			</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1.5em;
	box-sizing: border-box;
	border-radius: 40px;
	background-color: ${(props) => props.backgroundColor};
	img {
		width: 70px;
		height: 70px;
		object-fit: cover;
		border-radius: 15px;
	}
	.textDiv {
		display: flex;
		gap: 10px;
	}
	.dateDiv {
		display: flex;
		gap: 10px;
	}
	.iconDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
	}
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 20px;
		.textDiv {
			flex-direction: column;
			align-items: center;
		}
		.iconDiv {
			align-items: center;
		}
		button {
			width: 80vw;
		}
	}
`;
