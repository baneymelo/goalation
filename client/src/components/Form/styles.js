import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  warning:{
    color: "#bf1650",
    content: "⚠ "
  }
}));

export default useStyles;