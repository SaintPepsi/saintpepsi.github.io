import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Navigation headerText="Home" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Footer />
    </div>
  )
}
