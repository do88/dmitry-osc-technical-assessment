import Link from "next/link";
import BasketIcon from "../../public/icons/basket.svg";
import Basket from "./basket";

export default function Header() {
	return (
		<header id="header">
			<div className="wrap">
				<Link href="/" className="logo">
					MockShop<span>.com</span>
				</Link>

				<nav className="nav">
					<ul className="menu">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/products">Products</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</nav>

				<button className="btn-secondary">
					My Basket
					<BasketIcon />
				</button>

				<Basket />
			</div>
		</header>
	);
}
