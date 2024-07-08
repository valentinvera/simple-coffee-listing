import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import MainSection from "./components/MainSection"
import ProductDetails from "./components/ProductDetails"

function App() {
  const [showAll, setShowAll] = useState(true)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainSection showAll={showAll} setShowAll={setShowAll} />} />
        <Route
          path="all-products"
          element={<MainSection showAll={showAll} setShowAll={setShowAll} />}
        />
        <Route
          path="all-products/product/:name"
          element={<ProductDetails setShowAll={setShowAll} />}
        />
        <Route
          path="available-now"
          element={<MainSection showAll={showAll} setShowAll={setShowAll} />}
        />
        <Route
          path="available-now/product/:name"
          element={<ProductDetails setShowAll={setShowAll} />}
        />
      </Routes>
    </>
  )
}

export default App
