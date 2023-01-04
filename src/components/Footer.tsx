import React from "react";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { MdMail } from "react-icons/md";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="footer">
			<div className="footer-top">
				<div className="left-col">
					<div className="logo-box">
						<div className="logo"></div>
						<p className="logo-text">Pepper</p>
					</div>
					<div className="paragraph">
						<p>
							Pepper is on of the most reliable <br /> delivery platform
							management service to <br /> automate your network
						</p>
					</div>
					<div>
						<button className="get-started">Get Started</button>
					</div>
					<div className="social-icons">
						<GrLinkedin />
						<GrTwitter />
						<MdMail />
					</div>
				</div>
				<div className="right-col">
					<div className="col-details">
						<h3>Pages Main</h3>
						<ul className="col-list">
							<li>Home</li>
							<li>Blog</li>
							<li>Blog Template</li>
							<li>Pricing</li>
							<li>Pricing Ecommerce</li>
							<li>About</li>
							<li>Careers</li>
							<li>Careers Template</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="col-details">
						<h3>Template pages</h3>
						<ul className="col-list">
							<li>Style guide</li>
							<li>Changelog</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				&copy; All rights reserved. <span className="green">Flowset</span>.
				Powered by <span className="purple"> Wf</span>
			</div>
		</div>
	);
};

export default Footer;
