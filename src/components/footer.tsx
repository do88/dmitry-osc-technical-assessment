export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="footer">
			<div className="wrap">
				<p>Copyright &copy; {currentYear} MockShop.com</p>
			</div>
		</footer>
	);
}
