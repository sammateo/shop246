import { sanityClient } from "@/app/lib/sanity";
import ProductImages from "@/components/products/ProductImages";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
				<div className="flex flex-col gap-y-5 h-[90vh] items-center justify-center">
					<Image
						className=" h-auto w-[50vw] md:w-[20vw]"
						src={"/images/notfound.svg"}
						width={0}
						height={0}
						alt="product not found"
					/>
					<p className="text-2xl">Product not found.</p>

					<Link
						href="/"
						className="underline flex w-fit text-primary"
					>
						<ArrowLeft />
						Back to home
					</Link>
				</div>
			)}
		</div>
	);
}
