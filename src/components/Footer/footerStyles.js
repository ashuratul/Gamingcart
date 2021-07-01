import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  bigFooter: {
    display: 'flex',
    flexDirection: 'column',

  },
  footer : {
  	backgroundColor: "#FFC0CB",
  	display: "flex",
  	bottom: 0,
  	paddingTop: "2rem",
  	paddingBottom: "2rem",
  	width: "100%",
  	color: "white",
  },
  	footer1 :{
  		width: "60%",
  		height: "auto",
  		marginLeft: "1rem",

  	},

  contacts : {
  	display:"flex",
  	flexDirection : "row",
  	width: "40%",
  	justifyContent: "flex-end",
  	alignItems:"center",
  	flexWrap: "wrap",
  	height: "5rem",
  	marginRight: "1rem",
  },
	Icon: {
    display: 'flex',
    height: '70%',
    width: "auto",
    align: "center",
    margin: "0.5rem"

  },
  imageIcon: {
  	height: "inherit",
  	width: "inherit",
  },
  anchor: {
  	textDecoration: "none",
  	color: "white",
  	underline: "none",
  },
  takeSpace: {
    flexGrow: 5,
    height: 'auto',
  }

}));