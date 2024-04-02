import { sanityClient } from "@/app/lib/sanity";
import React from "react";
import ProductCard from "../products/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

async function getNewest() {
	const query = `*[_type=='product'] | order(_createdAt desc)[0...5]
	{
	  	'slug':slug.current,
		"mainImage":mainImage.asset._ref,
		price, 
		description,
		"category":category->name,
		name,
	"id": _id,
	price_id
	}`;
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function Newest() {
	const products: Product[] = await getNewest();

	return (
		<div className="px-4 md:px-20">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">Our Newest Products</h2>
				<Link href="/all" className="flex gap-x-1 text-primary">
					See all <ArrowRight className="hidden md:block" />
				</Link>
			</div>
			<div className="py-10 flex flex-wrap justify-center md:justify-start gap-4">
				{products.map((product: Product) => (
					<ProductCard
						key={product.id}
						name={product.name}
						price={product.price}
						mainImage={product.mainImage}
						slug={product.slug}
						category={product.category}
						description={product.description}
						price_id={product.price_id}
					/>
				))}
			</div>
		</div>
	);
}
