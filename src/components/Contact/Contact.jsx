import React from 'react';
import {Grid, Typography, CssBaseline} from '@material-ui/core';
import useStyles from './ContactStyles';


const Contact =() => {
	const classes = useStyles();
return (

    <div className={classes.root}>
    	<CssBaseline />
		  <div className = {classes.toolbar} />
        <Grid container 
        	spacing={2}
        	direction="row"
  			justify="center"
  			alignItems="center"
			>
          	<Grid item sm={6}  md ={6} lg ={6}>
	            <div className = {classes.image_holder}>
	              	<img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80" />
	            </div>
          	</Grid>
          	<Grid item xs ={12} sm ={6} md ={6} lg ={6} >
          		<div className = {classes.contact} >
	                <Typography gutterBottom variant="h2">
	                  Contact Us
	                </Typography>
	                <Typography variant="h5" gutterBottom>
	                  We are ready to help you anytime, please contact us via example@example.com
	                </Typography>
	                <Typography variant="subtitle2" gutterBottom>
	                  South Korea, Seoul, Gangnam-gu, Gaepo-dong, 111-111
	                </Typography>
                </div>
        	</Grid>
        </Grid>
    </div>
  );
}


 export default Contact;