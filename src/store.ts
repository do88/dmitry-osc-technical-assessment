import { create } from "zustand";
import { BasketStore, Product } from "@/types";

export const useBasketStore = create<BasketStore>((set) => ({
	products: [],
	totalItems: 0,
	basketTotal: 0,
	basketOpen: false,

	add: (item: Product) =>
		set((state) => {
			let totalItems = 0;
			let basketTotal = 0;

			const existingProduct = state.products.find((product) => product.id === item.id);
			const updatedProducts = existingProduct
				? state.products.map((product) =>
						product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
				  )
				: [
						...state.products,
						{
							...item,
							quantity: 1,
						},
				  ];

			updatedProducts.forEach((product) => {
				totalItems += product.quantity;
				basketTotal += parseFloat(product.price) * product.quantity;
			});

			const newState = {
				...state,
				products: updatedProducts,
				totalItems: totalItems,
				basketTotal: basketTotal,
			};

			return newState;
		}),

	remove: (item: Product) =>
		set((state) => {
			let totalItems = 0;
			let basketTotal = 0;

			const existingProduct = state.products.find((product) => product.id === item.id);
			const updatedProducts =
				existingProduct && existingProduct.quantity > 1
					? state.products.map((product) =>
							product.id === item.id ? { ...product, quantity: product.quantity - 1 } : product
					  )
					: state.products.filter((product) => product.id !== item.id);

			updatedProducts.forEach((product) => {
				totalItems += product.quantity;
				basketTotal += parseFloat(product.price) * product.quantity;
			});

			const newState = {
				...state,
				products: updatedProducts,
				totalItems: totalItems,
				basketTotal: basketTotal,
			};

			return newState;
		}),

	delete: (item: Product) =>
		set((state) => {
			let totalItems = 0;
			let basketTotal = 0;

			const updatedProducts = state.products.filter((product) => product.id !== item.id);

			updatedProducts.forEach((product) => {
				totalItems += product.quantity;
				basketTotal += parseFloat(product.price) * product.quantity;
			});

			return {
				...state,
				products: updatedProducts,
				totalItems: totalItems,
				basketTotal: basketTotal,
			};
		}),

	toggleBasket: () =>
		set((state) => ({
			...state,
			basketOpen: !state.basketOpen,
		})),

	closeBasket: () =>
		set((state) => ({
			...state,
			basketOpen: false,
		})),
}));
