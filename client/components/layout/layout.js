import Head from "next/head"
import Header from "../header/header"
import Footer from "../footer/footer"
//import styles from "./layout.module.css"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>NFT </title>
        <meta name="description" content="Build by Mertcan" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
      </Head>

      <Header className="h-32 bg-gray-100" />
      <main className="flex-1">{children}</main>
      <Footer className="h-40 bg-gray-100" />
    </div>
  )
}

export default Layout
