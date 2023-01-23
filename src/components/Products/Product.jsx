import React from "react"
import "./product.css"
import { ProductCart } from "./ProductCart"
import { products } from '../../data/products'

export const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {products.map((item) => (
            <ProductCart
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  )
}
