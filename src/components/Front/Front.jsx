import React from 'react';
import {Grid, Typography, CssBaseline} from '@material-ui/core';
import useStyles from './frontStyles';
const Front =() => {
	const classes = useStyles();
return (
	<div className = {classes.content} > 
		<CssBaseline />
		<div className = {classes.toolbar} />
		 
		<Grid  container
  				direction="row"
  				justify="center"
  				alignItems="center"
				spacing = {2} >
			<Grid item xs ={6} sm ={6} md ={6} lg ={6} >
				<img  width = "100%" src = "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg" alt = "image1" />
			</Grid>
			<Grid item xs ={6} sm ={6} md ={6} lg ={6} >
				<img  width = "100%" src = "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1612812939" alt = "image2" />
			</Grid>
			
				<div className = {classes.words} >
					<Typography variant = "h4" align=" center" justify= "center">
						For Better Gamming Experience
					</Typography>
					<Typography variant = "h5" align=" center" justify= "center">
						Equip With Latest Techs
					</Typography>
				</div>
			
		</Grid>
		<div className = {classes.words}> 
			<Typography variant = "h2" align=" center" justify= "center">
				Enjoy your little journey here.
			</Typography>
			<Typography variant = "h6" align=" center" justify= "center">
				The main purpose of playing Game is to maintain own mental and physical health, which is why we are here to assist You with best Equipment.  
				This website is made for educational purposes only.  
			</Typography>
		</div>
	</div>
	);
}
 export default Front;