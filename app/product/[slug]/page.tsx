import { sanityClient } from "@/app/lib/sanity";
import ProductImages from "@/components/products/ProductImages";
import React from "react";
let priceFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
async function getProductData(slug: string) {
	const query = `*[_type == "product" && slug.current == "${slug}"][0]
    {
        "id":_id,
        images,
        price,
        name,
        description,
        "slug":slug.current,
        "category":category->name
    }`;
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function page({ params }: { params: { slug: string } }) {
	const productData: Product = await getProductData(params.slug);

	return (
		<div>
			{productData ? (
				<div className="px-4 md:px-20 flex flex-wrap gap-4">
					<ProductImages images={productData.images} />
					<div className="">
						<p className="text-2xl font-semibold">
							{productData?.name}
						</p>
						{/* <p>{productData?.description}</p> */}
						<p>{productData?.category}</p>
						<p>{priceFormat.format(productData?.price)}</p>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}
