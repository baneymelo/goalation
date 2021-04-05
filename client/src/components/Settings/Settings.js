import {React, Component} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Grid, Typography } from '@material-ui/core'

import { settingsStyles } from "./styles";

/* const classes = settingsStyles(); */

export default class PaymentForm extends Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  



  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">


        <Grid
            container
            direction="column"
            justify="center"
            justifyContent="center"
            alignItems="center"
        >
        <Grid item > 
        <Typography variant="h2" color="textSecondary" component="p">
            <br></br>
        </Typography>
        </Grid>
        <Grid item /> 
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>

        <Grid item > 
        <Typography variant="h2" color="textPrimary" component="p">
            Settings
        </Typography>
        </Grid>

        <Grid item > 
        <Typography variant="h2" color="textSecondary" component="p">
            <br></br>
        </Typography>

        </Grid>

        <Grid item > 

        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

        </Grid>
        <Grid item > 

        	<input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

        </Grid>
        <Grid item > 

        	<input
            type="string"
            name="expiry"
            placeholder="Date Expire"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

        </Grid>
        <Grid item > 

        	<input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

        </Grid>
        	
          
        </form>
        </Grid>
      </div>
    );
  }
}




            
                
                
            