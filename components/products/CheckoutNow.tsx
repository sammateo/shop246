"use client";
import React from "react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToCart";

export default function CheckoutNow({
	name,
	price,
	description,
	image,
	currency,
	price_id,
}: ProductCart) {
	const { checkoutSingleItem } = useShoppingCart();
	const product = {
		name: name,
		description: description,
		price: price,
		image: urlFor(image).url(),
		currency: currency,
		price_id: price_id,
	};
	const buyNow = (price_id: string) => {
		checkoutSingleItem(price_id);
	};
	return (
		<Button
			variant={"secondary"}
			onClick={() => {
				buyNow(price_id);
			}}
		>
			Checkout Now
		</Button>
	);
}
