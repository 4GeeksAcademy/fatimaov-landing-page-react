import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// import components
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import CardOne from './CardOne';
import CardTwo from "./CardTwo";
import Footer from './Footer';

//create your first component
const Home = () => {
	return (
		<>
			<header className="sticky-top">
				<Navbar />
			</header>
			<main className="container mb-5 pb-5 position-relative">
				<Jumbotron />
				<div className="row flex-wrap justify-content-center">
					<CardOne />
					<CardTwo />
					<CardOne />
					<CardTwo />
				</div>
			</main>
			<footer className="position-fixed bottom-0 w-100">
				<Footer />
			</footer>
		</>
	);
};

export default Home;