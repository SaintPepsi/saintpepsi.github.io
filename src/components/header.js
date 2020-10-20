import React from "react"
import { Link } from "gatsby"

export default function Header({ headerText, menuLinks }) {
  return (
    <div className="header">
      <h1>{headerText}</h1>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
