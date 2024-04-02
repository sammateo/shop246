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
import { ScrollArea } from "@/components/ui/scroll-area";

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
		redirectToCheckout,
	} = useShoppingCart();

	async function handleCheckoutClick(event: any) {
		event.preventDefault();
		try {
			const result = await redirectToCheckout();
			if (result?.error) {
				console.log(result.error);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
			<SheetContent className="sm:max-w-lg w-[90vw]">
				<SheetHeader>
					<SheetTitle>Shopping Cart</SheetTitle>
				</SheetHeader>

				<ScrollArea className=" w-full h-full px-4">
					<div>
						{cartCount === 0 ? (
							<div className="flex justify-center">
								<h1 className="text-xl">No items</h1>
							</div>
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
													<div className="flex items-start gap-x-2 ">
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
														<div className=" flex-grow">
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

								<div className="my-4">
									<div className="flex justify-between items-center">
										<p>Subtotal:</p>
										<p>
											{totalPrice && totalPrice > 0
												? priceFormat.format(totalPrice)
												: `$0`}
										</p>
									</div>
									<p className="my-2">
										Shipping and taxes are calculated at
										checkout
									</p>
									<div className="flex flex-col gap-y-4">
										<Button
											className="w-full"
											onClick={handleCheckoutClick}
										>
											Checkout
										</Button>
										<Button
											className="w-full text-primary"
											variant={"secondary"}
											onClick={handleCartClick}
										>
											Continue Shopping
										</Button>
									</div>
								</div>
							</div>
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
