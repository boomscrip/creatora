import React from 'react';
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './style.css';



class Header extends Component {
	render() {
		return(
			<div className="Header">



			<div className="menu  d-flex">
			<div className="d-flex flex-column">
				<div className="d-flex flex-row">

						  <div className="logo d-flex ">
						    <img src="https://i.ibb.co/BGSZDVv/image.png"alt="" width="86" height="98" />
							</div>


					<div className="flex-column">
							<div className="company d-flex">
								<ul >
									<span>ООО “КРЕАТОРА”</span>
									<li><p>Рекламно-производственная <br />компания</p></li>
								</ul>
							</div>

					</div>


				</div>
				<div className="divider"></div>

						</div>
			 		<div className="vertical-divider"> </div>

					<div className="d-flex flex-column">
								<div className="menu_contack_info d-flex flex-row indent">

										<div className=" d-flex flex-column indent">
												<div className="location  bd-highlight">
														<i className="fas  fa-map-marker-alt loc "></i>
														г. Балашиха
												</div>

												<div className="e-mail  bd-highligh indent">


														<i className="fas fa-envelope loc"></i>
														<a href="mailto:creatora@inbox.ru">creatora@inbox.ru</a>
												</div>
										</div>
										<div className="d-flex flex-coloumn time align-self-center indent-time">

												<i className="far fa-clock fa-2x"></i>
										</div>

										<div className="d-flex align-self-center">
												Пн-Чт: 09.00-18.00
											<br />
												Пт: 09.00-17.00
										</div>

										<div className="d-flex align-self-center indent-time tel">

											<i className="fas fa-2x fa-phone phon"></i>
										</div>

										<div className="d-flex align-self-center phone ">
											<a href="callto:+79779403309">+7 (977) 940-33-09</a>
										</div>
								</div>
								<div className="divider-contact_info"></div>

								<div className="flex-row d-flex">
										<div className="navigate">
											<ul className="nav">
												  <li className="nav-item first_item">

												    <a className="nav-link " href="/news">О нас</a>
												  </li>
												  <li className="nav-item">
												    <a className="nav-link" href="#">Новости</a>
												  </li>
												  <li className="nav-item">
												    <a className="nav-link" href="#">Портфолио</a>
												  </li>
												  <li className="nav-item">
												    <a className="nav-link" href="#">Прайс</a>
												  </li>
													<li className="nav-item">
												    <a className="nav-link" href="#">Блог</a>
												  </li>
													<li className="nav-item">
												    <a className="nav-link" href="#">Доставка</a>
												  </li>
													<li className="nav-item">
												    <a className="nav-link item-contact" href="#">Контакты </a>
												  </li>
											</ul>
										</div>



										<div className=" d-flex ">
												<div className="soc">
														<noindex><a rel="nofollow" target="_blank" href="" className="vk">

														<i className="fab fa-vk vk"></i></a></noindex>
														<a className="inst" href="">
														<img className="inst_icon" src="https://i.ibb.co/ph2dT6P/iconfinder-Instagram-1298747.png" alt="iconfinder-Instagram-1298747" border="0" /></a>
												</div>
										</div>
								</div>
					</div>
			</div>

			<div className="d-flex service dropdown">
						<a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Наши услуги
						</a>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<a className="dropdown-item" href="#">Something else here</a>
					</div>
			</div>







					


			</div>
		)

	}
}


export default Header;
