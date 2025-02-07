"use client";

import Image from "next/image";
import CloseIcon from "../../public/icons/close.svg";
import MinusIcon from "../../public/icons/minus.svg";
import PlusIcon from "../../public/icons/plus.svg";
import RemoveIcon from "../../public/icons/bin.svg";

import { formatPrice } from "@/utils";
import { useBasketStore } from "@/store";

export default function Basket() {
	const {
		basketOpen,
		closeBasket,
		products,
		totalItems,
		basketTotal,
		add,
		remove,
		delete: deleteProduct,
	} = useBasketStore();

	const basketContent =
		products.length === 0 ? (
			<div className="basket-empty">
				<p>Your basket is empty, why not add something?</p>
			</div>
		) : (
			<ul className="basket-items">
				{products.map((product) => (
					<li className="basket-item" key={product.id}>
						<div className="image">
							<Image src={product.featuredImage.url} alt={product.title} width={100} height={100} />
						</div>
						<div className="basket-item-info">
							<span className="price">{formatPrice(product.price)}</span>
							<span className="title">{product.title}</span>
							<div className="controls">
								<button className="quantity-button" onClick={() => remove(product)}>
									<MinusIcon />
								</button>
								<input type="text" className="quantity-input" value={product.quantity} readOnly />
								<button className="quantity-button" onClick={() => add(product)}>
									<PlusIcon />
								</button>
								<button className="remove" onClick={() => deleteProduct(product)}>
									<RemoveIcon />
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		);

	return (
		<div className={`site-basket ${basketOpen ? "is-open" : ""}`}>
			<div className="basket-top">
				<p className="total-items">
					<strong>{totalItems}</strong> items
				</p>
				<button className="close" onClick={() => closeBasket()}>
					<CloseIcon />
				</button>
			</div>

			{basketContent}

			<div className="basket-total">
				Total
				<strong>{formatPrice(basketTotal)}</strong>
			</div>

			<div className="basket-actions">
				<button className="btn-secondary">Checkout</button>
			</div>
		</div>
	);
}
