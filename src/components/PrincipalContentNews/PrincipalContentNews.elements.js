import styled from 'styled-components'
import arrowIcon from '../../assets/arrow_icon.svg'

// using css inverted

export const PrincipalContentInput = styled.select`
	width: 6.5rem;
	text-align: center;
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 0.3rem 1rem;
	outline: none;
	color: var(--font-color);
	appearance: none;
	background-image: url(${arrowIcon});
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
	font-weight: 700;
	transition: var(--transition);
	height: 35px;

	&::-ms-expand {
		display: none;
	}

	:hover {
		border-color: #888;
	}

	&:focus {
		border-color: #aaa;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
		box-shadow: 0 0 0 3px -moz-mac-focusring;
		color: #222;
		outline: none;
	}

	@media screen and (min-width: 625px) {
		width: 170px;
		font-size: 1.4rem;
	}

	@media screen and (min-width: 990px) {
		width: 234px;
	}
`

export const PrincipalContentText = styled.label`
	color: var(--gray);
	font-weight: 700;
	transition: var(--transition);

	&:hover {
		color: var(--font-color);
	}

	@media screen and (min-width: 625px) {
		font-size: 1.4rem;
	}

	@media screen and (min-width: 1500px) {
		font-size: 1.6rem;
	}
`

export const PrincipalContentContainer = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-around;
	border-bottom: 1px solid #000000;
	padding-bottom: 2rem;
	margin-bottom: 1.5rem;

	@media screen and (min-width: 850px) {
		justify-content: space-evenly;
	}

	@media screen and (min-width: 1200px) {
		justify-content: space-between;
	}
`
