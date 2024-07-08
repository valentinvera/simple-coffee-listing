import { useState, useEffect } from "react"

export const useFetchProducts = (url, processData, singleItemName) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const result = await response.json()
        if (singleItemName) {
          const selectedItem = result.find(item => item.name === singleItemName)
          setData(selectedItem ? [selectedItem] : [])
        } else {
          const processedData = processData ? processData(result) : result
          setData(processedData)
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, processData, singleItemName])

  return { data, loading, error }
}
