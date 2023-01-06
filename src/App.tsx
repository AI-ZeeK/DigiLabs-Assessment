import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
