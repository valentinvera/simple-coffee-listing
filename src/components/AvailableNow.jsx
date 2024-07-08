import { useFetchProducts } from "../hooks/useFetchProducts"
import { useImageClick } from "../hooks/useImageClick"
import ProductCard from "./ProductCard"

const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

const AvailableNow = ({ showAll, setShowAll }) => {
  const filterAvailableCoffees = products => products.filter(product => product.available)
  const { data, loading, error } = useFetchProducts(API_URL, filterAvailableCoffees)
  const { clickedImages, handleImageClick } = useImageClick()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-8">
        {data.map(coffee => (
          <ProductCard
            key={coffee.id}
            coffee={coffee}
            clickedImages={clickedImages}
            handleImageClick={handleImageClick}
            linkPrefix="available-now"
          />
        ))}
      </div>
    </>
  )
}

export default AvailableNow
