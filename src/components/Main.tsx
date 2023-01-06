import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";

import { GiCheckMark } from "react-icons/gi";
import { IoAppsOutline, IoMailOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
	BsChatDots,
	BsCheck2,
	BsCheckCircle,
	BsFillStarFill,
} from "react-icons/bs";
import { CiBellOn, CiUser } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import loogo from "../assets/grayte.png";
import loogoa from "../assets/one box.png";
import banner from "../assets/banner.png";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCounter, setIsModal, setShowCount } from "../features/AppSlice";
import Modal from "./Modal";
type Props = {};

const Main = (props: Props) => {
	const { counter, showCount, isModal, responseData } = useSelector(
		(store: any) => store.app
	);
	const dispatch = useDispatch();
	const handleReqClick = () => {
		dispatch(setCounter());
		dispatch(setShowCount(true));
	};

	const handleUpdate = (e: any) => {
		e.preventDefault();
		dispatch(setIsModal());
	};
	useEffect(() => {
		if (showCount) {
			setTimeout(() => {
				dispatch(setShowCount(false));
				console.log("yelow");
			}, 4000);
		}
		console.log("green");
	}, [showCount]);
	return (
		<div>
			<section className="text-area-section">
				<div className={showCount ? "new-box active" : "new-box"}>
					<h1>{counter}</h1>
				</div>
				<div className={isModal ? "modal" : "modal inactive"}>
					<Modal />
				</div>
				<div className="text-box">
					<div className="head-text-box">
						<h2 className="head-text">
							{responseData.length
								? responseData.map((item: any): any => item.user.text)
								: "Save More and get your finances right"}
						</h2>
					</div>
					<div className="small-text-box">
						<small>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
							eaque, exercitationem delectus illo animi reiciendis id numquam
							beatae.
						</small>
					</div>
					<div className="btn-box">
						<button onClick={handleReqClick}>Request a demo</button>
					</div>
					<div className="btn-box" onClick={handleUpdate}>
						<button>Update Items</button>
					</div>
				</div>
			</section>
			<section className="big-banner-section">
				<img src={banner} alt="banner" />
			</section>
			<section className="small-banner-section">
				<div>
					<h2 className="small-banner-header">
						Trusted and loved by the world's best teams
					</h2>
				</div>
				<Marquee gradientColor={[0, 0, 0]} gradientWidth={60}>
					<div className="small-banner-marquee">
						<div className="space">
							<h2>Invert</h2>
						</div>
						<div className="space">
							<h2>Hitech</h2>
						</div>
						<div className="space">
							<h2>Flash</h2>
						</div>
						<div className="space">
							<h2>SnowFlake</h2>
						</div>
						<div className="space">
							<h2>Invert</h2>
						</div>
						<div className="space">
							<h2>Hitech</h2>
						</div>
						<div className="space">
							<h2>Flash</h2>
						</div>
						<div className="space">
							<h2>SnowFlake</h2>
						</div>
						<div className="space">
							<h2>Invert</h2>
						</div>
						<div className="space">
							<h2>Hitech</h2>
						</div>
						<div className="space">
							<h2>Flash</h2>
						</div>
						<div className="space">
							<h2>SnowFlake</h2>
						</div>
						<div className="space">
							<h2>Invert</h2>
						</div>
						<div className="space">
							<h2>Hitech</h2>
						</div>
						<div className="space">
							<h2>Flash</h2>
						</div>
						<div className="space">
							<h2>SnowFlake</h2>
						</div>
					</div>
				</Marquee>
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

			<section className="info-card-section">
				<div className="info-grid">
					<div className="info-purple-box">
						<div className="right-circle"></div>
						<div className="left-circle"></div>
						<div className="inner-bg">
							<h2 className="inner-head"> Your Task</h2>
							<div className="inner-info-box">
								<div className="inner-info">
									<div className="info-check">
										<BsCheckCircle />
									</div>
									<div className="info-details">
										<h3>Get your soft done</h3>
										<small>Completed</small>
									</div>
								</div>
								<div className="inner-info">
									<div className="info-check check">
										<BsCheckCircle />
									</div>
									<div className="info-details">
										<h3>Get your soft done</h3>
										<small>Done</small>
									</div>
								</div>
								<div className="inner-info">
									<div className="info-check">
										<BsCheckCircle />
									</div>
									<div className="info-details">
										<h3>Get your soft done</h3>
										<small>Completed</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="info-texts-box">
						<h3>Manage and Track Your Projects</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad
							dignissimos veritatis.
						</small>
						<div className="info-texts">
							<div className="check-area">
								<div className="check-icon">
									<BsCheck2 />
								</div>
								<small>Create posts, reels and stories</small>
							</div>
							<div className="check-area">
								<div className="check-icon">
									<BsCheck2 />
								</div>
								<small>Publish your Facebook posts dynamically</small>
							</div>
							<div className="check-area">
								<div className="check-icon">
									<BsCheck2 />
								</div>
								<small>Schedule any Twitter posts</small>
							</div>
						</div>
					</div>
					<div className="info-texts-box order2">
						<h3>Easily manage your team's progress</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad
							dignissimos veritatis.
						</small>
						<div className="info-texts">
							<div className="check-area">
								<div className="check-icon icon2">
									<BsCheck2 />
								</div>
								<small>Create posts, reels and stories</small>
							</div>
							<div className="check-area">
								<div className="check-icon icon2">
									<BsCheck2 />
								</div>
								<small>Publish your Facebook posts dynamically</small>
							</div>
							<div className="check-area">
								<div className="check-icon icon2">
									<BsCheck2 />
								</div>
								<small>Schedule any Twitter posts</small>
							</div>
						</div>
					</div>

					<div className="info-image-box">
						<img src={loogoa} alt="logo" />
					</div>
					<div className="info-image-box">
						<img src={loogo} alt="logo" />
					</div>

					<div className="info-texts-box">
						<h3>Simple financial overview for you</h3>
						<small>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ad
							dignissimos veritatis.
						</small>
						<div className="info-texts">
							<div className="check-area">
								<div className="check-icon icon3">
									<BsCheck2 />
								</div>
								<small>Create posts, reels and stories</small>
							</div>
							<div className="check-area">
								<div className="check-icon icon3">
									<BsCheck2 />
								</div>
								<small>Publish your Facebook posts dynamically</small>
							</div>
							<div className="check-area">
								<div className="check-icon icon3">
									<BsCheck2 />
								</div>
								<small>Schedule any Twitter posts</small>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="text-section">
				<div className="text-box">
					<h2>Don't take our words for it - listen to our clients</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, et!
					</p>
				</div>
			</section>

			<section className="test-section">
				<Marquee speed={50} gradient={false}>
					<div className="test-box">
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
					</div>
				</Marquee>
				<Marquee speed={50} gradient={false} direction="right">
					<div className="test-box">
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
						<div className="test-card">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
								modi quae fugiat illo repellat, ipsa laudantium temporibus
								explicabo.
							</p>
							<div className="stars">
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
								<BsFillStarFill className="icon" />
							</div>
							<div>
								<h4>Ronald Richard</h4>
								<small>Ceo-Ultra</small>
							</div>
						</div>
					</div>
				</Marquee>
			</section>

			<section className="instruction-section">
				<div className="instruction-box">
					<div className="text-box">
						<div className="head-text-box">
							<h2 className="head-text">
								Build a powerful website for your startup
							</h2>
						</div>
						<div className="small-text-box">
							<small>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. ]
							</small>
						</div>
						<div className="btn-box">
							<button>Read More</button>
						</div>
					</div>

					<div className="info-grid">
						<div className="info-card-box">
							<div className="info-card">
								<div className="info-icon-box">
									<div></div>
									<div>
										<CiUser />
									</div>
								</div>
								<div>
									<h2 className="info-head">7,000 happy users</h2>
								</div>
								<div>
									<p className="info-para">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Praesentium, dolore ut. Maxime.
									</p>
								</div>
							</div>
						</div>
						<div className="info-card-box span-2">
							<div className="info-card">
								<div className="info-icon-box">
									<div></div>
									<div>
										<IoIosSend />
									</div>
								</div>
								<div>
									<h2 className="info-head">Global Community</h2>
								</div>
								<div>
									<p className="info-para">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Praesentium, dolore ut. Maxime.
									</p>
								</div>
							</div>
						</div>
						<div className="info-card-box">
							<div className="info-card">
								<div className="info-icon-box">
									<div></div>
									<div>
										<BsChatDots />
									</div>
								</div>
								<div>
									<h2 className="info-head">24/7 Support</h2>
								</div>
								<div>
									<p className="info-para">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Praesentium, dolore ut. Maxime.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="overview-section">
				<div className="right-circle"></div>
				<div className="left-circle"></div>
				<div className="overview-box">
					<img src={web1} alt="" className="img-box2 box1" />
					<img src={web2} alt="" className="img-box2 box2" />
					<div></div>

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
