import React from 'react'
import {
	FooterContainer,
	FooterLink,
	FooterLinkContainer,
} from './Footer.elements'

export const Footer = () => {
	return (
		<FooterContainer>
			<h2>Social Media: </h2>
			<FooterLinkContainer>
				<FooterLink>
					<span>Facebook: </span>
					<i className='fab fa-facebook'></i>
				</FooterLink>
				<FooterLink href=''>
					<span>Twitter: </span>
					<i className='fab fa-twitter'></i>
				</FooterLink>
				<FooterLink href=''>
					<span>Github: </span>
					<i className='fab fa-github'></i>
				</FooterLink>
				<FooterLink href=''>
					<span>LinkedIn: </span>
					<i className='fab fa-linkedin'></i>
				</FooterLink>
			</FooterLinkContainer>
		</FooterContainer>
	)
}
