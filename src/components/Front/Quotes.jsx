import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import useStyles from './frontStyles';
import eco from "../icons/eco.png";
import test from "../icons/test.png";
import chat from "../icons/chat.png";
const Quotes =() => {
	const classes = useStyles();
return (
	<div className = {classes.content} > 	
		<div className = {classes.words}> 
			<Typography variant = "h4" align=" center" justify= "center">
           " Wanting something does not give you the right to have it"
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center" gutterBottom>
            – Assassin’s Creed 2.
			</Typography>
			<div className = {classes.toolbar} /> 
			<Typography variant = "h4" align=" center" justify= "center">
            “Success is not final, failure is not fatal: it is the courage to continue that counts "
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center">
            – ‘Call of duty.” – Modern Warfare
			</Typography>
			<div className = {classes.toolbar} /> 
		</div>
		<div className = {classes.why}>
			<Typography variant = "h4">
				About Us.
			</Typography>
			<Grid container
				direction="row"
  				justify="center"
  				alignItems="center">
  				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
					<img className = {classes.image} alt = "eco" src={eco}/>
					<Typography variant = "subtitle2" align = "center">
						We are green. None of our products harm our earth. 
					</Typography>
				</div>
				</Grid>
				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
				    <img className = {classes.image}  alt = "test" src={test} />
					<Typography variant = "subtitle2" align = "center">
						We are reliable. All our products had dermatological tests approved.
					</Typography>
				</div>
				</Grid>
				<Grid item xs ={12} sm ={6} md ={3} lg ={3}>
				<div className = {classes.box}>
					<img className = {classes.image} alt = "talk" src={chat} />
					<Typography variant = "subtitle2" align = "center">
						We are friendly. We provide the consultation you need and are highly responsive to any requests.
					</Typography>
				</div>
				</Grid>
			</Grid>
		</div>
	</div>
	);
}
 export default Quotes;