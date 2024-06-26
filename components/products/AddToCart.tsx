"use client";
import React from "react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";

export interface ProductCart {
	name: string;
	description: string;
	price: number;
	image: any;
	currency: string;
	price_id: string;
}
export default function AddToCart({
	name,
	price,
	description,
	image,
	currency,
	price_id,
}: ProductCart) {
	const { addItem, handleCartClick } = useShoppingCart();
	const product = {
		name: name,
		description: description,
		price: price,
		image: urlFor(image).url(),
		currency: currency,
		price_id: price_id,
	};
	return (
		<Button
			onClick={() => {
				addItem(product);
				handleCartClick();
			}}
		>
			Add To Cart
		</Button>
	);
}
