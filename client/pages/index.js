import React from "react"
import styles from "../styles/home.module.css"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="h-40 bg-gray-100" />

      <div className="flex-1">content</div>

      <Footer className="h-40 bg-gray-100" />
    </div>
  )
}

export default Home
