import { useEffect, useState } from 'react'

export const useFetchingData = (url) => {
	// Its the call to the apis
	const [apiData, setApiData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(url)
			.then((res) => res.json())
			.then((data) => setApiData(data))

		setLoading(false)
	}, [url, loading])

	return { apiData, setApiData, loading }
}
