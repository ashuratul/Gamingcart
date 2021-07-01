import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  images: {
    display: 'flex',
    justifyContent: "center",
    padding: '1rem',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing(3),
  },

  imageGl: {
    marginRight: "10px",
    transform : "translateX(-64px)",
    height: "10rem",
    [theme.breakpoints.down('sm')]: {
      display:"none",
    },
  },
  words: {
    color: "white",
    backgroundColor: "#FFC0CB",
    marginTop: "2rem",
    padding: "2rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justify: "center",
    textAlign: 'center',
  },
  divider: {
    marginBottom: "50px",
  },
  why: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: "2rem",
    width: "100%",
    color: "#FFC0CB",
    backgroundColor: "white",
    textAlign:'center',
    flexDirection:'row',
  },
  image: {
    display: 'flex',
    height: '10vh',
    padding: "1rem",
    
  },
  box: {
    padding: "0.5rem",
    textAlign: 'center',
  },
 // paddingAdd: {
   // padding: theme.spacing(0),
  //}
}));