import React from "react"
import styles from "./footer.module.css"
import cn from "classnames"

function Footer({ className, ...props }) {
  return (
    <div className={(cn(styles.container), className)} {...props}>
      Footer
    </div>
  )
}

export default Footer
