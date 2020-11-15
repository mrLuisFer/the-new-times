import React from 'react'
import { NavSection, NavTitle } from './NavBar.elements.js'
import { Navigation, Line } from '../index'

export const NavBar = () => {
	return (
		<>
			<NavSection>
				<i className='fas fa-bars'></i>
				<NavTitle>THE NEW TIMES</NavTitle>
				<Navigation />
			</NavSection>
			<Line primary marginTop='2.5rem' />
		</>
	)
}
