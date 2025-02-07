"use client";

import Link from "next/link";
import BasketIcon from "../../public/icons/basket.svg";
import Basket from "./basket";

import { useCallback, useEffect, useRef } from "react";
import { useBasketStore } from "@/store";

export default function Header() {
	const { toggleBasket } = useBasketStore();
	const headerRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(() => {
		const headerHeight = headerRef.current?.offsetHeight || 0;
		headerRef.current?.classList.toggle("sticky", document.documentElement.scrollTop > headerHeight / 4);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<header id="header" ref={headerRef}>
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

				<button className="btn-secondary" onClick={() => toggleBasket()}>
					My Basket
					<BasketIcon />
				</button>

				<Basket />
			</div>
		</header>
	);
}
