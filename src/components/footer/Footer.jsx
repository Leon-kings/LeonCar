// Filename - components/Footer.js
import { BsCart2, BsDatabaseCheck, BsEnvelope,  BsInstagram, BsLinkedin, BsPeople, BsPhoneVibrate, BsQrCode, BsTools, BsWhatsapp } from "react-icons/bs";
import "./footer.css"
// import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="container">
		<Box>
<p id="invisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit error, quasi sint illum eius facere, possimus expedita repellat incidunt quo ipsum suscipit quia eos cum itaque perferendis vero perspiciatis harum!Lorem</p>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							<BsQrCode/> LD
						</FooterLink>
					
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">
						<Link to={'/Services/SellCars'}> <BsCart2/>	Buy a Cars</Link>
						</FooterLink>
						<FooterLink href="#">
						<BsTools/>	Maintainance Tools
						</FooterLink>
						<FooterLink href="#">
						<BsPeople/>	Maintainance Team
						</FooterLink>
						<FooterLink href="#">
						<BsDatabaseCheck/>	Training
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							<BsPhoneVibrate/>+250787944577
						</FooterLink>
						<FooterLink href="#">
						<BsPhoneVibrate/>+250727556145
						</FooterLink>
						<FooterLink href="#">
						<BsWhatsapp/>+250787944577
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>

						<FooterLink href="#">
						<BsWhatsapp/>+250787944577
						</FooterLink>
						<FooterLink href="#">
						<BsInstagram/>AKINGENEYE Leon 
						</FooterLink>
						<FooterLink href="#">
						<BsLinkedin/>AKINGENEYE Leon 
						</FooterLink>
						<FooterLink href="#" >
						<BsEnvelope /> leonakingeneye
						2002@gmail.com 
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
		<p>
			<b> Leon.Inc</b>
			</p>
		</div>
	);
};
export default Footer;
