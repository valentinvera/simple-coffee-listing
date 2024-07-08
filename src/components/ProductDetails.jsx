// import { useParams } from "react-router-dom"
// import ShowTextBasedOnUrl from "./ShowTextBasedOnUrl"
// import { useFetchProducts } from "../hooks/useFetchProducts"
// import { useImageClick } from "../hooks/useImageClick"
// import ProductCard from "./ProductCard"

// const API_URL =
//   "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

// const ProductDetails = ({ setShowAll }) => {
//   const { name } = useParams()
//   const { data: coffeeData, loading, error } = useFetchProducts(API_URL, undefined, name)
//   const { clickedImages, handleImageClick } = useImageClick()

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error: {error.message}</p>
//   if (!coffeeData) return <p>No coffee found</p>

//   return (
//     <section className="custom__section">
//       <ProductCard
//         key={coffee.id}
//         coffee={coffee}
//         clickedImages={clickedImages}
//         handleImageClick={handleImageClick}
//       />
//       <ShowTextBasedOnUrl coffee={coffee} />
//     </section>
//   )
// }

// export default ProductDetails

import { useParams } from "react-router-dom"
import ShowTextBasedOnUrl from "./ShowTextBasedOnUrl"
import { useFetchProducts } from "../hooks/useFetchProducts"
import { useImageClick } from "../hooks/useImageClick"
import ProductCard from "./ProductCard"

const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

const ProductDetails = ({ setShowAll }) => {
  const { name } = useParams()
  const { data, loading, error } = useFetchProducts(API_URL, undefined, name)
  const { clickedImages, handleImageClick } = useImageClick()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data.length) return <p>No coffee found</p>

  const coffee = data[0]

  return (
    <section className="custom__section">
      <ProductCard
        key={coffee.id}
        coffee={coffee}
        clickedImages={clickedImages}
        handleImageClick={handleImageClick}
      />
      <ShowTextBasedOnUrl coffee={coffee} />
    </section>
  )
}

export default ProductDetails
