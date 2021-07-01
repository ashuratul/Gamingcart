import React from 'react';
import {Drawer, List, Divider, ListItem, ListItemText, Icon} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import home from "../icons/home.png";
import team from "../icons/team.png";
import contact from "../icons/contact.png";

const DrawerMenu = ({state, toggleDrawer}) => {
	const classes = useStyles();
 	return (
 			<Drawer open={state} onClose={toggleDrawer(false)}>
                <div
			      className={classes.list}
			      role="presentation"
			      onClick={toggleDrawer(false)}
			      onKeyDown={toggleDrawer(false)}
			    >
			      <List>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/" >
			          	<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} src={home} alt= "home" />
			          	</Icon>
			            <ListItemText primary="Home" />
			          </ListItem>
			      </List>
			      <Divider />
			      <List>
				  	  <ListItem button = {true} className = {classes.root} component = {Link} to="/contact"> 
			  	  		<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} alt="contact" src={contact} />
			          	</Icon>
			            <ListItemText primary="Contact" />
			          </ListItem>
			          <ListItem button = {true} className = {classes.root} component = {Link} to="/team"> 
			  	  		<Icon className = {classes.rootIcon}>
			          		<img className = {classes.imageIcon} alt="team" src={team} />
			          	</Icon>
			            <ListItemText primary="Our Team" />
			          </ListItem>
			      </List>
			    </div>
          </Drawer>
  );
}

export default DrawerMenu;