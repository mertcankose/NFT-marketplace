import * as React from "react"

function SvgHeart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      className="heart_svg__css-evgbav"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.793 5.707a3.95 3.95 0 00-5.585 0L12 7.914 9.793 5.707a3.95 3.95 0 00-5.585 5.586L12 19.086l7.792-7.793a3.95 3.95 0 000-5.586zm-7-1.414a5.95 5.95 0 018.415 8.414L12 21.914l-9.208-9.207a5.95 5.95 0 018.415-8.414l.793.793.792-.793z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgHeart
