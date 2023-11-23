import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<nav className="navbar mb-3">
				<Link to="/">
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</nav>

			<div className="text-center m-4">
				<h1>LISTA DE CONTACTOS</h1>

			</div>
		</div>

	);

}

