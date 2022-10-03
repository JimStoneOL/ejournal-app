import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const CreateEstimation=()=>{

    const [date, setDate] = useState(dayjs(Date.now()));
    const [estimation, setEstimation] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  

    const handleChange = (event) => {
        setEstimation(event.target.value);
    }

    return(<>
     <Button onClick={handleOpen} variant="text" style={{backgroundColor:'white',marginLeft:'15%'}}>Поставить оценку</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Оценка
          </Typography>
          <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Оценка</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={estimation}
          label="Оценка"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Дата"
          value={date}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      <Button variant="contained" style={{marginLeft:'20px',marginTop:'10px'}}>Поставить</Button>
    </Box>
        </Box>
      </Modal>
    </>)
}