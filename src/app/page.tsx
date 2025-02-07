import Banner from "@/components/banner";
import Link from "next/link";
export default function Page() {
	return (
		<>
			<Banner title="Home" />
			<section className="home">
				<div className="wrap">
					<h2 className="home-title">
						Welcome to the homepage of the mock shop, to view the products check out our{" "}
						<Link href="/products">products page</Link>
					</h2>
				</div>
			</section>
		</>
	);
}
