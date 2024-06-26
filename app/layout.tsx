import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CartProvider, { ThemeProvider } from "@/components/providers/Providers";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop246",
	description: "Bajan Tech Shop",
	icons: {
		icon: "/images/shop246_logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<CartProvider>
						<Navbar />
						{children}
						<Analytics />
					</CartProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
