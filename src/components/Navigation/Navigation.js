import React from 'react'
import { NavigationMenu } from './Navigation.elements'
import { Link } from 'react-router-dom'

export const Navigation = () => {
	return (
		<>
			<NavigationMenu>
				<Link to='/contact'>Contact Us</Link>
				<Link to='/about'>About</Link>
				<Link to='/repo'>Repository</Link>
			</NavigationMenu>
		</>
	)
}
