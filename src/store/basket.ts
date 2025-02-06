import { create } from "zustand";

import { Product, BasketState } from "@/types/index";

const saveBasketToLocalStorage = (basket: BasketState) => {
	localStorage.setItem("basket", JSON.stringify(basket));
};

const loadBasketFromLocalStorage = (): BasketState => {
	const basket = localStorage.getItem("basket");
	return basket ? JSON.parse(basket) : { products: [], totalItems: 0, basketTotal: 0 };
};

export const useBasketStore = create<BasketState>((set) => ({
	...loadBasketFromLocalStorage(),

	add: (item: Product) =>
		set((state) => {
			const updatedProducts = [...state.products, item];
			const updatedTotalItems = state.totalItems + 1;
			const updatedBasketTotal = state.basketTotal + parseFloat(item.price);
			const newState = {
				...state,
				products: updatedProducts,
				totalItems: updatedTotalItems,
				basketTotal: updatedBasketTotal,
			};
			saveBasketToLocalStorage(newState);
			return newState;
		}),

	remove: (item: Product) =>
		set((state) => {
			const updatedProducts = state.products.filter((product) => product.id !== item.id);
			const updatedTotalItems = state.totalItems - 1;
			const updatedBasketTotal = state.basketTotal - parseFloat(item.price);
			const newState = {
				...state,
				products: updatedProducts,
				totalItems: updatedTotalItems,
				basketTotal: updatedBasketTotal,
			};
			saveBasketToLocalStorage(newState);
			return newState;
		}),

	loadBasket: () => set(loadBasketFromLocalStorage()),
}));
