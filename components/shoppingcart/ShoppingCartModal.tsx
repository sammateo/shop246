"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
let priceFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
export function ShoppingCartModal() {
	const {
		cartCount,
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		removeItem,
		totalPrice,
	} = useShoppingCart();
	return (
		<Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
			<SheetContent className="sm:max-w-lg w-[90vw]">
				<SheetHeader>
					<SheetTitle>Shopping Cart</SheetTitle>
					<div>
						{cartCount === 0 ? (
							<h1>No items</h1>
						) : (
							<div className="">
								<div className="">
									<ul>
										{Object.values(cartDetails ?? {}).map(
											(entry) => (
												<li
													key={entry.id}
													className="py-6 overflow-hidden rounded-md"
												>
													<div className="flex items-start gap-x-2">
														<div className="h-24 w-24 flex-shrink-0">
															<Image
																src={
																	entry.image as string
																}
																width={100}
																height={100}
																alt=""
															/>
														</div>
														<div>
															<div>
																<p>
																	{entry.name}
																</p>
																<p className="text-sm text-primary">
																	{priceFormat.format(
																		entry.price
																	)}
																</p>
																<p className="m2-1 line-clamp-2">
																	{
																		entry.description
																	}
																</p>
															</div>
															<div className="flex justify-between items-center">
																<p className="text-sm">
																	QTY:{" "}
																	{
																		entry.quantity
																	}
																</p>
																<Trash
																	onClick={() => {
																		removeItem(
																			entry.id
																		);
																	}}
																	className="cursor-pointer text-destructive"
																/>
															</div>
														</div>
													</div>
												</li>
											)
										)}
									</ul>
								</div>

								<div>
									<div className="flex justify-between items-center">
										<p>Subtotal:</p>
										<p>
											{totalPrice && totalPrice > 0
												? priceFormat.format(totalPrice)
												: `$0`}
										</p>
									</div>
									<Button className="w-full">Checkout</Button>
								</div>
							</div>
						)}
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
