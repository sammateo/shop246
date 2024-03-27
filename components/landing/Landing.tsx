import { sanityClient, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
async function getLandingImage() {
	const query = "*[_type=='landingImage'][0]";
	const data = await sanityClient.fetch(query);
	return data;
}
export default async function Landing() {
	const data = await getLandingImage();
	return (
		<div className="py-32 md:py-40 px-4 md:px-20 flex flex-col md:flex-row gap-10 justify-around items-center">
			<div className="flex flex-col gap-y-5 capitalize">
				<h1 className="text-4xl font-bold">
					Welcome to Shop<span className="text-primary">246</span>
				</h1>
				<p className="leading-relaxed text-gray-600 text-lg">
					We provide local products for all your{" "}
					<code className="text-primary">tech</code> needs.
				</p>
			</div>

			<Image
				className="sm:rounded w-full max-w-md"
				src={urlFor(data.image).url()}
				alt="landing image"
				width={500}
				height={500}
			/>
		</div>
	);
}
