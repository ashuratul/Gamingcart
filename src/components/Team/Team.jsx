import React from 'react';
import {Grid, Typography, CssBaseline, Divider, Avatar} from '@material-ui/core';
import useStyles from './TeamStyles';



const Team =() => {
	const classes = useStyles();
	return (
		<div className={classes.root} style ={{textAlign: 'center'}}>
    		<CssBaseline />
		  	<div className = {classes.toolbar} />
		  	<Typography gutterBottom variant="h2">
	           Our Team
	        </Typography>
	        <Divider />
	        <div className={classes.words}>
	        	<Typography gutterBottom variant = "h5">
		        	We cherish each of our team members. We work together to create. 
		        	<br />
		        	We do welcome new members.
	        	</Typography>
	        </div>
		  	<Grid container 
	        	spacing={2}
	        	direction="row"
	  			justify="center"
	  			alignItems="center"
	  			className = {classes.grid}
			>
				<Grid item xs = {12} sm = {6} md = {3} lg={3} container spacing= {1} direction ="row" justify="left"
	  			alignItems="center">
					<Grid item>
						<Avatar className = {classes.pink}> G </Avatar>
					</Grid>
					<Grid item>
							<Typography variant="body2">
			           			CEO
			        		</Typography>
			        </Grid>
				</Grid>
				<Grid item xs = {12} sm = {6} md = {3} lg={3} container spacing= {1} direction ="row" justify="left"
	  			alignItems="center">
					<Grid item>
						<Avatar className = {classes.pink}> O </Avatar>
					</Grid>
					<Grid item>
						<Typography variant="body2">
		           			Product Manager
		        		</Typography>

	        		</Grid>
	        		
				</Grid>
				<Grid item xs = {12} sm = {6} md = {3} lg={3} container spacing= {1} direction ="row" justify="left"
	  			alignItems="center">
					<Grid item>
						<Avatar className = {classes.pink}> O </Avatar>
					</Grid>
					<Grid item>
						<Typography variant="body2">
		           			Designer
		        		</Typography>
	        		</Grid>
				</Grid>
				<Grid item xs = {12} sm = {6} md = {3} lg={3} container spacing= {1} direction ="row" justify="left"
	  			alignItems="center">
					<Grid item>
						<Avatar className = {classes.pink}> D </Avatar>
					</Grid>
					<Grid item>
						<Typography variant="body2">
		           			Finance Officer
		        		</Typography>
	        		</Grid>
				</Grid>
				

			</Grid>

		</div>);
}
export default Team;