import styled from 'styled-components';

export const WrapperDiv = styled.div`
	display: ${(props) => (props.display ? props.display : 'flex')};
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin: 0 auto;
	max-width: 480px;
	align-items: ${(props) => (props.flexStart ? props.flexStart : '')};
	h3 {
		text-align: left;
	}
	@media (max-width: 480px) {
		h3:nth-child(1) {
			width: 100%;
			text-align: center;
		}
	}
`;
