import PropTypes from "prop-types"
import styles from "./button.module.css"
import cn from "classnames"

function Button({ children, appearance, handleClick, ...props }) {
  return (
    <button onClick={handleClick} className={cn(styles.base, styles?.[appearance])} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.string,
  handleClick: PropTypes.func
  //backgroundColor: PropTypes.string,
  //size: PropTypes.oneOf(["sm", "md", "lg"]),
}

/*
Component.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  )
}

[1,2,"a","b"] -> 'bu tipteki bir arrayi kabul edebilir' demek.
*/

export default Button
