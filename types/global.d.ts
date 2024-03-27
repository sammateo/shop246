import { UUID } from "crypto";

export {};

declare global {
	interface IPost {
		id: number;
		title: string;
		body: string;
	}
	interface simplifiedProduct {
		name: string;
		price: number;
		image: string;
		slug: string;
		category: string;
	}
	type Product = {
		id: UUID;
		name: string;
		price: number;
		image: string;
		slug: string;
		category: string;
	};
}
