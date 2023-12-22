import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { memo } from 'react';
import Car from '../../assets/car.png';
import { Paper } from '@mui/material';

interface PaymentProps {
  // Define your prop types here
}

const Payment: React.FC<PaymentProps> = () => {
  const theme = useTheme();
  return (
    <Grid container alignItems="center" justifyContent="space-between" p={3}>
      <Grid item xs={6} display="flex" flexDirection={'column'} gap={1} p={2} component={Paper} variant="outlined">
        {/* Billing Info */}
        <Grid item display="flex" flexDirection="column" width="100%" gap={1}>
          <Typography variant="h5">Billing Info</Typography>
          <Typography variant="caption">Please enter your billing info</Typography>
          <Grid item display="flex" flexWrap={'wrap'} rowGap={1}>
            <Grid item xs={6}>
              <Typography variant="h6">Name</Typography>
              <TextField size="small" placeholder="Your name" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Phone Number</Typography>
              <TextField size="small" placeholder="Phone Number" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Address</Typography>
              <TextField size="small" placeholder="Address" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Town/City</Typography>
              <TextField size="small" placeholder="Town or city" />
            </Grid>
          </Grid>
        </Grid>
        {/* Rental Info */}
        <Grid item display="flex" flexDirection="column" width="100%" gap={1}>
          <Typography variant="h5">Rental Info</Typography>
          <Typography variant="caption">Please enter your billing info</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Pick-Up" />
            </RadioGroup>
          </FormControl>
          <Grid item display="flex" flexWrap={'wrap'} rowGap={1}>
            <Grid item xs={6}>
              <Typography variant="h6">Locations</Typography>
              <TextField size="small" placeholder="Select your city" />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                '& .MuiInputBase-root': {
                  height: 40,
                },
              }}
            >
              <Typography variant="h6">Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Pick Up Date" value={''} onChange={(newValue) => console.log(newValue)} />
              </LocalizationProvider>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                '& .MuiInputBase-root': {
                  height: 40,
                },
              }}
            >
              <Typography variant="h6">Time</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Pick Up Time" value={''} onChange={(newValue) => console.log(newValue)} />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
        {/* Payment Method */}
        <Grid item display="flex" flexDirection="column" width="100%" gap={1}>
          <Typography variant="h5">Payment Method</Typography>
          <Typography variant="caption">Please enter your payment method</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Credit Card" />
            </RadioGroup>
          </FormControl>
          <Grid item display="flex" flexWrap={'wrap'} rowGap={1}>
            <Grid item xs={6}>
              <Typography variant="h6">Card Number</Typography>
              <TextField size="small" placeholder="Card number" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Expiration Date</Typography>
              <TextField size="small" placeholder="MM/YY" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Cardholder Name</Typography>
              <TextField size="small" placeholder="Cardholder name" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">CVC</Typography>
              <TextField size="small" placeholder="CVC" />
            </Grid>
          </Grid>
        </Grid>
        {/* Confirmation */}
        <Grid item display="flex" flexDirection="column" width="100%" gap={1}>
          <Typography variant="h5">Confirmation</Typography>
          <Typography variant="caption">We are getting to the end. Just few clicks and your rental is ready</Typography>
          <Grid item display="flex" flexWrap={'wrap'}>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree with sending an Marketing and newsletter emails. No spam, promissed."
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree with our terms and conditions and privacy policy."
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ bgcolor: theme.cr.primary[500] }}>
            Rent Now
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={5.5} height="100vh">
        <Grid container component={Paper} variant="outlined" p={2}>
          <Grid item>
            <Typography variant="h5">Rental Summary</Typography>
            <Typography variant="caption">
              Prices may change depending on the length of the rental and the price of your rental car.
            </Typography>
          </Grid>
          <Grid width="100%" item display="flex" flexDirection={'column'} gap={1}>
            <Grid item display="flex" alignItems="center" gap={3}>
              <Grid item width="100px">
                <img src={Car} alt="product img" width="100%" />
              </Grid>
              <Grid item display="flex" flexDirection="column" gap={0.5}>
                <Typography variant="h5">Nissan GT-R</Typography>
                <Grid item display="flex" alignItems="center" gap={0.5}>
                  <Rating name="read-only" value={4} readOnly />
                  <Typography variant="caption">440+ Reviews</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">$80.00</Typography>
            </Grid>
            <Grid item display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="body1">Tax</Typography>
              <Typography variant="body1">$0</Typography>
            </Grid>
            <Grid item display="flex" alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="body1">Total Rental Price</Typography>
                <Typography variant="caption">Overall price and includes rental discount</Typography>
              </Grid>
              <Typography variant="body1">$80.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(Payment);
