import Image from "next/image";
import { Product } from "../types";
import { formatPrice } from "../utils";

interface ProductGridProps {
	products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
	return (
		<ul className="product-grid">
			{products.map((product) => (
				<li key={product.id} className="product">
					<div className="image">
						<Image src={product.featuredImage.url} alt={product.title} width={200} height={200} />
					</div>
					<h3 className="title">{product.title}</h3>
					<p className="price">{formatPrice(product.price)}</p>
					<button className="btn-secondary">Add To Basket</button>
				</li>
			))}
		</ul>
	);
}
