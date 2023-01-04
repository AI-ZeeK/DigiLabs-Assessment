import React from "react";
import { IoIosCart } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";

type Props = {};

const Header = (props: Props) => {
	return (
		<>
			<nav className="navbar">
				<div className="logo-box">
					<div className="logo"></div>
					<p className="logo-text">Pepper</p>
				</div>
				<ul className="links-section">
					<li>About</li>
					<li>Blog</li>
					<li>Pricing</li>
					<li>Careers</li>
					<li>Contact</li>
				</ul>
				<div className="auth-section">
					<div className="cart-box">
						<IoIosCart className="icon" /> <span> Cart</span>
					</div>
					<div className="login not-mobile btn">Login</div>
					<div className="get-started not-mobile btn">Get Started</div>
					<div className="mobile menu-bar btn">
						<VscThreeBars />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
