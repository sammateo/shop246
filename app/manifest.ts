import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Shop246",
		short_name: "Shop246",
		description: "Bajan Tech Shop",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
		icons: [
			{
				src: "/images/shop246_logo.svg",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
