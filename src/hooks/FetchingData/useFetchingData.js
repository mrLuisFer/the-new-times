import { useEffect, useState } from "react"

export const useFetchingData = (pageSize = 30) => {
  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  // TODO: Check if we need to use more times
  const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=${pageSize}`
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data))

    setLoading(false)
  }, [url, loading])

  return { apiData, setApiData, loading }
}
