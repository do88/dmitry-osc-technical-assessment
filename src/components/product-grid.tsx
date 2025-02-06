import Image from "next/image";
import { Product } from "../types";

interface ProductGridProps {
	products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
	return (
		<ul className="product-grid">
			{products.map((product) => (
				<li key={product.id} className="product">
					<Image src={product.featuredImage.url} alt={product.title} width={200} height={200} />
					<h3>{product.title}</h3>
					<p className="price">{product.price}</p>
					<button className="btn-secondary">Add To Basket</button>
				</li>
			))}
		</ul>
	);
}
