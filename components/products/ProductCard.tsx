import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
let priceFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
export default function ProductCard({
	name,
	price,
	image,
	slug,
	category,
}: simplifiedProduct) {
	return (
		<div className="bg-secondary w-56 flex flex-col gap-y-5 px-4 py-4 rounded">
			<Image
				className="w-full h-44 rounded object-contain object-center"
				src={urlFor(image).url()}
				alt={name}
				width={200}
				height={200}
			/>
			<Link
				href={`/product/${slug}`}
				className="font-semibold overflow-hidden text-ellipsis line-clamp-2"
				// whitespace-nowrap
			>
				{name}
			</Link>
			<p>{category}</p>
			<p className="text-primary">{priceFormat.format(price)}</p>
		</div>
	);
}
