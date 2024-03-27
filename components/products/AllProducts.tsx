import { sanityClient } from "@/app/lib/sanity";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
async function getProducts() {
	const query = `*[_type=='product']{
        'slug':slug.current,
        "image":images[0].asset._ref,
          price, 
          description,
          "category":category->name,
          name,
          "id": _id
      }`;
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function AllProducts() {
	const products: Product[] = await getProducts();

	return (
		<div className="px-4 md:px-20">
			<div className="flex items-center justify-center">
				<h2 className="text-2xl font-semibold">All Products</h2>
			</div>
			<div className="py-10 flex flex-wrap justify-start gap-4">
				{products.map((product: Product) => (
					<ProductCard
						key={product.id}
						name={product.name}
						price={product.price}
						image={product.image}
						slug={product.slug}
						category={product.category}
					/>
				))}
			</div>
		</div>
	);
}
