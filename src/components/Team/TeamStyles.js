import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    padding: '1rem',
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
  divider: {
    marginBottom: "50px",
  },
  box: {
    padding: "0.5rem",
    textAlign: 'center',
  },
  paddingAdd: {
    padding: theme.spacing(3),
  },
  grid: {
    padding: '2rem',
    [theme.breakpoints.up('sm')]: {
      paddingRight: '10rem',
      paddingLeft: '10rem',
    },
  },
  pink: {
    color: 'white',
    backgroundColor: '#FFC0CB',
  },
  Icon: {
    display: 'flex',
    align: "center",
    margin: "0.5rem",

  },
  imageIcon: {
    height: "inherit",
    width: "inherit",
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
    maxWidth: '100%',
  },
}));