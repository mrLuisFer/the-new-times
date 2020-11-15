import React, { useState } from 'react'
import { apiKey } from '../../utils'
import { useFetchingData } from '../../hooks/index'
import { Search, SearchIcon } from './PrincipalContentNews.elements'

export const PrincipalContentNews = React.memo(function PrincipalContentNews() {
	const [country, setCountry] = useState('us')
	const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
	const { apiData, loading } = useFetchingData(url)

	const news = apiData?.articles

	console.log(news)

	const handleCountry = (event) => {
		setCountry(event.target.value)
	}

	return (
		<>
			{loading || apiData === null ? (
				news === undefined ? (
					<p>Its undefined</p>
				) : (
					<p>Charging 7</p>
				)
			) : (
				<Search>
					<SearchIcon className='fas fa-search'></SearchIcon>
					<input
						type='text'
						name={country}
						value={country}
						placeholder='Insert you country code'
						onChange={handleCountry}
					/>
				</Search>
			)}
		</>
	)
})
