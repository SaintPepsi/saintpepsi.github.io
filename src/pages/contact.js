import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Navigation headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}
