"use server";

import { ApiResponse, Product } from "../types";

export async function getProducts(): Promise<{
	products: Product[];
	loading: boolean;
	error: string | null;
}> {
	try {
		let loading = true;
		const request = await fetch(
			"https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
		);

		const response: ApiResponse = await request.json();

		const products = response.data.products.edges.map((product) => {
			const { id, title, description, featuredImage, variants } = product.node;
			const { amount, currencyCode } = variants.edges[0].node.price;

			return {
				id,
				title,
				description,
				featuredImage,
				price: amount,
				currencyCode,
			};
		});

		loading = false;
		return { products, loading, error: null };
	} catch (error) {
		console.error(error);
		return { products: [], loading: false, error: "Failed to fetch products" };
	}
}
