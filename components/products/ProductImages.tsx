import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface iAppProps {
	images: productImage[];
}
export default function ProductImages({ images }: iAppProps) {
	return (
		<div className="w-full">
			<Carousel>
				<CarouselContent className="">
					{images.map((image: productImage) => {
						return (
							<CarouselItem key={image.asset._ref} className="">
								<Image
									// key={image._key}
									className="w-full h-96 rounded object-contain object-center bg-primary-foreground"
									src={urlFor(image.asset._ref).url()}
									alt={"test"}
									width={500}
									height={400}
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="left-2" />
				<CarouselNext className=" right-2" />
			</Carousel>
			{/* Other Images */}
			{/* <div className="flex flex-wrap justify-evenly items-center gap-2 w-full bg-green-500">
				{images.map((image: productImage) => {
					return (
						<Image
							key={image._key}
							className=" w-auto h-44 rounded object-contain object-center"
							src={urlFor(image.asset._ref).url()}
							alt={"test"}
							width={200}
							height={200}
						/>
					);
				})}
			</div> */}
		</div>
	);
}
