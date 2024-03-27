"use client";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Storage", href: "/storage" },
	{ name: "Cables", href: "/cables" },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="flex items-center justify-between py-2 px-4 md:px-20">
			<Link href="/">
				<h1 className="text-4xl font-bold">
					Shop<span className="text-primary">246</span>
				</h1>
			</Link>
			<nav className="hidden md:flex gap-10">
				{links.map((link) => (
					<Link
						href={link.href}
						key={link.name}
						className={`text-lg font-semibold transition duration-200 hover:text-primary ${
							pathname === link.href && "text-primary"
						}`}
					>
						{link.name}
					</Link>
				))}
			</nav>
			<div className="flex gap-x-4 items-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<ShoppingBag className="text-primary cursor-pointer" />
						</TooltipTrigger>
						<TooltipContent>
							<p>Cart</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Menu className="text-primary cursor-pointer block md:hidden" />
						</TooltipTrigger>
						<TooltipContent>
							<p>Menu</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
}
