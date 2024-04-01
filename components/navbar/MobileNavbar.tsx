"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { navLink } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
let priceFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
interface NavbarProps {
	openNavbar: boolean;
	setOpenNavBar: any;
	links: navLink[];
}
export function MobileNavbar({
	openNavbar,
	setOpenNavBar,
	links,
}: NavbarProps) {
	const pathname = usePathname();
	return (
		<Sheet open={openNavbar} onOpenChange={setOpenNavBar}>
			<SheetContent className="sm:max-w-lg w-[90vw]">
				{/* <SheetHeader>
					<SheetTitle>Shop246</SheetTitle>
				</SheetHeader> */}
				<nav className="flex flex-col gap-10">
					{links.map((link) => (
						<SheetClose asChild key={link.name}>
							<Link
								href={link.href}
								key={link.name}
								className={`text-lg font-semibold transition duration-200 hover:text-primary ${
									pathname === link.href && "text-primary"
								}`}
							>
								{link.name}
							</Link>
						</SheetClose>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
