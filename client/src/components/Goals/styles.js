import { makeStyles } from '@material-ui/core/styles';

export const modalStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 600,
    width: 500
  },
}));

export const RegGoalStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const goalStyles = makeStyles((theme) => ({

  space: {
    marginTop: theme.spacing(10)
  }

}));


export const summaryStyles = makeStyles({
  root: {
    maxWidth: 600,
    width: 600
  },
  media: {
    height: 140,
  },
});


export const historyStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
