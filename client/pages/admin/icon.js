import React from "react"
import styles from "../../styles/icon.module.css"
import * as Icons from "../../components/icons"

function Icon() {
  return (
    <div className={styles.container}>
      <h1>Icons Page</h1>
      <Icons.Close />
      <Icons.Profile />
    </div>
  )
}

export default Icon
