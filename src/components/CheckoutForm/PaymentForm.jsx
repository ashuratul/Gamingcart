import React from 'react' ; 
import { Typography, Button, Divider } from '@material-ui/core';
import Review from './Review';



const PaymentForm  = ({checkoutToken, ShipData, backStep, onCaptureCheckout, nextStep}) => {
	const handleSubmit = async (event) => {
    	event.preventDefault();
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: ShipData.firstName, lastname: ShipData.lastName, email: ShipData.email },
        shipping: { name: `${ShipData.firstName} ${ShipData.lastName}`, street: ShipData.address, town_city: ShipData.city, county_state: ShipData.SD,  postal_zip_code: '00000', country: ShipData.SC },
      };
		nextStep();
		
      onCaptureCheckout(checkoutToken.id, orderData);
      
    }
  


	return (
		<div>
			<Review checkoutToken = {checkoutToken} />
			<Divider />
			<Typography varinat ="h6" gutterBottom style = {{margin: '20px 0'}}>Payment Method</Typography>
				<div style = {{display: 'flex', justifyContent: 'space-between'}}>
					<Button variant = "outlined" onClick = {backStep} > Back </Button>
					<Button type = "submit" variant = "contained" color= "primary" onClick = {(e) => handleSubmit(e)}> 
								Pay {checkoutToken.live.subtotal.formatted_with_symbol} 
					</Button>
				</div>
		</div>
		);
}
export default PaymentForm;