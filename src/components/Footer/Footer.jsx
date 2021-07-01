import React from 'react'
import useStyles from'./footerStyles';
import {Icon} from '@material-ui/core';
import instagram from "../icons/instagram.png";
import whatsapp from "../icons/whatsapp.png";
import facebook from "../icons/facebook.png";
const Footer = () => {
	const classes = useStyles();
	return (
		<div className = {classes.bigFooter}>
			<div className = {classes.takeSpace}></div>
			<div className = {classes.footer}>
				<div className = {classes.footer1}>
					<h3> This website is made for learning purposes. 2021. </h3>
                    <h3> Made with ❤ by Ashutosh. </h3>
					<p> Icons made by <a className = {classes.anchor} href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> </p>
				</div>
				<div className = {classes.contacts}>
					<Icon className = {classes.Icon}>
				        <a href = "https://www.instagram.com/" className = {classes.imageIcon}> 
				        	<img className = {classes.imageIcon} alt = "instagram" src={instagram} />
				        </a>
				    </Icon>
				    <Icon  className = {classes.Icon}>
				    	<a className = {classes.imageIcon} href = "https://www.whatsapp.com/?lang=en" style = {{textDecoration: 'none'}}> 
				    		<img className = {classes.imageIcon}  alt= "whatsapp" src={whatsapp} />
				    	</a>
				    </Icon>
				    <Icon className = {classes.Icon} >
				    	<a href ="https://www.facebook.com/" className = {classes.imageIcon}>
				        	<img className = {classes.imageIcon} alt = "facebook" src={facebook} />
				        </a>
				    </Icon>

				</div>
			</div>
		</div>

	);
}



export default Footer;