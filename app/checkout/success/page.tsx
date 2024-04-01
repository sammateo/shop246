import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className="flex flex-col w-full h-[90vh] justify-center items-center">
			<CheckCheck className=" text-green-600" size={40} />
			<h3 className="font-semibold text-2xl">Payment Completed</h3>
			<p>Thank you for your purchase. We hope you enjoy!</p>
			<Link href="/" className="underline my-4 flex text-primary">
				<ArrowLeft />
				Go Back
			</Link>
		</div>
	);
}
