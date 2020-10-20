import React from "react"
import Footer from "./footer"

export default function Page(props) {
  return (
    <div className="page">
      {props.children}
      <Footer />
    </div>
  )
}
