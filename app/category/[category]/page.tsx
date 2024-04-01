import { sanityClient } from "@/app/lib/sanity";
import ProductCard from "@/components/products/ProductCard";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getCategorytData(category: string) {
	const query = `*[_type == "product" && lower(category->name) == lower("${category}")]
    {
      "id":_id,
      "mainImage":mainImage.asset._ref,
      price,
      name,
      description,
      "slug":slug.current,
      "category":category->name
    }`;
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function page({
	params,
}: {
	params: { category: string };
}) {
	const products: Product[] = await getCategorytData(params.category);
	return (
		<>
			{products && products.length > 0 ? (
				<div className="px-4 md:px-20">
					<div className="flex items-center justify-center">
						<h2 className="text-2xl font-semibold capitalize">
							Shop{" "}
							<span className="text-primary">
								{params.category}
							</span>
						</h2>
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
							/>
						))}
					</div>
				</div>
			) : (
				<div>
					<div className="flex flex-col gap-y-5 h-[90vh] items-center justify-center">
						<Image
							className=" h-auto w-[50vw] md:w-[20vw]"
							src={"/images/notfound.svg"}
							width={0}
							height={0}
							alt="product not found"
						/>
						<p className="text-2xl">Category not found.</p>

						<Link
							href="/"
							className="underline flex w-fit text-primary"
						>
							<ArrowLeft />
							Back to home
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
