import styled from 'styled-components'

export const FooterContainer = styled.div`
	padding: 2rem 1rem;
	padding-bottom: 1.5rem;
	position: relative;
	bottom: 0;
	left: 0;
	background: var(--font-color);
	width: 100%;
	height: auto;
	color: var(--lightBlueGrey);
	border-radius: 12px 12px 0 0;
`

export const FooterLinkContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 760px) {
		flex-direction: row;
		justify-content: space-around;
	}

	@media screen and (min-width: 1400px) {
		justify-content: center;
		gap: 3rem;
	}
`

export const FooterLink = styled.a`
	color: var(--lightBlueGrey);
	display: inline-flex;
	align-items: center;
	padding-right: 0.8rem;
	margin: 1rem 0;
	text-decoration: none;
	cursor: pointer;

	span {
		margin-right: 0.7rem;
		font-weight: 700;
		transition: var(--transition);

		&:hover {
			text-decoration: underline;
		}
	}

	i {
		font-size: 1.6rem;
		height: 100%;
		width: 100%;
		transition: var(--transition);
		display: inline-block;
		position: relative;
	}

	/* Facebook */
	&:nth-child(1) {
		i {
			color: #3b5998;
		}
	}
	/* Twitter */
	&:nth-child(2) {
		i {
			color: #00acee;
		}
	}

	/* Github  */
	&:nth-child(3) {
		i {
			color: #efefef;
		}
	}

	/* Linkedin */
	&:nth-child(4) {
		i {
			color: #0e76a8;
		}
	}

	&:hover {
		span,
		i {
			color: var(--grayish);
		}
	}
`
