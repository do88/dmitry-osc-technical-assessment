import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/scss/index.scss";

import Header from "@/components/header";
import Footer from "@/components/footer";

const notoSans = localFont({
	src: [
		{
			path: "../../public/fonts/NotoSans-VariableFont.ttf",
		},
	],
});

const changaOne = localFont({
	src: "../../public/fonts/ChangaOne-Regular.ttf",
});

export const metadata: Metadata = {
	title: "Mock Shop",
	description: "A mock shop built with Next.js and Shopify API",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${changaOne.className} ${notoSans.className}`}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
