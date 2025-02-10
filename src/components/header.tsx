"use client";

import Link from "next/link";
import BasketIcon from "../../public/icons/basket.svg";
import Basket from "./basket";

import { useCallback, useEffect, useRef, useState } from "react";
import { useBasketStore } from "@/store";
import { usePathname } from "next/navigation";

export default function Header() {
	const { toggleBasket, totalItems, closeBasket, basketOpen } = useBasketStore();
	const headerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const handleScroll = useCallback(() => {
		// close basket when scrolling
		closeBasket();

		// add sticky class to header when scrolling
		const headerHeight = headerRef.current?.offsetHeight || 0;
		headerRef.current?.classList.toggle("sticky", document.documentElement.scrollTop > headerHeight / 4);
	}, [closeBasket]);

	const [animate, setAnimate] = useState(false);

	// Close basket on escape key
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeBasket();
			}
		};
		window.addEventListener("keydown", handleEscape);
		return () => {
			window.removeEventListener("keydown", handleEscape);
		};
	}, [closeBasket]);

	// Handle scroll
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	// Close basket when navigating away
	useEffect(() => {
		closeBasket();
	}, [pathname, closeBasket]);

	// Animate mini-total
	useEffect(() => {
		if (totalItems > 0) {
			setAnimate(true);
			const timer = setTimeout(() => setAnimate(false), 300); // Duration of the animation
			return () => clearTimeout(timer);
		}
	}, [totalItems]);

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

				<button
					className="btn-secondary basket-trigger"
					onClick={() => toggleBasket()}
					aria-expanded={basketOpen}
					aria-label="Toggle basket visibility"
				>
					<span>My Basket</span>
					<BasketIcon />
				</button>

				<Basket />

				<div className={`mini-total ${animate ? "animate" : ""}`}>{totalItems}</div>
			</div>
		</header>
	);
}
