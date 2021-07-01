import React, {useState, useEffect} from 'react' ; 
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';
import {commerce} from '../../lib/commerce';
import {Link} from 'react-router-dom';

const AddressForm = ({checkoutToken, next, nextStep, setActiveStep, setShipData}) => {
	const methods = useForm();
	const [SCs, setSCs] = useState([]);
	const [SC, setSC] = useState('');
	const [SDs,setSDs] = useState([]);
	const [SD, setSD] = useState('');
	

	const countries = Object.entries(SCs).map(([code, name]) => ({id: code, label: name}));
	const subdivisions = Object.entries(SDs).map(([code, name]) => ({id: code, label: name}));
	

	const fetchShippingCountries = async (checkoutTokenId) => {
		const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
		setSCs(countries);
		setSC(Object.keys(countries)[0]);
	}
	
	

	const fetchShippingSubdivisions = async (countryCode) => {
		const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
		setSDs(subdivisions);
		setSD(Object.keys(subdivisions)[0]);
		
	}


	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
	}, []);

	useEffect(() => {
		if (SC) fetchShippingSubdivisions(SC);
	}, [SC]);


	

	

	
	return (
		<div>
			<Typography variant = "h6" gutterBottom> Shipping Address </Typography>
			<FormProvider {...methods} >
				<form onSubmit = {methods.handleSubmit((data) =>  next({ ...data, SC, SD }))}>
					<Grid container spacing = {3}>
						<FormInput required name = 'firstName' label = 'First Name' />
						<FormInput required name = 'lastName' label = 'Last Name' />
						<FormInput required name = 'city' label = 'City' />
						<FormInput required name = 'address' label = 'Address' />
						<FormInput required name = 'email' label = 'Email' />
						<Grid item xs = {12} sm = {6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select value = {SC} fullWidth onChange = {(e) => setSC(e.target.value)} >
								{countries.map((country) => (
									<MenuItem key = {country.id} value = {country.id}>
									 {country.label}
									</MenuItem>
									))}
								
							</Select>
						</Grid>
						<Grid item xs = {12} sm = {6}>
							<InputLabel>Region</InputLabel>
							<Select value = {SD} fullWidth onChange = {(e) => setSD(e.target.value)} >
								{subdivisions.map((subdivision) => (
									<MenuItem key = {subdivision.id} value = {subdivision.id}>
									 {subdivision.label}
									</MenuItem>
									))}
							</Select>
						</Grid>
					</Grid>
					<br />
					<div style = {{display: "flex", justifyContent: "space-between"}}>
						<Button variant = "outlined" component = {Link} to="/cart"> Back to Cart </Button>
						<Button variant = "contained"  type = "submit" color= " primary" > Next </Button>

					</div>
				</form>
			</FormProvider>

		</div>);
}
export default AddressForm;