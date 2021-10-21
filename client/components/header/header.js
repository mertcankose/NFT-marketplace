import React from "react"
import styles from "./header.module.css"
import cn from "classnames"

function Header({ className, ...props }) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      Header
    </div>
  )
}

export default Header
