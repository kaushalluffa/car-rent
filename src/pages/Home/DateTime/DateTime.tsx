import { Grid, InputLabel, Typography } from '@mui/material';
import { memo } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
interface DateTimeProps {
  // Define your prop types here
}

const DateTime: React.FC<DateTimeProps> = () => {
  return (
    <Grid container alignItems={'center'} justifyContent="space-between">
      <Grid item display="flex" flexDirection="column" xs={5.9} gap={1}>
        <Typography variant="body1" fontWeight={600}>
          Pick-Up
        </Typography>
        <Grid
          item
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            '& .MuiInputBase-root': {
              height: 40,
            },
          }}
        >
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select size="small" value={1} label="Location" onChange={() => {}}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Pick Up Date" value={''} onChange={(newValue) => console.log(newValue)} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="Pick Up Time" value={''} onChange={(newValue) => console.log(newValue)} />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>

      <Grid item display="flex" flexDirection="column" xs={5.9} gap={1}>
        <Typography variant="body1" fontWeight={600}>
          Drop-Off
        </Typography>
        <Grid
          item
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            '& .MuiInputBase-root': {
              height: 40,
            },
          }}
        >
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select size="small" value={1} label="Location" onChange={() => {}}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Pick Up Date" value={''} onChange={(newValue) => console.log(newValue)} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="Pick Up Time" value={''} onChange={(newValue) => console.log(newValue)} />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(DateTime);
