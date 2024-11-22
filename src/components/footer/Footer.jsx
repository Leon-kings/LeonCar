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
<div className="title"></div>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							<BsQrCode className='icons'/> LD
						</FooterLink>
					
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">
						<Link to={'/Services/SellCars'}> <BsCart2 className='icons'/>	Buy a Cars</Link>
						</FooterLink>
						<FooterLink href="#">
						<BsTools className='icons'/>	Maintainance Tools
						</FooterLink>
						<FooterLink href="#">
						<BsPeople className='icons'/>	Maintainance Team
						</FooterLink>
						<FooterLink href="#">
						<BsDatabaseCheck className='icons'/>	Training
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							<BsPhoneVibrate className='icons'/>+250787944577
						</FooterLink>
						<FooterLink href="#">
						<BsPhoneVibrate className='icons'/>+250727556145
						</FooterLink>
						<FooterLink href="#">
						<BsWhatsapp className='icons'/>+250787944577
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>

						<FooterLink href="#">
						<BsWhatsapp className='icons'/>+250787944577
						</FooterLink>
						<FooterLink href="#">
						<BsInstagram className='icons'/>AKINGENEYE Leon 
						</FooterLink>
						<FooterLink href="#">
						<BsLinkedin className='icons'/>AKINGENEYE Leon 
						</FooterLink>
						<FooterLink href="#" >
						<BsEnvelope className='icons'/> leonakingeneye
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
