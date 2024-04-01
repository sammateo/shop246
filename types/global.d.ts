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
		mainImage: string;
		slug: string;
		category: string;
	}
	interface Product {
		id?: UUID;
		name: string;
		description: string;
		price: number;
		mainImage: string;
		images?: any;
		slug: string;
		category: string;
	}

	interface productImage {
		_key: string;
		asset: imageAsset;
		_type: string;
	}
	interface imageAsset {
		_ref: string;
		_type: string;
	}
}
