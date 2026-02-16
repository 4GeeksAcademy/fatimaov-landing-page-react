import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// import components
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
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
					<Card content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim nulla laudantium non illo natus" />
					<Card content="ut dignissimos harum sed quis repellat ipsam saepe?" />
					<Card content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim nulla laudantium non illo natus" />
					<Card content="ut dignissimos harum sed quis repellat ipsam saepe?" />
					
				</div>
			</main>
			<footer className="position-fixed bottom-0 w-100">
				<Footer />
			</footer>
		</>
	);
};

export default Home;