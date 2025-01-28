import React from "react";
import { products } from "../../data/productData";
import ProductCard from "../shared/Products/ProductCard";

export default function Products() {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-xl font-semibold md:text-3xl">Featured Products</h5>

      <div className="mt-5 grid grid-cols-2 gap-5 md:mt-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}
