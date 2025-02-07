export type ApiResponse = {
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

export type Product = {
	id: string;
	title: string;
	description: string;
	featuredImage: {
		id: string;
		url: string;
	};
	price: string;
	currencyCode: string;
	quantity: number;
}

export type BasketState = {
	products: Product[];
	totalItems: number;
	basketTotal: number;
	basketOpen: boolean;
};

export type BasketActions = {
	add: (item: Product) => void;
	remove: (item: Product) => void;
	delete: (item: Product) => void;
	toggleBasket: () => void;
	closeBasket: () => void;
};

export type BasketStore = BasketState & BasketActions;
