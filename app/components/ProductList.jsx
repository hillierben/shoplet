/* eslint-disable @next/next/no-img-element */
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"
import styles from '../styles/productList.module.css'

export default async function ProductList() {
  const supabase = createServerComponentClient({cookies})
  
  const { data: products } = await supabase.from('products')
    .select()

  return (
    <ul className={styles.list}>
      {products.map((product) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.container}>
            <img 
                className={styles.img} 
                src={product.image} 
                alt={product.item}
            />
            </div>
            <div className={styles.price}>
              <span>£
                <span className={styles.priceText}>{product.price}</span>
              </span>
            </div>
            <div className={styles.info}>
              <div>{product.item}</div>
              <div>{product.description}</div>
            </div>
          </li>
      ))}
    </ul>
  )
}
