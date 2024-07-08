import Hero from "./Hero"

const MainSection = ({ showAll, setShowAll }) => {
  return (
    <section className="custom__section bg-img">
      <Hero showAll={showAll} setShowAll={setShowAll} />
    </section>
  )
}

export default MainSection
