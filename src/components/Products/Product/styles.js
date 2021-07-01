import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    maxHeight: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productGrid: {
    height: '80%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  productImg: {
    maxWidth: '100vh',
    padding: '1rem',
    height: '100vh',

  },
   mediaImg: {
    paddingTop: '170%', 
    marginRight: '1rem',
  },
  toolbar: theme.mixins.toolbar,
   content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));