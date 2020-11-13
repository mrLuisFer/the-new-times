import React from 'react'
import { PrincipalGridNews, Line, ContentNews } from '../../components/index'

export const HomePage = () => {
	return (
		<div>
			<PrincipalGridNews />
			<Line lineWidth='45%' marginTop='2.5rem' primary />
			<ContentNews />
		</div>
	)
}
