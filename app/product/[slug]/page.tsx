import { sanityClient } from "@/app/lib/sanity";
import AddToCart from "@/components/products/AddToCart";
import CheckoutNow from "@/components/products/CheckoutNow";
import ProductImages from "@/components/products/ProductImages";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const revalidate = 30;
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
        "category":category->name,
		price_id
    }`;
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function page({ params }: { params: { slug: string } }) {
	const productData: Product = await getProductData(params.slug);

	return (
		<div>
			{productData ? (
				<div className="px-4 md:px-20 grid md:grid-cols-2 gap-4">
					<ProductImages images={productData.images} />
					<div className="">
						<Link
							href={`/category/${productData?.category}`}
							className="my-2"
						>
							{productData?.category}
						</Link>
						<p className="text-2xl font-bold my-2">
							{productData?.name}
						</p>
						<div className="flex gap-x-4 items-center mt-2 mb-6">
							<Button className="flex gap-2 text-primary-foreground">
								<span>4.0</span>
								<Star className="h-5 w-5" />
							</Button>
							<p className="text-sm">56 ratings</p>
						</div>
						<div className="my-2">
							<p className="text-xl md:text-2xl font-bold">
								{priceFormat.format(productData?.price)}
							</p>
							<p className="text-sm">Incl. Vat plus shipping</p>
						</div>
						<div className="flex gap-2 items-center my-2">
							<Truck />
							<p className="text-sm">2-4 Day Shipping</p>
						</div>
						<div className="flex gap-2 my-2">
							<AddToCart
								name={productData.name}
								description={productData.description}
								image={productData.images[0]}
								price={productData.price}
								currency="USD"
								price_id={productData.price_id}
							/>
							<CheckoutNow
								name={productData.name}
								description={productData.description}
								image={productData.images[0]}
								price={productData.price}
								currency="USD"
								price_id={productData.price_id}
							/>
							{/* <Button variant={"secondary"}>Checkout Now</Button> */}
						</div>
						<div>
							<p className="my-10 tracking-wide text-base">
								{productData?.description}
							</p>
						</div>
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
