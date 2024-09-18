import React from "react";
// import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center font-black bg-primary border-top">
        <div>Existo</div>
		<ul className="nav justify-content-center">
			{/* <li className="nav-item">
				<Link className="nav-link" to="/"><h6><strong>Home</strong></h6></Link>
			</li> */}

			{/* <li className="nav-item">
				<Link className="nav-link border-start border-black" to="/preguntas"><h6><strong>Preguntas</strong></h6></Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link border-start border-black" to="/paginatiendas"><h6><strong>Categorias</strong></h6></Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link border-start border-black" to="/productos"><h6><strong>Tu perfil</strong></h6></Link>
			</li> */}
		</ul>
		{/* <a className="footer-img" href="/">
			<img src={Logo} alt="Logo" className="logo-footer" />
		</a> */}
	</footer>
);