import styled from 'styled-components'

export const Content = styled.div`
	padding: 3rem 0;
`
export const ContentTitle = styled.h3`
	font-size: 30px;
	color: var(--font-color);
	margin-bottom: 1rem;
	font-weight: 700;
`

export const CardNews = styled.div`
	width: 100%;
	color: var(--font-color);
	font-size: 0.9rem;
	margin: 0.3rem 0;
	margin-bottom: 2.5rem;
	box-shadow: 0.5px 0.5px 5px hsla(0, 0%, 0%, 0.206);
	border-radius: 10px;
	display: flex;
	height: 475px;
	flex-wrap: wrap;
	text-align: justify;
	padding-top: 1rem;
`
export const CardImg = styled.img`
	width: 100%;
	height: 100%;
	max-height: 285px;
	border-radius: 0 0 10px 10px;
`
export const CardTitle = styled.h3`
	font-size: 1.2rem;
	margin-bottom: 0.8rem;
`
export const CardContent = styled.p`
	line-height: 1.45;
	margin-bottom: 0.5rem;
	letter-spacing: 0.3px;
`
export const CardAuthorDateContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.2rem;
`

export const CardAuthorOrDate = styled.p`
	color: var(--gray);
	letter-spacing: 0px;
	opacity: 0.6;
`
export const CardTextContainer = styled.div`
	padding: 0 0.8rem;
`

// First Media query: 552px
