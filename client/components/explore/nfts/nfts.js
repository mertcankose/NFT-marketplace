import React from "react"
import Card from "../../card/card"
import styles from "./nfts.module.css"
import Link from "next/link"
import { NFTSLIST } from "../../../constants/index"
import slug from "slug"

function NFTS() {
  return (
    <div className={styles.container}>
      {NFTSLIST.map((nft) => (
        <Link key={nft.id} href="/nft/[slug]" as={`/nft/${slug(nft.creator)}-${nft.name}`}>
          <Card creator={nft.creator} image={nft.image} name={nft.name} like={nft.like} price={nft.price} coin={nft.coin} tags={nft.tags} />
        </Link>
      ))}
    </div>
  )
}

export default NFTS
