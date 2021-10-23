import React, { useEffect } from "react"
import Router from "next/router"

const Nft = () => {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == "/nft") {
      Router.push("/explore")
    }
  })

  return <div></div>
}

export default Nft
