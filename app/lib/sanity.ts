import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const sanityClient = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: process.env.SANITY_API_VERSION,
	useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
	return builder.image(source);
}
