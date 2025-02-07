export default function Banner({ title }: { title: string }) {
	return (
		<section id="page-banner">
			<div className="wrap">
				<h2>{title}</h2>
			</div>
		</section>
	);
}
