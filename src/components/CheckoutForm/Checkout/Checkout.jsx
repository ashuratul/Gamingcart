import React, {useState, useEffect } from 'react';
import {Paper, Typography, Divider, Button, CssBaseline} from '@material-ui/core';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {commerce} from '../../../lib/commerce';
import {Link} from 'react-router-dom';


const steps = ['Shipping address' , 'Payment details'];

const Checkout = ({cart, order, onCaptureCheckout, error, refresh}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [ShipData, setShipData] = useState({});
	

	const nextStep = () => 	setActiveStep((prev) => prev + 1 );
	const backStep = () => setActiveStep((prev) => prev - 1  );

	useEffect(() => {
		if (cart.id) {
			const generateToken  = async () => {
				try {
					const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
					setCheckoutToken(token);
				}
				catch(error) {
					
				}
				
			}
			generateToken();
		}
		

	}, [cart]);



	
	

	const Confirmation = ({ShipData}) => {

		return (
			<div style = {{textAlign: 'center'}}>
				<Typography variant = "h4" gutterBottom justify = 'center'> Thank you for choosing us! </Typography>
				<Typography variant = "h5" gutterBottom>
				Dear {ShipData.firstName}!
				<br />
				<Typography variant = "h6" gutterBottom>
				The order will be confirmed upon payment. 
				<br />
				Please transfer {checkoutToken.live.subtotal.raw} ₹ to the following account.
				<br />
				Upon transfer, we will notify you to your email, {ShipData.email}.
				</Typography>
				<Divider />
				<div style ={{display: 'flex', backgroundColor: '#FFC0CB', justifyContent: 'center', margin: '1rem'}}> 
					<Typography variant = "subtitle1" gutterBottom>
					Ashutosh Tripathi
					<br />
					Card Number: 4242 4242 4242 4242 
					<br />
					</Typography>
				</div>
				<br />
				<Button component = {Link} to ="/" variant = "outlined" > Back to Home </Button>

				</Typography>
			</div>);
	}

	const next = (data) => {
		
		setShipData(data);
		
		nextStep();

	}

	const Form = () => ( activeStep === 0 
		? <AddressForm checkoutToken = {checkoutToken} next = {next}/> 
		: <PaymentForm ShipData = {ShipData} checkoutToken = {checkoutToken} 
		backStep = {backStep} onCaptureCheckout = {onCaptureCheckout} nextStep = {nextStep}/>



		)	
	



	return (
		<div
    style={{
          display: "flex",
          flexWrap: "wrap",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
			<CssBaseline />
			<div className = {classes.toolbar} />
			<main className = {classes.layout}>
				<Paper className = {classes.paper}>
					<Typography variant = "h4" align = "center"> Checkout </Typography>
					<Divider />
					<br />
					<br />
					{activeStep === steps.length ?  <Confirmation ShipData = {ShipData}/> : (checkoutToken && <Form />)}
				</Paper> 
			</main>
		</div>
		);
}
export default Checkout;