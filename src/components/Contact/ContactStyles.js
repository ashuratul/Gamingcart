import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image_holder: {
    padding: 0,
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      display:"none",
    },

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '100vh',
    width : 'auto',
  },
  contact: {
    paddingLeft: '1rem',
  },
  root: {
    flexGrow: 1,
    maxWidth: '100%',
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
  }
}));