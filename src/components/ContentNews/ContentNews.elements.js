import styled from 'styled-components'

export const Content = styled.div`
	padding: 3rem 0;
`
export const ContentTitle = styled.h3`
	font-size: 1.3rem;
	margin-bottom: 1.3rem;
	font-weight: 700;

	a {
		font-size: 1.2rem;
		color: var(--font-color);
		opacity: 0.8;
		text-decoration: none;
		user-select: none;
		transition: 0.2s;

		&:hover {
			text-decoration: underline;
			opacity: 1;
		}
	}
`
export const ContentTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;

	@media screen and (min-width: 800px) {
		gap: 30px;
	}
`
