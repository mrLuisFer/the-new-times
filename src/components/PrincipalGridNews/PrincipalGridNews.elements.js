import styled from 'styled-components'

export const NewsContainer = styled.div`
	width: 100%;

	@media screen and (min-width: 500px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	@media screen and (min-width: 700px) {
		display: flex;
		align-content: center;
		justify-content: space-around;
		/* This is necesary, because the default is column */
		flex-direction: row;
		flex-wrap: wrap;
	}
`
export const NewsCard = styled.div`
	margin: ${(props) => props.pMargin || '10px'};
	border-radius: 10px;
	background-color: var(--grayish);
	border: 1px solid var(--gray);
	border-top: none;
	box-shadow: 2px 1px 9px rgba(0, 0, 0, 0.4);
	max-width: 800px;
	width: 100%;
	margin-bottom: 30px;
	transition: var(--transition);

	&:hover {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.55);
		background: #fff;
	}

	@media screen and (min-width: 600px) {
		width: 400px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 30px;
	}

	@media screen and (min-width: 800px) {
		width: 300px;
	}

	@media screen and (min-width: 1330px) {
		margin: 0 0.5rem;
		margin-bottom: 30px;
	}

	@media screen and (min-width: 1800px) {
		margin: 0 1rem;
		margin-bottom: 30px;
	}
`

export const NewsImg = styled.img`
	display: ${(props) => (props.noimg === ' ' ? 'none' : 'block')};
	border-radius: 10px 10px 0 0;
	width: 100%;
	height: 230px;
	transition: all 0.4s ease-in;

	@media screen and (min-width: 700px) {
		&:hover {
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
		}
	}
`
export const NewsTitle = styled.h1`
	font-size: 18px;
	margin-top: 1rem;
	color: var(--font-color);

	&:hover {
		cursor: pointer;
	}
`
export const NewsWrapper = styled.div`
	padding: 15px;
	padding-top: 10px;
	margin: ${(props) => props.pMargin || '0'};
`
export const NewsContent = styled.p`
	font-size: 14px;
	line-height: 1.5;
	text-align: justify;
	color: var(--font-color);
	/* height: 150px; */
	margin-top: ${(props) => props.mTop || '0'};
`
export const NewsFlex = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: ${(props) => props.justify || 'flex-start'};
	margin: ${(props) => props.pMargin || '0'};
	margin-top: ${(props) => props.mTop || '0'};
`

export const NewsPublishedAt = styled.p`
	font-size: 9px;
	color: var(--gray);
	font-weight: 300;
	margin: ${(props) => props.pMargin || '0'};

	&:hover {
		transition: 0.4s ease;
		color: var(--darkBlueGrey);
		font-weight: 700;
		cursor: default;
	}
`

export const NewsAuthor = styled.p`
	font-size: 10px;
	font-weight: 300;
	color: var(--gray);
	margin: ${(props) => props.pMargin || '0'};

	&:hover {
		transition: 0.4s ease;
		color: var(--darkBlueGrey);
		font-weight: 700;
		cursor: default;
	}
`
