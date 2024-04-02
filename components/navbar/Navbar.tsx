"use client";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingCartModal } from "../shoppingcart/ShoppingCartModal";
import { useShoppingCart } from "use-shopping-cart";
import { MobileNavbar } from "./MobileNavbar";
import { ThemeToggle } from "./ThemeToggle";
export interface navLink {
	name: string;
	href: string;
}
const links: navLink[] = [
	{ name: "Home", href: "/" },
	{ name: "Storage", href: "/category/storage" },
	{ name: "Cables", href: "/category/cables" },
];

export default function Navbar() {
	const pathname = usePathname();
	const { handleCartClick } = useShoppingCart();
	const [openNavbar, setOpenNavBar] = useState(false);
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
							<ShoppingBag
								className="text-primary cursor-pointer"
								onClick={() => handleCartClick()}
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Cart</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<ThemeToggle />

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Menu
								className="text-primary cursor-pointer block md:hidden"
								onClick={() => setOpenNavBar(true)}
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Menu</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<ShoppingCartModal />
			<MobileNavbar
				openNavbar={openNavbar}
				setOpenNavBar={setOpenNavBar}
				links={links}
			/>
		</div>
	);
}
