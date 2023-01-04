import React from "react";
import Marquee from "react-fast-marquee";
import { GiCheckMark } from "react-icons/gi";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import { IoAppsOutline, IoMailOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { CiBellOn, CiUser } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
type Props = {};

const Main = (props: Props) => {
	return (
		<div>
			<section className="text-area-section">
				<div className="text-box">
					<div className="head-text-box">
						<h2 className="head-text">Save More and get your finances right</h2>
					</div>
					<div className="small-text-box">
						<small>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
							eaque, exercitationem delectus illo animi reiciendis id numquam
							beatae.
						</small>
					</div>
					<div className="btn-box">
						<button>Request a demo</button>
					</div>
				</div>
			</section>
			<section>
				<div>
					<h2>Trusted and loved by the world's best teams</h2>
				</div>
				<div>
					<div></div>
				</div>
			</section>

			<section className="overview-section">
				<div className="overview-box">
					<img src={web1} alt="" className="img-box box1" />
					<img src={web2} alt="" className="img-box box2" />
					<div className="overview-head">
						<div className="overview-head-text">
							<h2> A nice and simple financial overview</h2>
						</div>
						<div className="overview-para">
							<small>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
								ipsum delectus voluptatum eum impedit corporis maxime.
							</small>
						</div>
					</div>

					<div className="overview-details">
						<div className="overview-detail">
							<h3>120+</h3>
							<small>Useful Widgets</small>
						</div>
						<div className="overview-detail">
							<h3>20+</h3>
							<small>Integrations</small>
						</div>
						<div className="overview-detail">
							<h3>65+</h3>
							<small>Features out</small>
						</div>
					</div>
				</div>
			</section>

			<section className="marquee-section">
				<Marquee className="marquee-box" speed={50} gradient={false}>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Appointment Scheduling</span>
					</div>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Event Scheduler</span>
					</div>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>No Prior credit card required</span>
					</div>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Group video calls</span>
					</div>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Public and private chats</span>
					</div>
					<div className="item-box">
						<div className="purple item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Activity Stream</span>
					</div>
				</Marquee>
				<Marquee
					className="marquee-box"
					direction="right"
					speed={50}
					gradient={false}>
					<div className="item-box">
						<div className="green item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Expert on-demand call</span>
					</div>
					<div className="item-box">
						<div className="green item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Email support for 24/7</span>
					</div>
					<div className="item-box">
						<div className="green item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Group video calls</span>
					</div>
					<div className="item-box">
						<div className="green item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Activity Stream</span>
					</div>
					<div className="item-box">
						<div className="green item-check">
							<GiCheckMark className="icon" />
						</div>
						<span>Ecent Scheduler</span>
					</div>
				</Marquee>
			</section>

			<section className="text-area-section">
				<div className="text-box text2-box">
					<div className="head-text-box">
						<h2 className="head2-text">
							Supercharge your workflow to get started
						</h2>
					</div>
					<div className="small-text-box">
						<small>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
							nostrum quidemt?
						</small>
					</div>
				</div>
			</section>
			<section className="info-card-section">
				<div className="info-card-box">
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								{" "}
								<IoMailOutline />
							</div>
						</div>
						<div>
							<h2 className="info-head">Email Management</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								<HiOutlineCalendar />
							</div>
						</div>
						<div>
							<h2 className="info-head">Campaign Calender</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								<CiUser />
							</div>
						</div>
						<div>
							<h2 className="info-head">Personal Assistance</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								<MdPayments />
							</div>
						</div>
						<div>
							<h2 className="info-head">Payment Feature</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								<IoAppsOutline />
							</div>
						</div>
						<div>
							<h2 className="info-head">Utility apps</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
					<div className="info-card">
						<div className="info-icon-box">
							<div></div>
							<div>
								<CiBellOn />
							</div>
						</div>
						<div>
							<h2 className="info-head">Sale Notification</h2>
						</div>
						<div>
							<p className="info-para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium, dolore ut. Maxime.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="overview-section">
				<div className="overview-box">
					<img src={web1} alt="" className="img-box2 box1" />
					<img src={web2} alt="" className="img-box2 box2" />
					<div className="overview-head">
						<div className="overview-head-text">
							<h2> Focus on the analytics of that matter</h2>
						</div>
						<div className="overview-para">
							<small>
								grow faster with a website that helps you convert customers
							</small>
						</div>
					</div>

					<div className="overview-btn-box">
						<button>Get started now</button>
						<button className="btn-outline btn">Compare plans</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Main;
