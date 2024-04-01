import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";
let priceFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
export default function ProductCard({
	name,
	price,
	mainImage,
	slug,
	category,
	description,
	price_id,
}: Product) {
	return (
		<div className="bg-secondary w-full sm:w-56 flex sm:flex-col items-center sm:items-start gap-5 px-4 py-4 rounded">
			<Link href={`/product/${slug}`} className=" flex-shrink-0">
				<Image
					className="w-44 h-44 mx-auto rounded object-contain object-center"
					src={urlFor(mainImage).url()}
					alt={name}
					width={200}
					height={200}
				/>
			</Link>
			<div className="flex flex-col gap-y-2 w-full">
				<Link
					href={`/product/${slug}`}
					className="font-semibold overflow-hidden text-ellipsis line-clamp-2 leading-5 h-10"
					// whitespace-nowrap
				>
					{name}
				</Link>
				<p className="border w-fit px-2 py-1 rounded-md">{category}</p>
				<p className="text-primary">{priceFormat.format(price)}</p>
				<AddToCart
					name={name}
					description={description}
					image={mainImage}
					price={price}
					currency="USD"
					price_id={price_id}
				/>
			</div>
		</div>
	);
}
