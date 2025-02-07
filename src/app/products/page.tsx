import { getProducts } from "@/actions";
import ProductGrid from "@/components/product-grid";
import Banner from "@/components/banner";

export default async function Page() {
	const products = await getProducts();

	if (products.loading) {
		return (
			<>
				<Banner title="Products" />
				<div className="wrap">
					<div className="loading-block">
						<div className="loading-spinner"></div>
					</div>
				</div>
			</>
		);
	} else if (products.error) {
		return (
			<>
				<Banner title="Products" />
				<div className="wrap">
					<div className="error-container">
						<p>{products.error}</p>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<Banner title="Products" />
				<section className="products">
					<div className="wrap">
						<ProductGrid products={products.products} />
					</div>
				</section>
			</>
		);
	}
}
