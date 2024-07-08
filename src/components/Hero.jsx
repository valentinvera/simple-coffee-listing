import { Link } from "react-router-dom"
import AllProducts from "./AllProducts"
import AvailableNow from "./AvailableNow"

const Hero = ({ showAll, setShowAll }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 lg:gap-1 xl:gap-4">
        <h1 className="text-[32px] font-semibold text-antique-white">Our Collection</h1>
        <p className="w-[84%] text-center text-base leading-5 text-dove-gray lg:w-[65%] xl:w-[44%]">
          Introducing our Coffee Collection, a selection of unique coffees from different roast
          types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
      </div>
      <div className="mb-6 flex flex-row gap-3 text-sm font-semibold">
        <Link
          to="/all-products"
          className={`rounded-[10px] px-3 py-2 ${showAll ? "bg-dove-gray text-antique-white" : "text-antique-white"}`}
          onClick={() => setShowAll(true)}
        >
          All Products
        </Link>

        <Link
          to="/available-now"
          className={`px-3 py-2 ${showAll ? "text-antique-white" : "rounded-[10px] bg-dove-gray text-antique-white"}`}
          onClick={() => setShowAll(false)}
        >
          Available Now
        </Link>
      </div>
      {showAll ? <AllProducts /> : <AvailableNow />}
    </>
  )
}

export default Hero
