import React from "react"
import styles from "./card.module.css"
import Image from "next/image"
import cn from "classnames"
import * as Icons from "../../components/icons"

function Card({ creator, image, name, like, price, coin, tags, ...props }) {
  return (
    <div className={cn(styles.container, styles.containerSpecial)} {...props}>
      <div className={styles.cardHeader}>
        <span className="text-sm text-gray-600">Creator</span>
        <span className="font-bold">{creator}</span>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={"/" + image}
          alt="Vercel Logo"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          className="rounded-sm bg-none hover:scale-105 transition-all duration-300"
        />
      </div>
      <p className="font-bold text-lg"> {name}</p>

      <div className={styles.cardPrice}>
        <span className="text-sm font-medium text-gray-600">Current bid</span>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-semibold text-md">
            {coin == "Eth" ? <Icons.Eth /> : null}
            {coin == "Sol" ? <Icons.Solana /> : null}
            {price} {coin.toUpperCase()}
          </div>
          <span className="text-sm text-gray-400 ml-auto">~598$</span>
        </div>
      </div>

      <div className={styles.cardInfo}>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <span key={tag[0]} className="bg-blue-500 px-3 py-1.5 rounded-md text-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-2 ml-auto">
          <Icons.Heart />
          {like}
        </span>
      </div>
    </div>
  )
}

export default Card
