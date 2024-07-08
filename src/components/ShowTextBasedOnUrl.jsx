import { Link, useLocation } from "react-router-dom"

const ShowTextBasedOnUrl = ({ coffee }) => {
  const location = useLocation()
  const pathname = location.pathname

  const getLinkDetails = () => {
    if (pathname === "/all-products" || pathname === "/available-now") {
      return {
        linkTo: pathname === "/all-products" ? "/available-now" : "/all-products",
        linkText:
          pathname === "/all-products" ? "See all products" : "See more products available now",
      }
    }

    const decodedCoffeeName = decodeURIComponent(coffee?.name || "")
    const isProductPage =
      pathname === `/available-now/product/${encodeURIComponent(decodedCoffeeName)}` ||
      pathname === `/all-products/product/${encodeURIComponent(decodedCoffeeName)}`

    if (isProductPage) {
      return {
        linkTo: pathname.includes("available-now") ? "/available-now" : "/all-products",
        linkText: pathname.includes("available-now")
          ? "See more products available now"
          : "See all products",
      }
    }

    return null
  }

  const linkDetails = getLinkDetails()

  if (!linkDetails) {
    return null
  }

  return (
    <Link
      to={linkDetails.linkTo}
      className="rounded-[10px] bg-dove-gray px-3 py-2 text-antique-white"
    >
      {linkDetails.linkText}
    </Link>
  )
}

export default ShowTextBasedOnUrl
