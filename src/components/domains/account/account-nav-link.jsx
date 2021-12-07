import { Link } from "gatsby"
import React from "react"

const AccountNavLink = ({ svg, label, to }) => {
  return (
    <Link
      to={to}
      className="group hover:bg-ui-light rounded-lg text-left w-56 px-4 py-2 inline-flex items-center mb-3 last:mb-0 text-ui-dark"
      activeClassName="bg-ui-light text-gray-700"
    >
      <img src={svg} alt="" className="h-6 w-auto mr-2 hidden lg:block" />
      <span className={"group-hover:text-gray-700"}>{label}</span>
    </Link>
  )
}

export default AccountNavLink
