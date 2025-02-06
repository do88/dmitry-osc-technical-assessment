import Link from "next/link";
import Basket from "../../public/icons/basket.svg";

export default function Header() {
	return (
		<header>
			<div className="wrap">
				<h1>
					MockShop<span>.com</span>
				</h1>

				<nav>
					<ul className="menu">
						<li className="menu__item">
							<Link href="/">Home</Link>
						</li>
						<li className="menu__item">
							<Link href="/products">Products</Link>
						</li>
						<li className="menu__item">
							<Link href="/about">About</Link>
						</li>
					</ul>
				</nav>

				<button className="btn btn--primary">
					My Basket
					<Basket />
				</button>
			</div>
		</header>
	);
}
