export const formatPrice = (price: number | string) => {
	const numericPrice = typeof price === "string" ? parseFloat(price) : price;

	return `$${numericPrice.toFixed(2)}`;
};
