import { getProducts } from "@/actions";
import ProductGrid from "@/components/product-grid";

export default async function Page() {
	const products = await getProducts();

	if (!products) {
		return <div>Loading...</div>;
	} else {
		return (
			<section className="products">
				<div className="wrap">
					<h2>Products</h2>
					<ProductGrid products={products} />
				</div>
			</section>
		);
	}
}
