import { React, useContext, useState, useEffect } from "react"
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FlagIcon from '@material-ui/icons/Flag';

import { NativeSelect } from '@material-ui/core/';
import { useForm, Controller } from 'react-hook-form';

import Backdrop from '@material-ui/core/Backdrop';
import { Grid, Tooltip, IconButton } from '@material-ui/core'
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';


import { AuthContext } from '../../context/Auth/AuthContext'

import { makeStyles } from '@material-ui/core/styles';
import { modalStyles, RegGoalStyles } from "./styles";

const CreateGoal = () => {

    /* MUI LOGIC */
    const modalClasses = modalStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    /* CREATEGOAL LOGIC */
    const { user: {user}, goal, setGoal, postGoal} = useContext(AuthContext) 
    const [validator, setValidator] = useState(false)


    /* REGGOAL LOGIC */

    const onSubmit = data => {
      data.status = 'In progress'
      console.log(data);
      setGoal(data)
      setValidator(true)
    }

    useEffect(() => {
      validator && postGoal(goal);
      setValidator(false)
    }, [validator])


    return(
        <div>
            <Tooltip title="Create Goal">
                <IconButton aria-label="" onClick={handleOpen}  >
                    <AddBoxTwoToneIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={modalClasses.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={open}>
              <div className={modalClasses.paper}>
                <RegGoal onSubmit={onSubmit}/>
              </div>
            </Fade>
      </Modal>
    </div>
    )
    
}


export default CreateGoal;


const RegGoal = (props) => {
  
  const RegGoalClasses = RegGoalStyles();

  const { register, handleSubmit, errors, control } = useForm();





  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={RegGoalClasses.paper}>
        <Avatar className={RegGoalClasses.avatar}>
          <FlagIcon />
        </Avatar>
        <form className={RegGoalClasses.form} onSubmit={handleSubmit(props.onSubmit)} noValidate>

        <Controller
            as={
              <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="GoalName"
              label="Goal Name"
              name="Goal Name"
              autoComplete="Goal Name"
              autoFocus
              />
            }
              name="name"
              control={control}
              defaultValue=""
              rules={{
                  required: "A goal name is required",
              }}
        />
        <Controller
            as={
              <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Category"
              label="Category"
              name="Category"
              autoComplete="Category"
              autoFocus
              />
            }
              name="category"
              control={control}
              defaultValue=""
              rules={{
                  required: "Category is required",
              }}
        />

          <Controller
            as={
                <NativeSelect fullWidth>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </NativeSelect>
            }
            required
            name="period"
            control={control}
            defaultValue="Daily"
          />

          <Controller
            as={
              <TextField 
              variant="outlined"
              margin="normal"
              fullWidth
              type="date"
              id="ExpirationDate"
              name="Expiration Date"
              autoComplete="Expiration Date"
              autoFocus
              />
            }
              name="expire_date"
              control={control}

          />


          <Controller
            as={
              <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Donation"
              label="Donation"
              name="Donation"
              autoComplete="Donation"
              autoFocus
              />
            }
              name="amount"
              control={control}
              defaultValue="5"
              rules={{
                required: "An amount is required",
                min: 5,
                message: 'The minimum amount is 5'
            }}

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={RegGoalClasses.submit}
          >
            Create
          </Button>
         
        </form>
      </div>
    </Container>
  );
}

