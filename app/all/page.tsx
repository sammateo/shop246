import AllProducts from "@/components/products/AllProducts";
import React from "react";
export const revalidate = 30;

export default function page() {
	return (
		<div>
			<AllProducts />
		</div>
	);
}
