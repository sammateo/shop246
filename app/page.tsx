import Landing from "@/components/landing/Landing";
import Navbar from "@/components/navbar/Navbar";
import Newest from "@/components/newest/Newest";
import AllProducts from "@/components/products/AllProducts";
import Image from "next/image";
export const revalidate = 30;
export default function Home() {
	return (
		<div>
			<Landing />
			<Newest />
		</div>
	);
}
// https://dribbble.com/shots/18209789-Trending-eCommerce-Shopping-Landing-Page-UI-UX-Design
