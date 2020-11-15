import styled from 'styled-components'

export const SearchIcon = styled.i`
	padding-right: 1rem;
	color: var(--gray);
`

export const Search = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	border: 1.5px solid var(--gray);
	padding: 0 0.8rem;
	border-radius: 30px;
	width: 95%;
	margin: 0 auto;

	input {
		width: 100%;
		border: none;
		outline: none;
		color: var(--font-color);

		&:focus {
			${SearchIcon} {
				color: var(--font-color);
			}
		}
	}
`
