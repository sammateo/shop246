import { ArrowLeft, Ban } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className="flex flex-col w-full h-[90vh] justify-center items-center">
			<Ban className="text-red-600" size={40} />
			<h3 className="font-semibold text-2xl">Something went wrong.</h3>
			<Link href="/" className="underline my-4 flex text-primary">
				<ArrowLeft />
				Go Back
			</Link>
		</div>
	);
}
