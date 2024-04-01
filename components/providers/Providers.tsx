"use client";
import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
			successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`}
			cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/error`}
			currency="USD"
			billingAddressCollection={true}
			shouldPersist={true}
			language="en-US"
		>
			{children}
		</USCProvider>
	);
}
