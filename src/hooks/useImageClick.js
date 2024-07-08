import { useState, useEffect } from "react"

export const useImageClick = () => {
  const [clickedImages, setClickedImages] = useState(() => {
    const savedClickedImages = localStorage.getItem("clickedImages")
    return savedClickedImages ? JSON.parse(savedClickedImages) : {}
  })

  useEffect(() => {
    localStorage.setItem("clickedImages", JSON.stringify(clickedImages))
  }, [clickedImages])

  const handleImageClick = id => {
    setClickedImages(prevClickedImages => ({
      ...prevClickedImages,
      [id]: !prevClickedImages[id],
    }))
  }

  return { clickedImages, handleImageClick }
}
