import { Link } from "react-router-dom"
import star from "../assets/star.svg"
import starFill from "../assets/star_fill.svg"

const ProductCard = ({ coffee, clickedImages, handleImageClick, linkPrefix }) => {
  return (
    <article key={coffee.id} className="max-w-[260px]">
      {coffee.popular !== false && (
        <span className="absolute m-2 rounded-full bg-sandy-brown px-[.75rem] text-[10px] font-bold leading-5 text-rich-black">
          Popular
        </span>
      )}
      <Link to={`/${linkPrefix}/product/${coffee.name}`}>
        <figure>
          <img src={coffee.image} className="rounded-xl" alt={coffee.name} />
        </figure>
      </Link>
      <div className="mb-2 mt-3 flex justify-between">
        <p className="font-semibold text-antique-white">{coffee.name}</p>
        <p className="rounded-[4px] bg-pale-aqua px-2 py-1 text-center text-xs font-semibold text-rich-black">
          {coffee.price}
        </p>
      </div>
      <div className="flex gap-1">
        <figure>
          <img
            src={clickedImages[coffee.id] ? starFill : star}
            onClick={() => handleImageClick(coffee.id)}
            alt={clickedImages[coffee.id] ? "star filled" : "star empty"}
            className="cursor-pointer"
          />
        </figure>
        <p className="flex gap-1 text-antique-white">
          {coffee.rating !== null && (
            <span className="font-semibold">
              {Number.isInteger(coffee.rating) ? coffee.rating.toFixed(1) : coffee.rating}
            </span>
          )}
          {coffee.votes !== 0 ? (
            <span className="font-semibold text-dove-gray">({coffee.votes} votes)</span>
          ) : (
            <span className="font-bold text-dove-gray">No ratings</span>
          )}

          {coffee.available !== true && (
            <span className="ml-[3.25rem] text-[14px] font-semibold text-coral-pink">Sold out</span>
          )}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
