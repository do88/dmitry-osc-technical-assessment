import CloseIcon from "../../public/icons/close.svg";
import MinusIcon from "../../public/icons/minus.svg";
import PlusIcon from "../../public/icons/plus.svg";
import RemoveIcon from "../../public/icons/bin.svg";

export default function Basket() {
	return (
		<div className="site-basket">
			<div className="basket-top">
				<p className="total-items">
					<strong>5</strong> items
				</p>
				<button className="close">
					<CloseIcon />
				</button>
			</div>

			<ul className="basket-items">
				<li className="basket-item">
					<div className="image">{/* <img src="" alt="Product 1" /> */}</div>
					<div className="basket-item-info">
						<span className="price">$30.00</span>
						<span className="title">Product Name</span>
						<div className="controls">
							<button className="quantity-button">
								<MinusIcon />
							</button>
							<input type="text" className="quantity-input" value="1" readOnly />
							<button className="quantity-button">
								<PlusIcon />
							</button>
							<button className="remove">
								<RemoveIcon />
							</button>
						</div>
					</div>
				</li>
			</ul>

			<div className="basket-total">
				Total
				<strong>£150.00</strong>
			</div>

			<div className="basket-actions">
				<button className="btn-secondary">Checkout</button>
			</div>
		</div>
	);
}
