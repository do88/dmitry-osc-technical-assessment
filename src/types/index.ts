export interface ApiResponse {
	data: {
		products: {
			edges: {
				node: {
					id: string;
					title: string;
					description: string;
					featuredImage: {
						id: string;
						url: string;
					};
					variants: {
						edges: {
							node: {
								price: {
									amount: string;
									currencyCode: string;
								};
							};
						}[];
					};
				};
			}[];
		};
	};
}

export interface Product {
	id: string;
	title: string;
	description: string;
	featuredImage: {
		id: string;
		url: string;
	};
	price: string;
	currencyCode: string;
}

export interface BasketState {
	products: Product[];
	totalItems: number;
	basketTotal: number;
	add: (item: Product) => void;
	remove: (item: Product) => void;
	loadBasket: () => void;
}
